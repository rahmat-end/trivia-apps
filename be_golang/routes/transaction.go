package routes

import (
	"trivia_app/handlers"
	// "trivia_app/pkg/middleware"
	"trivia_app/pkg/postgres"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	transactionRepository := repositories.RepositoryTransaction(postgres.DB)
	rd := repositories.RepositoryDiamond(postgres.DB)
	h := handlers.HandlerTransaction(transactionRepository, rd)

	// e.GET("/transactions", middleware.Auth(h.FindTransactions))
	e.GET("/transactions", h.FindTransactions)
	// e.POST("/transaction", middleware.Auth(h.CreateTransaction))
	e.POST("/transaction/:id", h.CreateTransaction)
	// e.POST("/notification", h.Notification)
}
