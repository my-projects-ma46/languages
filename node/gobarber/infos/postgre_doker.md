
Iniciar instância postgre
~~~
sudo docker run --name nomebase -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres
~~~
docker run: criar container a partir de uma imagem <br>
-p: redirecionamento de porta xxxx:yyyy <br>
xxxx porta no meu pc, yyyy porta do container 

