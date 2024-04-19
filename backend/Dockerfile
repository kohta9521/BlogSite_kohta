FROM golang:1.19.3-alpine

# ROOTフォルダ及びWORKDIR設定
ENV ROOT=/go/src/app
RUN mkdir ${ROOT}
WORKDIR ${ROOT}

# パッケージの更新とビルドツールパッケージのインストール
RUN apk update && apk add git alpine-sdk

# 環境変数設定
ENV CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64
# port設定
EXPOSE 8080
# コンテナ起動時にgoを起動
CMD ["go", "run", "main.go"]