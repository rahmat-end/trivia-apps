package models

import "time"

type FreeAvatar struct {
	IdFreeavatar    int       `json:"id_freeavatar" gorm:"primaryKey:autoIncrement"`
	PhotoFreeavatar string    `json:"photo_freeavatar" gorm:"type:varchar(255)"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
}
