package handlers

import (
	"net/http"
	"strconv"
	dto "trivia_app/dto/result"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

type handlerDiamond struct {
	DiamondRepository repositories.DiamondRepository
}

func DiamondHandler(diamondRepository repositories.DiamondRepository) *handlerDiamond {
	return &handlerDiamond{diamondRepository}
}

func (h *handlerDiamond) FindDiamonds(c echo.Context) error {
	diamonds, err := h.DiamondRepository.FindDiamonds()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: diamonds})
}

func (h *handlerDiamond) GetDiamond(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	diamond, err := h.DiamondRepository.GetDiamond(id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: diamond})
}
