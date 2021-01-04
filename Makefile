.PHONY: local
deploy-local: ## Locally host the app
	yarn start

.PHONY: build
deploy-prod: ## Create build
	yarn build

.PHONY: help
help:
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {\
	printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
	}' $(MAKEFILE_LIST)