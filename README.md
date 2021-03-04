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

### React Lifecycle

![Lifecycle](/doc-images/arquitetura_do_projeto.pdf.png)

1. constructor
   Método não obrigatório em uma classe react. Caso seja criado, deve existir a chamada ao método super. É o primeiro método a ser chamado a ser criada uma classe
   . Este é um bom local para colocar código que executará apenas uma vez ao iniciar, mas evite carregar dados neste método
2. render
   Método chamado apos o construtor e ao existir qualquer atualização no `state`.
   . Evite fazer qualquer outra coisa além de retornar um código "jsx"
3. componenetDidMount
   Após o carregamento do componente e apresentado ao usuário, este método é chamado.
   . Lugar ideal para carregar dados, seja de uma API externa, etc... Pode-se utilizar o construtor para isso, porém o ideal é que esse tipo de carregamento seja centralizado neste método, facilitará uma padronização utilizado pela comunidade.
4. componentDidUpdate
   Método chamado sempre que houve alteração no estado _logo após a chamada do método render_
   . Ótimo lugar também para carregamento de dados quando o state ou props são modificados
5. componentWillUnmount
   Método chamado ao finalizar a utilização do componente e parar de mostra-lo na tela.
   . Lugar ideal para limpar qualquer recurso que seja necessário, por exemplo um clearInterval, ou qualquer outro recurso que seja necessário indicar o fim de sua utilização

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
