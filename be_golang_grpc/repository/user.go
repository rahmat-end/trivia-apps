package repository

import (
	usertype "trivia_app_grpc/utils/type"

	"gorm.io/gorm"
)

type UserRepository interface {
	GetUser(ID int) (usertype.User, error)
	UpdateUser(userID int, user usertype.User) (usertype.User, error)
}

func RepositoryUser(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) GetUser(ID int) (usertype.User, error) {
	var user usertype.User
	err := r.db.First(&user, ID).Error
	// SELECT * FROM users WHERE id = 2

	return user, err
}

func (r *repository) UpdateUser(userID int, user usertype.User) (usertype.User, error) {
	err := r.db.Model(&usertype.User{}).Where("user_id = ?", userID).Updates(user).Error

	return user, err
}
