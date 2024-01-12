package handlers

import (
	"net/http"
	"strconv"
	dto "trivia_app/dto/result"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

type handlerUserBuyAvatar struct {
	UserBuyAvatarRepository repositories.UserBuyAvatarRepository
}

func UserBuyAvatarHandler(userBuyAvatarRepository repositories.UserBuyAvatarRepository) *handlerUserBuyAvatar {
	return &handlerUserBuyAvatar{userBuyAvatarRepository}
}

func (h *handlerUserBuyAvatar) FindUserBuyAvatars(c echo.Context) error {
	userBuyAvatars, err := h.UserBuyAvatarRepository.FindUserBuyAvatars()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: userBuyAvatars})
}

func (h *handlerUserBuyAvatar) GetUserBuyAvatar(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	userBuyAvatar, err := h.UserBuyAvatarRepository.GetUserBuyAvatar(id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: userBuyAvatar})
}
