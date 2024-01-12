package repositories

import (
	"trivia_app/models"

	"gorm.io/gorm"
)

type UserBuyAvatarRepository interface {
	FindUserBuyAvatars() ([]models.UserBuyAvatar, error)
	GetUserBuyAvatar(ID int) (models.UserBuyAvatar, error)
}

func RepositoryUserBuyAvatar(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindUserBuyAvatars() ([]models.UserBuyAvatar, error) {
	var userBuyAvatars []models.UserBuyAvatar
	err := r.db.Preload("User").Preload("BuyAvatar").Find(&userBuyAvatars).Error

	return userBuyAvatars, err
}

func (r *repository) GetUserBuyAvatar(ID int) (models.UserBuyAvatar, error) {
	var userBuyAvatar models.UserBuyAvatar
	err := r.db.Preload("User").Preload("BuyAvatar").First(&userBuyAvatar, ID).Error

	return userBuyAvatar, err
}
