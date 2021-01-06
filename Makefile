.PHONY: local
deploy-local: ## Locally host the app
	yarn start

.PHONY: build
build: ## Create build
	yarn build

.PHONY: deploy-prod
deploy-prod: ## Push build on GCP storage
	gsutil -m rsync -r build gs://blog.hectiq.ai