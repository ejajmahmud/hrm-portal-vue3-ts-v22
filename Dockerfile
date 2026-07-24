# Production Container Definition for hrm-portal-vue3-ts-v22
FROM alpine:3.19
RUN apk add --no-cache bash curl
WORKDIR /app
COPY . /app
CMD ["echo", "hrm-portal-vue3-ts-v22 container active"]
