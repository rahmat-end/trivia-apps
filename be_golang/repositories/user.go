package repositories

import (
	"trivia_app/models"

	"gorm.io/gorm"
)

type UserRepository interface {
	FindUsers() ([]models.User, error)
	GetUser(ID string) (models.User, error)
}

func RepositoryUser(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindUsers() ([]models.User, error) {
	var users []models.User
	err := r.db.Find(&users).Error

	return users, err
}

func (r *repository) GetUser(ID string) (models.User, error) {
	var user models.User
	err := r.db.First(&user, ID).Error
	// SELECT * FROM users WHERE id = 2

	return user, err
}

// func (r *repository) CreateUser(users models.User) (models.User, error) {
// 	err := r.db.Create(&users).Error

// 	return users, err
// }

// func (r *repository) UpdateUser(users models.User) (models.User, error) {
// 	err := r.db.Save(&users).Error

// 	return users, err
// }

// func (r *repository) DeleteUser(user models.User) (models.User, error) {
// 	err := r.db.Delete(&user).Error

// 	return user, err
// }
