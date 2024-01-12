package repositories

import (
	"trivia_app/models"

	"gorm.io/gorm"
)

type BuyAvatarRepository interface {
	FindBuyAvatars() ([]models.BuyAvatar, error)
	GetBuyAvatar(ID int) (models.BuyAvatar, error)
}

func RepositoryBuyAvatar(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindBuyAvatars() ([]models.BuyAvatar, error) {
	var buyAvatars []models.BuyAvatar
	err := r.db.Find(&buyAvatars).Error

	return buyAvatars, err
}

func (r *repository) GetBuyAvatar(ID int) (models.BuyAvatar, error) {
	var buyAvatar models.BuyAvatar
	err := r.db.First(&buyAvatar, ID).Error

	return buyAvatar, err
}
