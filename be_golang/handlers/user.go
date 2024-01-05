package handlers

import (
	"net/http"
	"strconv"
	dto "trivia_app/dto/result"
	usersdto "trivia_app/dto/user"
	"trivia_app/models"
	"trivia_app/repository"

	"github.com/labstack/echo/v4"
)

type handlerUser struct {
	UserRepository repository.UserRepository
}

func UserHandler(userRepository repository.UserRepository) *handlerUser {
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
	id, _ := strconv.Atoi(c.Param("id"))
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
		Id:   u.Id,
		Name: u.Name,
		// Email:    u.Email,
		// Password: u.Password,
	}
}
