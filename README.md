# Really Simple Url Shortener!

Hmm... Okey, é só apenas mais um url shortener, não há segredos...

Uh? Você quer rodar isso? Ok... se lembre de ter um docker, ou simplesmente tenha um mongodb.

1. Faça um fork ou simplesmente baixe o projeto na máquina, você decide.
2. Entre no projeto e abra o terminal
3. Rode o seguinte comando:
```sh
pnpm install
```
4. Inicie o docker e suba o container do projeto, que contém as configurações para subir um mongodb.
```sh
docker-compose up -d
```
5. Ok, você já pode rodar o projeto localmente... ah, não, coloque as variáveis de ambiente... aqui vai um exemplo:
```env
.env

PORT=6333
NODE_ENV=development
MONGO_URI=mongodb://admin:admin@127.0.0.1:27017
MONGO_DB_NAME=rsus_app
BASE_URL=http://localhost:6333
```
6. Ok, agora sim você pode rodar seu projeto localmente... Se divirta! (talvez).