package main

import (
	"context"
	"io"
	"net/http"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/labstack/echo/v4"
)

func main() {
	// AWSの設定を読み込む
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		panic("unable to load SDK config, " + err.Error())
	}

	// S3クライアントを作成
	s3Client := s3.NewFromConfig(cfg)

	// Echoインスタンスを作成
	e := echo.New()

	// ルーティング設定
	e.GET("/articles/:id", func(c echo.Context) error {
		id := c.Param("id")
		filename := id + ".json" // パラメータからファイル名を生成
		return getArticleFromS3(c, s3Client, "kohta-blog-articles", filename)
	})

	// サーバーを起動
	e.Logger.Fatal(e.Start(":1323"))
}

// S3から記事を取得する関数
func getArticleFromS3(c echo.Context, client *s3.Client, bucket, filename string) error {
	output, err := client.GetObject(context.TODO(), &s3.GetObjectInput{
		Bucket: aws.String(bucket),
		Key:    aws.String("articles/" + filename),
	})
	if err != nil {
		return err // エラーをそのまま返す
	}
	defer output.Body.Close()

	data, err := io.ReadAll(output.Body)
	if err != nil {
		return err // エラーをそのまま返す
	}

	return c.String(http.StatusOK, string(data))
}
