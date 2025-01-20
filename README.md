# projeto_nodejs_kafka

Passo a passo para rodar o projeto

1. Ir até a pasta do projeto e rodar no terminal:
````
docker-compose up
`````

este comando irá subir um container no docker com as imagens necessárias para rodar o kafka e o projeto.
- zookeper
- kafka
- kafka-ui (porta 8080)
- nodejs-app


2. Acompanhar via kafka-ui as mensagens sendo enviadas e reebidas no tópico: test-topic
http://localhost:8080/ui/clusters/local/all-topics/test-topic/messages?keySerde=String&valueSerde=String&limit=100

