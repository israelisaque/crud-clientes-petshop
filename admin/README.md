##Projeto de um CRUD totalmente em Javascript que simula a API de cadastro de clientes em um petshop. 

###Rodar API:     
```js
cd petshop/admin
npx json-server --watch db.json
```

###Rodar Aplicação:     
```js
cd petshop/
npx browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
```