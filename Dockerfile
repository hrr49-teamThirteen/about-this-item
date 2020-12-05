# getting base image cassandra
FROM cassandra:latest

MAINTAINER david kim <davidhk21@gmail.com>

# copy over csv files
COPY databases/csv/products.csv /
COPY databases/csv/highlights.csv /
COPY databases/csv/specifications.csv /
COPY databases/csv/questions.csv /
COPY databases/csv/answers.csv /

# cassandra port
EXPOSE 9042