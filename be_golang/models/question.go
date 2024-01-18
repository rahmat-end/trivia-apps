package models

import (
	"encoding/json"
	"time"
)

type Question struct {
	IdQuestion  int             `json:"id_question" gorm:"primaryKey:autoIncrement"`
	TheQuestion string          `json:"the_question" gorm:"type:varchar(255)"`
	Profile     string          `json:"profile" gorm:"type:varchar(255)"`
	Answers     json.RawMessage `json:"answers"`
	CreatedAt   time.Time       `json:"created_at"`
	UpdatedAt   time.Time       `json:"updated_at"`
}
