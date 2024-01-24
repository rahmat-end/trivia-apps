package utils

type UsersResponseT struct {
	Code int32  `json:"code"`
	Data []User `json:"data"`
}

type UserResponseT struct {
	Code int32 `json:"code"`
	Data User  `json:"data"`
}

type User struct {
	UserId          int32  `json:"id" form:"user_id"`
	Name            string `json:"name" form:"name"`
	Email           string `json:"email" form:"email"`
	EmailVerifiedAt string `json:"email_verified_at" form:"email_verified_at"`
	Password        string `json:"password" form:"password"`
	Profile         string `json:"profile" form:"profile"`
	Username        string `json:"username" form:"username"`
	Role            string `json:"role" form:"role"`
	Diamond         int32  `json:"diamond" form:"diamond"`
	Throphy         int32  `json:"throphy" form:"throphy"`
	Avatar          string `json:"avatar" form:"avatar"`
	RememeberToken  string `json:"remember_token" form:"remember_token"`
	CreatedAt       string `json:"created_at" form:"created_at"`
	UpdatedAt       string `json:"updated_at" form:"updated_at"`
}
