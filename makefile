# Makefile

.PHONY: install start build deploy

install:
	npm install

start:
	npm start

build:
	npm run build
deploy:
	npm run deploy