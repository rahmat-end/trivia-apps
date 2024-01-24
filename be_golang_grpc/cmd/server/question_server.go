package server

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	questionPb "trivia_app_grpc/pb"
	"trivia_app_grpc/utils"
	type_utils "trivia_app_grpc/utils/type"
)

type QuestionServer struct {
	questionPb.UnimplementedQuestionsGrpcServer
}

func (qs *QuestionServer) GetQuestions(ctx context.Context, in *questionPb.Empty) (*questionPb.Response, error) {
	questionapi := utils.UrlApiValue("API_URL", "/questions")
	res, err := http.Get(questionapi)

	if err != nil {
		log.Fatal("api question error", err.Error())
		os.Exit(1)
	}

	resData, err := ioutil.ReadAll(res.Body)

	if err != nil {
		log.Fatal("Error :", err.Error())
		os.Exit(1)
	}

	var data type_utils.QuestionType

	if err := json.Unmarshal(resData, &data); err != nil {
		log.Fatal(err)
	}

	var dataQuestion []*questionPb.Request

	for _, r := range data.Data {
		dataQuestion = append(dataQuestion, &questionPb.Request{
			Id:          int32(r.Id),
			TheQuestion: r.TheQuestion,
			Profile:     r.Profile,
			Answers:     r.Answers,
			UpdatedAt:   r.UpdatedAt,
			CreatedAt:   r.CreatedAt,
		})
	}

	result := questionPb.Response{
		Code: data.Code,
		Data: dataQuestion,
	}

	return &result, nil

}

func (qs *QuestionServer) GetQuestion(ctx context.Context, in *questionPb.Id) (*questionPb.ResponseOne, error) {
	questionId := in.Id

	questionEndpoint := fmt.Sprintf("/question/%d", questionId)

	url := utils.UrlApiValue("API_URL", questionEndpoint)

	res, err := http.Get(url)
	if err != nil {
		log.Fatalf("Cannot Get Api Questoin id %v", err.Error())
		os.Exit(1)
	}

	resData, err := ioutil.ReadAll(res.Body)

	if err != nil {
		log.Fatal("Error :", err.Error())
		os.Exit(1)
	}
	var requestQuestionId type_utils.GetOneQuestionT

	if err := json.Unmarshal(resData, &requestQuestionId); err != nil {
		log.Fatalf("Cannot unmarshal data %v", err.Error())
	}

	result := questionPb.ResponseOne{
		Code: requestQuestionId.Code,
		Data: &questionPb.Request{
			Id:          requestQuestionId.Data.Id,
			TheQuestion: requestQuestionId.Data.TheQuestion,
			Profile:     requestQuestionId.Data.Profile,
			Answers:     requestQuestionId.Data.Answers,
			UpdatedAt:   requestQuestionId.Data.UpdatedAt,
			CreatedAt:   requestQuestionId.Data.CreatedAt,
		},
	}

	return &result, nil

}
