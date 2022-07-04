serve-dev: clean-project start-project run-dev

clean-project:
	docker-compose down -v
	sleep 2s

start-project:
	docker-compose up -d

migrate:
	npm run migrate

run-dev:
	npm run 'start:dev'
