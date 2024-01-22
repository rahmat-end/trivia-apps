package postgres

import (
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DatabaseInit() {
	var err error
	// dsn := "host=localhost user=postgres password=payno17 dbname=trivia_app port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	dsn := "postgres://gyxkrwqm:4D-uoS9CmnmoATE2GjyvE78GDCr3ef1S@horton.db.elephantsql.com/gyxkrwqm"
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	fmt.Println("Database connected")
}
