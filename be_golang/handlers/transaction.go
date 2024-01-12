package handlers

import (
	// "fmt"
	"net/http"

	// "os"
	"strconv"
	"time"
	dto "trivia_app/dto/result"

	// transactiondto "trivia_app/dto/transaction"

	// "trivia_app/models"
	"trivia_app/repositories"

	// "github.com/go-playground/validator/v10"
	// "github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
	// "github.com/midtrans/midtrans-go"
	// "github.com/midtrans/midtrans-go/snap"
)

type handlerTransaction struct {
	TransactionRepository repositories.TransactionRepository
	DiamondRepository     repositories.DiamondRepository
}

func HandlerTransaction(TransactionRepository repositories.TransactionRepository, DiamondRepository repositories.DiamondRepository) *handlerTransaction {
	return &handlerTransaction{TransactionRepository, DiamondRepository}
}

// type handlerDiamondTransaction struct {
// 	DiamondRepository repositories.DiamondRepository
// }

// func DiamondTransactionHandler(diamondTransactionRepository repositories.DiamondRepository) *handlerDiamondTransaction {
// 	return &handlerDiamondTransaction{diamondTransactionRepository}
// }

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
	id, _ := strconv.Atoi(c.Param("id"))

	diamond, err := h.DiamondRepository.GetDiamond(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	// request := new(transactiondto.CreateTransactionRequest)
	// if err := c.Bind(request); err != nil {
	// 	return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	// }

	// userLogin := c.Get("userLogin")
	// userId := userLogin.(jwt.MapClaims)["id"].(float64)

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

	var code1 = transactionId
	var code2 = diamond.PriceDiamond

	// transaction := models.Transaction{
	// 	IdTransaction: transactionId,
	// 	TotalPrice:    diamond.PriceDiamond,
	// 	Status:        "pending",
	// 	// UserId:        int(userId),
	// 	UserId:    request.UserId,
	// 	IdDiamond: request.IdDiamond,
	// }

	// dataTransactions, err := h.TransactionRepository.CreateTransaction(transaction)
	// if err != nil {
	// 	return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	// }

	// // 1. Initiate Snap client
	// var s = snap.Client{}
	// s.New(os.Getenv("SERVER_KEY"), midtrans.Sandbox)
	// // Use to midtrans.Production if you want Production Environment (accept real transaction).

	// // 2. Initiate Snap request param
	// req := &snap.Request{
	// 	TransactionDetails: midtrans.TransactionDetails{
	// 		OrderID:  strconv.Itoa(dataTransactions.IdTransaction),
	// 		GrossAmt: int64(dataTransactions.Diamond.PriceDiamond),
	// 	},
	// 	CreditCard: &snap.CreditCardDetails{
	// 		Secure: true,
	// 	},
	// 	CustomerDetail: &midtrans.CustomerDetails{
	// 		FName: dataTransactions.User.Name,
	// 		Email: dataTransactions.User.Email,
	// 	},
	// }

	// // 3. Execute request create Snap transaction to Midtrans Snap API
	// snapResp, _ := s.CreateTransaction(req)

	// return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: snapResp})

	return c.JSON(http.StatusOK, dto.ErrorResult{Code: http.StatusOK, Message: "transaction id is : " + strconv.Itoa(code1) + " diamond price is: " + strconv.Itoa(code2)})
}

// func (h *handlerTransaction) Notification(c echo.Context) error {
// 	var notificationPayload map[string]interface{}

// 	if err := c.Bind(&notificationPayload); err != nil {
// 		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
// 	}

// 	transactionStatus := notificationPayload["transaction_status"].(string)
// 	fraudStatus := notificationPayload["fraud_status"].(string)
// 	orderId := notificationPayload["order_id"].(string)

// 	order_id, _ := strconv.Atoi(orderId)

// 	fmt.Print("ini payloadnya", notificationPayload)

// 	if transactionStatus == "capture" {
// 		if fraudStatus == "challenge" {
// 			// TODO set transaction status on your database to 'challenge'
// 			// e.g: 'Payment status challenged. Please take action on your Merchant Administration Portal
// 			h.TransactionRepository.UpdateTransaction("pending", order_id)
// 		} else if fraudStatus == "accept" {
// 			// TODO set transaction status on your database to 'success'
// 			h.TransactionRepository.UpdateTransaction("success", order_id)
// 		}
// 	} else if transactionStatus == "settlement" {
// 		// TODO set transaction status on your databaase to 'success'
// 		h.TransactionRepository.UpdateTransaction("success", order_id)
// 	} else if transactionStatus == "deny" {
// 		// TODO you can ignore 'deny', because most of the time it allows payment retries
// 		// and later can become success
// 		h.TransactionRepository.UpdateTransaction("failed", order_id)
// 	} else if transactionStatus == "cancel" || transactionStatus == "expire" {
// 		// TODO set transaction status on your databaase to 'failure'
// 		h.TransactionRepository.UpdateTransaction("failed", order_id)
// 	} else if transactionStatus == "pending" {
// 		// TODO set transaction status on your databaase to 'pending' / waiting payment
// 		h.TransactionRepository.UpdateTransaction("pending", order_id)
// 	}

// 	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: notificationPayload})
// }
