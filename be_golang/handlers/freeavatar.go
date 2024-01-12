package handlers

import (
	"net/http"
	"strconv"
	dto "trivia_app/dto/result"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

type handlerFreeAvatar struct {
	FreeAvatarRepository repositories.FreeAvatarRepository
}

func FreeAvatarHandler(freeAvatarRepository repositories.FreeAvatarRepository) *handlerFreeAvatar {
	return &handlerFreeAvatar{freeAvatarRepository}
}

func (h *handlerFreeAvatar) FindFreeAvatars(c echo.Context) error {
	freeAvatars, err := h.FreeAvatarRepository.FindFreeAvatars()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: freeAvatars})
}

func (h *handlerFreeAvatar) GetFreeAvatar(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	freeAvatar, err := h.FreeAvatarRepository.GetFreeAvatar(id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: freeAvatar})
}
