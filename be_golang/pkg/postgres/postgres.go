package postgres

import (
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DatabaseInit() {
	var err error
	// dsn := "host=localhost user=postgres password=arre007A dbname=triviagame port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	// dsn := "postgres://gyxkrwqm:4D-uoS9CmnmoATE2GjyvE78GDCr3ef1S@horton.db.elephantsql.com/gyxkrwqm"
	dsn := "postgresql://postgres:EAE2g6cEFefE*gca2D2-D*C625A1gB5C@monorail.proxy.rlwy.net:23148/railway"
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	fmt.Println("Database connected")
}
