package repositories

import (
	"trivia_app/models"

	"gorm.io/gorm"
)

type TransactionRepository interface {
	FindTransactions() ([]models.Transaction, error)
	GetTransaction(transactionId int) (models.Transaction, error)
	CreateTransaction(transaction models.Transaction) (models.Transaction, error)
}

func RepositoryTransaction(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindTransactions() ([]models.Transaction, error) {
	var transactions []models.Transaction
	err := r.db.Preload("User").Preload("Diamond").Find(&transactions).Error

	return transactions, err
}

func (r *repository) GetTransaction(transactionId int) (models.Transaction, error) {
	var transaction models.Transaction
	err := r.db.Preload("User").Preload("Diamond").First(&transaction, transactionId).Error

	return transaction, err
}

func (r *repository) CreateTransaction(transaction models.Transaction) (models.Transaction, error) {
	err := r.db.Preload("User").Preload("Diamond").Create(&transaction).Error

	return transaction, err
}

// func (r *repository) UpdateTransaction(status string, orderId int) (models.Transaction, error) {
// 	var transaction models.Transaction
// 	r.db.Preload("User").Preload("Diamond").First(&transaction, orderId)

// 	if status != transaction.Status && status == "success" {
// 		var user models.User
// 		r.db.First(&user, transaction.UserId)
// 		user.Diamond = user.Diamond +
// 		r.db.Save(&transaction)
// 	}

// 	transaction.Status = status
// 	err := r.db.Save(&transaction).Error
// 	return transaction, err
// }
