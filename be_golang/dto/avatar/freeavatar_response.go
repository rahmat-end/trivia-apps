package freeavatardto

import "time"

type FreeAvatar struct {
	IdFreeAvatar    int       `json:"id_freeavatar"`
	PhotoFreeAvatar string    `json:"photo_freeavatar"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
}

type FreeAvatarResponse struct {
	Data []FreeAvatar `json:"data"`
}
