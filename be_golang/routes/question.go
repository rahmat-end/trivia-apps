package routes

import (
	"trivia_app/handlers"
	"trivia_app/pkg/postgres"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

func QuestionRoutes(e *echo.Group) {
	r := repositories.RepositoryQuestion(postgres.DB)
	h := handlers.QuestionHandler(r)

	e.GET("/questions", h.FindQuestions)
	e.GET("/question/:id", h.GetQuestion)
}
