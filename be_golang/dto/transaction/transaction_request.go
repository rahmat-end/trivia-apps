package transactiondto

type CreateTransactionRequest struct {
	TotalPrice int    `json:"totalPrice" validate:"required"`
	Status     string `json:"status" validate:"required"`
	UserId     int    `json:"userId" validate:"required"`
	IdDiamond  int    `json:"idDiamond" validate:"required"`
}
