export SHELL:=/bin/bash
export SHELLOPTS:=$(if $(SHELLOPTS),$(SHELLOPTS):)pipefail:errexit

.ONESHELL:
.PHONY: dev

dev:
	trap 'docker stop test-db' EXIT
	docker run -d --rm --name test-db -p 5436:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=test -v ${PWD}/postgres-data:/var/lib/postgresql/data postgres:15.1-alpine
	npm run dev -- --open