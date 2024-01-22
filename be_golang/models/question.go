package models

import "time"

type Question struct {
	IdQuestion    int       `json:"idQuestion" gorm:"primaryKey:autoIncrement"`
	TheQuestion   string    `json:"theQuestion" gorm:"type:varchar(255)"`
	PhotoQuestion string    `json:"photoQuestion" gorm:"type:varchar(255)"`
	Answer1       string    `json:"answer1" gorm:"type:varchar(255)"`
	Answer2       string    `json:"answer2" gorm:"type:varchar(255)"`
	Answer3       string    `json:"answer3" gorm:"type:varchar(255)"`
	Answer4       string    `json:"answer4" gorm:"type:varchar(255)"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
}
