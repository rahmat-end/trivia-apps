package repositories

import (
	"trivia_app/models"

	"gorm.io/gorm"
)

type FreeAvatarRepository interface {
	FindFreeAvatars() ([]models.FreeAvatar, error)
	GetFreeAvatar(ID int) (models.FreeAvatar, error)
}

func RepositoryFreeAvatar(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindFreeAvatars() ([]models.FreeAvatar, error) {
	var freeAvatars []models.FreeAvatar
	err := r.db.Find(&freeAvatars).Error

	return freeAvatars, err
}

func (r *repository) GetFreeAvatar(ID int) (models.FreeAvatar, error) {
	var freeAvatar models.FreeAvatar
	err := r.db.First(&freeAvatar, ID).Error

	return freeAvatar, err
}
