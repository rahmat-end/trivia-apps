package handlers

import (
	"encoding/json"
	"net/http"
	"os"
	freeavatardto "trivia_app/dto/avatar"
	dto "trivia_app/dto/result"

	userslaraveldto "trivia_app/dto/user_laravel"

	"github.com/labstack/echo/v4"
)

func GetFreeAvatar(c echo.Context) error {
	microserviceURL, err := http.Get(os.Getenv("LARAVEL_URL") + "/api/freeavatar")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	var data []freeavatardto.FreeAvatar
	err = json.NewDecoder(microserviceURL.Body).Decode(&data)

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: data})
}

func GetUsers(c echo.Context) error {
	microserviceURL, err := http.Get(os.Getenv("LARAVEL_URL") + "/api/user")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	var data []userslaraveldto.UsersLaravel
	err = json.NewDecoder(microserviceURL.Body).Decode(&data)

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: data})
}

func GetUser(c echo.Context) error {
	microserviceURL, err := http.Get(os.Getenv("LARAVEL_URL") + "/api/user/:id")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	var data []userslaraveldto.UsersLaravel
	err = json.NewDecoder(microserviceURL.Body).Decode(&data)

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: data})
}
