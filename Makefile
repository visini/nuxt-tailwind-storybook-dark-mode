# https://www.thapaliya.com/en/writings/well-documented-makefiles/

.DEFAULT_GOAL:=help
SHELL:=/bin/bash

##@ Development

dev:  ## Run nuxt in dev mode
	yarn dev

storybook:  ## Run nuxt storybook
	yarn nuxt storybook

##@ Helpers

.PHONY: help

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
