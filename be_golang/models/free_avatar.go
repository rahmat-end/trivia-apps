package models

import "time"

type FreeAvatar struct {
	IdFreeavatar    int       `json:"idFreeavatar" gorm:"primaryKey:autoIncrement"`
	PhotoFreeavatar string    `json:"photoFreeavatar" gorm:"type:varchar(255)"`
	CreatedAt       time.Time `json:"createdAt"`
	UpdatedAt       time.Time `json:"updatedAt"`
}
