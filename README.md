[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[REACT__BADGE]: https://img.shields.io/badge/React-005CFE?style=for-the-badge&logo=react
[CSS_BADGE]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[SASS_BADGE]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[HTML_BADGE]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[VERCEL_BADGE]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[FIGMA_BADGE]: https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white
[PROJECT__BADGE]: https://img.shields.io/badge/📱Visit_this_project-000?style=for-the-badge&logo=project
[PROJECT__URL]: https://literium.vercel.app/
[PROJECT_FIGMA_URL]: https://www.figma.com/file/WVoaeLKRBEmjYSuxsPTXqD/Wireframes-Literium?type=design&node-id=2022%3A472&mode=design&t=m1DfE6NLLm82WCzq-1

<h1 align="center" style="font-weight: bold;">Literium 💻</h1>

![react][REACT__BADGE]
![javascript][JAVASCRIPT__BADGE]
![sass][SASS_BADGE]
![html][HTML_BADGE]
![css][CSS_BADGE]
![figma][FIGMA_BADGE]
![vercel][VERCEL_BADGE]

<p align="center">
 <a href="#about">Sobre</a> •
 <a href="#started">Começando</a> •
  <a href="#routes">Rotas</a> •
  <a href="#api">Literium API</a>
</p>


<p align="center">
    <img src="https://raw.githubusercontent.com/KauanHerbst/React-Literium-Project/main/src/images/LogoLiteirum.png" alt="Logo Literium" width="230px">
</p>

<h2 id="started">📌 Sobre</h2>

O Literium é um e-commerce voltado para a venda de livros online. Inicialmente, foi prototipado no Figma e, posteriormente, desenvolvido empregando diversas tecnologias modernas, tais como React, Javascript e Sass. Com o intuito de proporcionar uma experiência de usuário fluida, o Literium foi concebido como uma SPA (Single Page Application). O gerenciamento da navegação na aplicação é realizado por meio do React Router Dom 6, enquanto a Context API é empregada para o gerenciamento fundamental da sessão do usuário. Adicionalmente, um Web Service API foi desenvolvido especificamente para o projeto, utilizando a tecnologia Spring Boot em Java. Esta abordagem confere ao Literium a capacidade de interagir de maneira eficaz com o backend, ampliando suas funcionalidades e otimizando a comunicação entre o front-end e o servidor.

[![project][PROJECT__BADGE]][PROJECT__URL] [![projeto_in_figma][FIGMA_BADGE]][PROJECT_FIGMA_URL]

<h2 id="started">🚀 Começando</h2>

Como rodar o projeto localmente

<h3>Pré-requisitos</h3>

Requisitos para rodar o projeto localmente

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/)
- [Literium API](https://github.com/KauanHerbst/SpringBoot-Literium-Project)

<h3>Clonando</h3>

Para clonar o projeto localmente

```bash
git clone https://github.com/KauanHerbst/React-Literium-Project.git
```

<h3>Variáveis de ambiente</h3>

Criar um `.env` para as variáveis de ambiente e adicionar em `REACT_APP_API_URL` a url da Literium API

```
REACT_APP_API_URL={URL_API}
```

<h3>Iniciando</h3>

Para iniciar o projeto localmente

```bash
cd React-Literium-Project
npm install
npm start
```

<h2 id="routes">📍 Rotas da aplicação</h2>

Todas as rotas acessíveis da aplicação
​
| Rota               | Descrição
|----------------------|-----------------------------------------------------
| <kbd>/</kbd>     | Landing Page
| <kbd>/home</kbd>     | Página principal
| <kbd>/login</kbd>     | Página de Login
| <kbd>/account</kbd>     | Página para criar conta
| <kbd>/categories/{id}</kbd>     | Página para cada categoria de livro
| <kbd>/search/{text}</kbd>     | Página resultado de pesquisa de livro por nome
| <kbd>/favorites</kbd>     | Página de favoritos (Necessita de Login)
| <kbd>/cart</kbd>     | Página do carrinho (Necessita de Login)
| <kbd>/profile</kbd>     | Página perfil de usuário (Necessita de Login)
| <kbd>/management</kbd>     | Página gerenciamento de todos os livros (Necessita de Login e permissão de Admin)
| <kbd>/editbook/{id}</kbd>     | Página para editar livro (Necessita de Login e permissão de Admin)
| <kbd>/createbook/{id}</kbd>     | Página para cadastrar livro (Necessita de Login e permissão de Admin)



<h2 id="api">🌐 Literium API </h2>

A Literium API foi criada empregando o Spring Boot e Java, fazendo uso do Spring Security e JWT (JSON Web Token).


 Link para o Projeto ➡️ [Literium API](https://github.com/KauanHerbst/SpringBoot-Literium-Project)
