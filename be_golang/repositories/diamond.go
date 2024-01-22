package repositories

import (
	"trivia_app/models"

	"gorm.io/gorm"
)

type DiamondRepository interface {
	FindDiamonds() ([]models.Diamond, error)
	GetDiamond(ID int) (models.Diamond, error)
}

func RepositoryDiamond(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindDiamonds() ([]models.Diamond, error) {
	var diamonds []models.Diamond
	err := r.db.Find(&diamonds).Error

	return diamonds, err
}

func (r *repository) GetDiamond(ID int) (models.Diamond, error) {
	var diamond models.Diamond
	err := r.db.First(&diamond, ID).Error

	return diamond, err
}
