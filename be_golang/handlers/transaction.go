package handlers

import (
	"fmt"
	// "encoding/json"
	"net/http"

	"os"
	"strconv"
	"time"
	dto "trivia_app/dto/result"

	// transactiondto "trivia_app/dto/transaction"

	"trivia_app/models"
	"trivia_app/repositories"

	// "github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
	"github.com/midtrans/midtrans-go"
	"github.com/midtrans/midtrans-go/snap"
)

type handlerTransaction struct {
	TransactionRepository repositories.TransactionRepository
	DiamondRepository     repositories.DiamondRepository
	UserRepository        repositories.UserRepository
}

func HandlerTransaction(TransactionRepository repositories.TransactionRepository, DiamondRepository repositories.DiamondRepository, UserRepository repositories.UserRepository) *handlerTransaction {
	return &handlerTransaction{TransactionRepository, DiamondRepository, UserRepository}
}

func (h *handlerTransaction) FindTransactions(c echo.Context) error {
	// userLogin := c.Get("userLogin")
	// userId := userLogin.(jwt.MapClaims)["id"].(float64)

	transactions, err := h.TransactionRepository.FindTransactions()
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: transactions})
}

func (h *handlerTransaction) CreateTransaction(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userId := userLogin.(jwt.MapClaims)["id"].(float64)

	IdDiamond, _ := strconv.Atoi(c.Param("id"))
	user, err := h.UserRepository.GetUser(fmt.Sprintf("%.0f", userId))

	diamond, err := h.DiamondRepository.GetDiamond(IdDiamond)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	// request := new(transactiondto.CreateTransactionRequest)
	// if err := c.Bind(request); err != nil {
	// 	return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	// }

	// request.UserId = 1
	// request.Status = "pending" // next time we will cover this in payment gateway material

	// validation := validator.New()
	// err = validation.Struct(request)
	// if err != nil {
	// 	return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	// }

	var transactionIsMatch = false
	var transactionId int
	for !transactionIsMatch {
		transactionId = int(time.Now().Unix())
		transactionData, _ := h.TransactionRepository.GetTransaction(transactionId)
		if transactionData.IdTransaction == 0 {
			transactionIsMatch = true
		}
	}

	// var code1 = transactionId
	// var code2 = diamond.PriceDiamond

	transaction := models.Transaction{
		IdTransaction: transactionId,
		AmountDiamond: diamond.AmountDiamond,
		TotalPrice:    diamond.PriceDiamond,
		Status:        "pending",
		// UserId:        int(userId),
		UserId:    user.UserId,
		IdDiamond: IdDiamond,
	}

	dataTransactions, err := h.TransactionRepository.CreateTransaction(transaction)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	// 1. Initiate Snap client
	var s = snap.Client{}
	s.New(os.Getenv("SERVER_KEY"), midtrans.Sandbox)
	// Use to midtrans.Production if you want Production Environment (accept real transaction).

	// 2. Initiate Snap request param
	req := &snap.Request{
		TransactionDetails: midtrans.TransactionDetails{
			OrderID:  strconv.Itoa(dataTransactions.IdTransaction),
			GrossAmt: int64(diamond.PriceDiamond),
		},
		// Items: &[]midtrans.ItemDetails{
		// 	{
		// 		ID:    strconv.Itoa(diamond.IdDiamond),
		// 		Name: diamond.PhotoDiamond,
		// 		Price: int64(diamond.PriceDiamond),
		// 		Qty:   int32(diamond.AmountDiamond),
		// 	},
		// },
		CreditCard: &snap.CreditCardDetails{
			Secure: true,
		},
		CustomerDetail: &midtrans.CustomerDetails{
			FName: user.Name,
			Email: user.Email,
		},
	}

	// 3. Execute request create Snap transaction to Midtrans Snap API
	snapResp, _ := s.CreateTransaction(req)

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: snapResp})

	// return c.JSON(http.StatusOK, dto.ErrorResult{Code: http.StatusOK, Message: "user id is : " + fmt.Sprintf("%.0f", userId) + " diamond price is : " + strconv.Itoa(diamond.PriceDiamond)})
	// return c.JSON(http.StatusOK, dto.ErrorResult{Code: http.StatusOK, Message: "diamond is " + strconv.Itoa(diamond.PriceDiamond) + " session id is: " + userId})
}

// func (h *handlerTransaction) Notification(c echo.Context) error {
// 	var notificationPayload map[string]interface{}

// 	if err := c.Bind(&notificationPayload); err != nil {
// 		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
// 	}

// 	transactionStatus := notificationPayload["transaction_status"].(string)
// 	fraudStatus := notificationPayload["fraud_status"].(string)
// 	orderId := notificationPayload["order_id"].(string)

// 	// order_id, _ := strconv.Atoi(orderId)

// 	fmt.Print("ini payloadnya", notificationPayload)

// 	// if transactionStatus == "capture" {
// 	// 	if fraudStatus == "challenge" {
// 	// 		// TODO set transaction status on your database to 'challenge'
// 	// 		// e.g: 'Payment status challenged. Please take action on your Merchant Administration Portal
// 	// 		h.TransactionRepository.UpdateTransaction("pending", order_id)
// 	// 	} else if fraudStatus == "accept" {
// 	// 		// TODO set transaction status on your database to 'success'
// 	// 		h.TransactionRepository.UpdateTransaction("success", order_id)
// 	// 	}
// 	// } else if transactionStatus == "settlement" {
// 	// 	// TODO set transaction status on your databaase to 'success'
// 	// 	h.TransactionRepository.UpdateTransaction("success", order_id)
// 	// } else if transactionStatus == "deny" {
// 	// 	// TODO you can ignore 'deny', because most of the time it allows payment retries
// 	// 	// and later can become success
// 	// 	h.TransactionRepository.UpdateTransaction("failed", order_id)
// 	// } else if transactionStatus == "cancel" || transactionStatus == "expire" {
// 	// 	// TODO set transaction status on your databaase to 'failure'
// 	// 	h.TransactionRepository.UpdateTransaction("failed", order_id)
// 	// } else if transactionStatus == "pending" {
// 	// 	// TODO set transaction status on your databaase to 'pending' / waiting payment
// 	// 	h.TransactionRepository.UpdateTransaction("pending", order_id)
// 	// }

// 	// return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: notificationPayload})
// 	return c.JSON(http.StatusOK, dto.ErrorResult{Code: http.StatusOK, Message: "transaction status is : " + transactionStatus + " fraud status is: " + fraudStatus + " order id is: " + orderId})
// }
