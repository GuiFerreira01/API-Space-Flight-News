# RestAPI


API baseada na API Space Flight News.

Possibilita listar os artigos, adicionar novos artigos, editar os artigos ja existentes, pesquisar por um artigo em específico e deletar um artigo.



## Linguagens/Framework/Tecnologias

- <img  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-shadow-tal-revivo.png" style=width:15px; /> NodeJS
- <img src="https://img.icons8.com/color/48/000000/mongodb.png" style=width:15px;/> MongoDB
- Mongoose
- Axios
- Express
- Nodemon
- Dotenv


## Instruções

### Instalação
- Baixe o arquivo deste repositório do github;
- Instale o NodeJS caso não o tenha instalado em sua maquina;


- Abra o terminal na pasta da API e digite o seguinte código :

```        
  NPM i
```

<hr />

### Configuração banco de dados


- Para configurar o bando de dados crie um arquivo na pasta font da API com o nome de `.env`;
- E crie uma variavel de ambiente com o nome de `DATABASE_URL` e na frente o link para o seu banco de dados :
```        
  DATABASE_URL = Link para o bando de dados MongoDB;
```
<hr />


### Modo funcional da API

- Para utilizar a API 
- Inicie a API digitando o seguinte codigo no terminal :

```        
  NPM start
```

- As instruções com o método GET podem ser utilizadas, tanto no google quanto no Postman ou Insomnia;
- Ja as instruçoes com o método POST, PUT ou DELETE so podem ser utilizadas no postman ou Insomnia;


<hr />

- Para listar todos os artigos use a URL do exemplo e adicione o parâmetro `page` para escolher a pagina que deseja visualizar;
- `Método: GET`
```        
  http://localhost:3001/articles?page=1
```
- Para encontrar apenas um artigo em específico informe o id na URL :
- `Método: GET`
```        
  http://localhost:3001/articles/62017bceadd06587b1707db4
```

<hr />

- Para adicionar um artigo utilize a URL :

-  `Método: POST`
```        
  http://localhost:3001/articles
```
- E no body vc deve enviar as seguintes informações :
```        
        "title": Sting,
        "url": Sting,
        "imageUrl": Sting,
        "newsSite": Sting,
        "summary": Sting,
        "publishedAt": Sting,
        "updatedAT": Sting,
        "featured": Boolean,
        "launchers": [
            {
                "provider": Sting
            }
        ],
        "events": [
            {
                "provider": Sting
            }
        ]
```
<hr />

-  Para editar um artigo utilize a mesma URL adicioando o id que deseja alterar:
-  `Método: PUT`

```        
  http://localhost:3001/articles/62017bceadd06587b1707db4
```

- E no body vc deve enviar todas as informações novamente:

```        
        "title": Sting,
        "url": Sting,
        "imageUrl": Sting,
        "newsSite": Sting,
        "summary": Sting,
        "publishedAt": Sting,
        "updatedAT": Sting,
        "featured": Boolean,
        "launchers": [
            {
                "provider": Sting
            }
        ],
        "events": [
            {
                "provider": Sting
            }
        ]
```
<hr />

- Para deletar um artigo utilize a mesma URL adicionando o id do artigo que deseja deletar:
- `Método: DELETE`
```        
  http://localhost:3001/articles/62017bceadd06587b1707db4
```

<hr />


This is a challenge by <a href="https://coodesh.com/" target="_blank" >Coodesh.</a>


<hr />
