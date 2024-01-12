package handlers

import (
	"net/http"
	"strconv"

	// "strconv"
	dto "trivia_app/dto/result"
	usersdto "trivia_app/dto/user"
	"trivia_app/models"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

type handlerUser struct {
	UserRepository repositories.UserRepository
}

func UserHandler(userRepository repositories.UserRepository) *handlerUser {
	return &handlerUser{userRepository}
}

func (h *handlerUser) FindUsers(c echo.Context) error {
	users, err := h.UserRepository.FindUsers()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: users})
}

func (h *handlerUser) GetUser(c echo.Context) error {
	id := c.Param("id")
	user, err := h.UserRepository.GetUser(id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: user})
}

func convertResponse(u models.User) usersdto.UserResponse {
	return usersdto.UserResponse{
		IdUser: strconv.Itoa(u.UserId),
		Name:   u.Name,
	}
}
