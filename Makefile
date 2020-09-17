.PHONY: deploy-prod
deploy-prod: ## Push build on GCP storage
	gsutil -m rsync ./ gs://blog.hectiq.ai
	gsutil -m rsync -r assets/ gs://blog.hectiq.ai/assets
	gsutil -m rsync -r static gs://blog.hectiq.ai/static


.PHONY: help
help:
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {\
	printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
	}' $(MAKEFILE_LIST)