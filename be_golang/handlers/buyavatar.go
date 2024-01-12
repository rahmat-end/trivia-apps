package handlers

import (
	"net/http"
	"strconv"
	dto "trivia_app/dto/result"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

type handlerBuyAvatar struct {
	BuyAvatarRepository repositories.BuyAvatarRepository
}

func BuyAvatarHandler(buyAvatarRepository repositories.BuyAvatarRepository) *handlerBuyAvatar {
	return &handlerBuyAvatar{buyAvatarRepository}
}

func (h *handlerBuyAvatar) FindBuyAvatars(c echo.Context) error {
	buyAvatars, err := h.BuyAvatarRepository.FindBuyAvatars()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: buyAvatars})
}

func (h *handlerBuyAvatar) GetBuyAvatar(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	buyAvatar, err := h.BuyAvatarRepository.GetBuyAvatar(id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: buyAvatar})
}
