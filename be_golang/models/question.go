package models

import "time"

type Question struct {
	IdQuestion    int       `json:"id_question" gorm:"primaryKey:autoIncrement"`
	TheQuestion   string    `json:"the_question" gorm:"type:varchar(255)"`
	PhotoQuestion string    `json:"photo_question" gorm:"type:varchar(255)"`
	Answer1       string    `json:"answer_1" gorm:"type:varchar(255)"`
	Answer2       string    `json:"answer_2" gorm:"type:varchar(255)"`
	Answer3       string    `json:"answer_3" gorm:"type:varchar(255)"`
	Answer4       string    `json:"answer_4" gorm:"type:varchar(255)"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
