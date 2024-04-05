# Desenvolvimento Web

## Descrição

Esta atividade tem como propósito o desenvolvimento de habilidades na criação de APIs RESTful, manipulação de dados em um banco de dados NoSQL/SQL e prática com o framework Express. A atividade consiste na definição de uma API para gerenciar informações sobre alimentos em um sistema de estoque. A API deve incluir as seguintes rotas:

A rota base para o projeto é `/api/foods`, com uma página sendo servida em `/`.

- Listar todos os alimentos (GET) -> `/api/foods`
- Buscar um alimento específico (GET) -> `/api/foods/:id`
- Criar um novo alimento (POST) -> `/api/foods`
- Atualizar um alimento existente (PUT) -> `/api/foods/:id`
- Excluir um alimento (DELETE) -> `/api/foods/:id`

## 🚀 Rodar o projeto

Antes de seguir os passos para rodar o projeto, esteja seguro de ter o **_docker_** e o **_git_** em sua máquina.

```bash
git clone https://github.com/marcosChalet/prova-web-foods.git foods
cd foods
docker compose up -d
```

No fim desses passos será possível acessar a página em `http://localhost:3000/`. Além disso, será possível acessar as rotas da descrição.

---

Esse projeto foi desenvolvido usando as seguintes tecnologias:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)&nbsp;
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)&nbsp;
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)&nbsp;
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
