
# Partir de uma imagem existente
FROM node:10

# Definir pasta e copiar arquivo
WORKDIR /usr/app
COPY . ./

# Instalar dependências
RUN yarn

# Qual porta expor
EXPOSE 3333

# Executar aplicação
CMD yarn start

