package repositories

import (
	"trivia_app/models"

	"gorm.io/gorm"
)

type QuestionRepository interface {
	FindQuestions() ([]models.Question, error)
	GetQuestion(ID int) (models.Question, error)
}

func RepositoryQuestion(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindQuestions() ([]models.Question, error) {
	var questions []models.Question
	err := r.db.Find(&questions).Error

	return questions, err
}

func (r *repository) GetQuestion(ID int) (models.Question, error) {
	var question models.Question
	err := r.db.First(&question, ID).Error

	return question, err
}
