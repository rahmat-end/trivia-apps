package handlers

import (
	"net/http"
	"strconv"
	dto "trivia_app/dto/result"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

type handlerQuestion struct {
	QuestionRepository repositories.QuestionRepository
}

func QuestionHandler(questionRepository repositories.QuestionRepository) *handlerQuestion {
	return &handlerQuestion{questionRepository}
}

func (h *handlerQuestion) FindQuestions(c echo.Context) error {
	questions, err := h.QuestionRepository.FindQuestions()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: questions})
}

func (h *handlerQuestion) GetQuestion(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	question, err := h.QuestionRepository.GetQuestion(id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Code: http.StatusOK,
		Data: question})
}
