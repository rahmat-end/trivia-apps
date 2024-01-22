package routes

import "github.com/labstack/echo/v4"

func RouteInit(e *echo.Group) {
	AuthRoutes(e)
	UserRoutes(e)
	TransactionRoutes(e)
	LaravelRoutes(e)
	DiamondRoutes(e)
	BuyAvatarRoutes(e)
	FreeAvatarRoutes(e)
	QuestionRoutes(e)
}
