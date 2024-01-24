package utils

type QuestionType struct {
	Code int32             `json:"code"`
	Data []QuestionRequest `json:"data"`
}

type QuestionRequest struct {
	Id          int32  `json:"id"`
	TheQuestion string `json:"the_question"`
	Profile     string `json:"profile"`
	Answers     string `json:"answers"`
	CreatedAt   string `json:"created_at"`
	UpdatedAt   string `json:"updated_at"`
}

type GetOneQuestionT struct {
	Code int32           `json:"code"`
	Data QuestionRequest `json:"data"`
}
