# RestAPI


API baseada na API Space Flight News. 



## Limguagens/framework/tecnologias

- <img  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-shadow-tal-revivo.png" style=width:15px; /> NodeJS
- <img src="https://img.icons8.com/color/48/000000/mongodb.png" style=width:15px;/> MongoDB
- Axios
- Express
- Mongoose
- Nodemon
- Dotenv


## Instruções

### Instalação
- Baixe o arquivo deste repositorio do github;
- Instale o Node caso n o tenha instalado em sua maquina;


- Abra o terminal na pasta da API e digite o segunte código :

```        
  NPM i
```

<hr />

### Configuração banco de dados


- Para configurar o bando de dados crie um arquivo na pasta font da API
- E crie uma variavel de ambiente com o nome de DATABASE_URL e na frente o link para o seu banco de dados :
```        
  DATABASE_URL = Link para o bando de dados MongoDB
```
<hr />


### Modo funcional da API

- Para utilizar a API 
- Inicie a API digitando o seguinte codigo no terminal :

```        
  NPM start
```

- As instruções com o método GET podem ser utilizadas, tanto no google quanto no postman;
- Ja as instruçoes com o método POST, PUT ou DELETE so podem ser utilizadas no postman;


<hr />

- Para listar todos os artigos use a URL :
- Método: GET
```        
  http://localhost:3001/articles
```
- Para encontrar apenas um artigo em especifico informe o id na URL :
- Método: GET
```        
  http://localhost:3001/articles/62017bceadd06587b1707db4
```

<hr />

- Para adicionar um artigo utilize a URL :
- Método: POST
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
- Para editar um artigo utilize a mesma URL adicioando o id que deseja alterar:
- Método: PUT

```        
  http://localhost:3001/articles/62017bceadd06587b1707db4
```

- E no body vc deve enviar todas as informaçoes novamnete:

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

- Para deletar um artigo utilize a mesma URL adicioando o id que deseja deletar:
- Método: DELETE
```        
  http://localhost:3001/articles/62017bceadd06587b1707db4
```

<hr />


This is a challenge by <a href="https://coodesh.com/" target="_blank" >Coodesh.</a>
