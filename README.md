## Studies-React-Redux

Estudo sobre programaçao utilizando react e redux baseado no curso https://www.udemy.com/course/react-redux/

## Anotações gerais

### Criando aplicação com **create-react-app**

`npx create-react-app my-app`

Outra maneira mais antiga de se criar um react-app, é adicionar o modulo create-react-app para executar posteriormente utilizando os seguintes passos:

- npm install -g create-react-app
- create-react-app my-app

Ambas as formas são equivalentes, porém a primeira foi disponibilizada apenas em versões mais recentes do node.

### Babel

Babel é uma ferramenta responsável por compatibilizar códigos em novas versões javascript para versões mais antigas.
Muitos browsers não acompanham a evolução da linguagem e o código desenvolvido pode acabar gerando erros em produção, ou seja, um codigo escrito em ES6 ou ES2020, pode acabar não sendo compativel com uma versão de browser, pois ele ainda está dando suporte apenas ao ES5.

Com o Babel, podemos escrever código javascript utilizando todo o poder da lingaugem e, ao "compilar" esse código é convertido para a versão ES5, podendo rodar em qualquer browser com total compatibilidade.

### Comandos

`npm install --save <lib>` instala a biblioteca informada no projeto, alterando o package.json e adicionando tal dependencia

### Convenções / Boas práticas

1. Criação de componentes
   Utiliza-se nomes iniciando com letra maiuscula. Ex: CommentDetail.jsx

### Class Components

**Beneficios**

1. Mais facil de organizar
2. Pode utilizar "state"
3. Utiliza eventos do ciclo de vida do react
4. Mais facil de tratar inputs do usuario
5. Mais facil de realizar ações ao iniciar aplicação para o usuário

### Projetos

#### JSX

Projeto inicial que mostra como criar uma simples aplicação react

#### Components

Projeto que visa demonstrar como utilizar a componentização no react e como reutiliza-los

#### Seasons
