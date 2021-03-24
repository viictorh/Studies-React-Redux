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

2. Ao enviar um método para um "event handler" não se utiliza parentesis, caso contrário, este método sempre será chamado ao executar o método render da classe. Ex:

   `<input onChange={this.nomeDoMetodoSemParentesis}>`

3. O nome de **callback functions** segue a convenção onNomeElementoAcao ou handleNomeElementoAcao. Por exemplo, ao adicionar um evento de clique em um input, o nome desta função callback seria: `onInputClick()` ou `handleInputClick()`
4. Variaveis criadas no states normalmente são iniciadas com valores default. Por exemplo:

```javascript
state = {
  string: "",
  array: [],
  objeto: {},
};
```

Isso evita a necessidade de validar o componente antes o valor antes de utilizar funções pré-definidas, como `array.map`

5. Normalmente só se adiciona uma propriedade ao `state` quando existe a possibilidade dela mudar com o tempo

6. Nunca altere estrutura de dados em um reducers (redux).

Ex:

```javascript
//em vez de
array.push["novoitem"];

//faça uma copia primeiro (novo array) e adicione o novo item
[...array, "novoitem"];
```

7. Ao criar **redux-actions** e **redux-reducers**, normalmente utiliza-se o padrão de pasta _actions_ e _reducers_ apenas com o arquivo index.js dentro. Desta forma, ao importar um dos itens, o webpack automaticamente, quando não utilizado o nome completo na importação, já procura pelo arquivo index.js

Por exemplo, supondo que exista o arquivo _actions/index.js_ podemos realizar a importação de duas maneiras:

```javascript
//primeira forma
import actions from "./actions/index.js";
//segunda forma
import actions from "./actions";
```

8. Não utilizar `<a href=''>` com react-router. Não é a maneira correta de se realizar a navegação com esta biblioteca. Caso seja feito desse jeito, todos os estados que foram carregados serão perdidos e novas requisicoes são feitas ao servidor

### React Lifecycle

![Lifecycle](/doc-images/react-lifecycle.png)

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

### React Hooks System

React Hooks System adiciona a componentes funcionais mais funcionalidades. Permitindo, por exemplo, utilizar uma forma de "state", entre outras ações sem a necessidade de se criar uma classe. Com o hook system, busca-se desenvolver mais código reutilizavel e permitir mais customização a componentes funcionais.

#### useState

Se aproveitando da ideia de "array destructuring", ao utilizar o método **useState** são retornados 2 elementos num array, a variavel que seria controlada no "state" e a função responsável por atualiza-la:

`const [activeIndex, setActiveIndex] = useState(null)`

Ao chamar o método **useState** o valor enviado refere-se ao valor de inicialização.

Ao chamar o método `setActiveIndex` todo o componente será rerenderizado, assim como acontece em uma classe ao usar `setState` que chama a função `render()`, porém, o caso do hooks, o método será inicializado, agora, com o novo valor informado ao chamar o método set, e não mais com o valor utilizado na inicialização.

Abaixo um paralelo entre classes e hooks em um componente funcional
![useState](/doc-images/hooks-usestate.png)

#### useEffect

Permite que componentes funcionais utilizem funções semelhantes aos metodos de ciclo de vida de classe.

Este hook pode ser utilizado para executar uma função nos seguintes casos:

1. Quando um componente é renderizado pela **primeira vez (somente)**
2. Quando o componente é renderizado pela **primeira vez e sempre que é rerenderizado**
3. Quando o componente é renderizado pela **primeira vez _E_ sempre que é renderizado _E_ alguma informação foi atualizada**

O primeiro argumento desta função é a função que será executada de acordo com um dos 3 casos acima que escolhermos. Já o segundo parametro é para decidir qual será o caso:

```javascript
//1) Array vazio.
useEffect(() => {
  console.log("");
}, []);

//2) Sem o segundo parametro
useEffect(() => {
  console.log("");
});

//3) Array com um ou mais elementos
useEffect(() => {
  console.log("");
}, [conteudo]);
```

Dentro da função useEffect é possivel ainda retornar uma função, esta função é chamada de "cleanup function". Com isso, após a primeira execução e o retorno desta função, toda vez antes de executar o useEffect é executada primeiramente esta função. Exemplo:

```javascript
//1) Array vazio.
useEffect(() => {
  console.log("teste 1");

  return () => console.log("cleanup");
}, []);
```

1. execução: teste 1
2. execução: cleanup => teste 1
   ... e assim por diante

#### useRef

Cria uma referencia ao elemento associado. No exemplo abaixo a variavel ref passa a ter uma referencia à div a qual a referencia foi associada

```javascript
const ref = useRef();
<div ref={ref}></div>;
```

#### Custom Hooks

Permite criar funções que facilitam a reutilização de código em outros locais. Desta forma, caso algum outro componente precise utilizar algo simular, basta utilizar esse hook customizado.

- É a melhor forma de se criar código reutilizavel em um projeto react (além de criar componentes)
- É criado extraindo código relacionado entre si em um componente funcional
- Custom Hooks sempre utiliza ao menos 1 hook "primitivo" (useState, useEffect, etc) internamente
- Cada custom hook deve ter apenas uma proposta, ou seja, servir para algo bem definido (validar formularios, realizar requests, etc )
- Por convenção, utiliza-se o nome `useAlgumaCoisa`

**Processo para criar um hook reutilizavel**

1. Identificar cada linha de código relacionada a uma proposta especifica no código
2. Identificar os "inputs" no código. Ou seja, as informações que são enviadas para as funções
3. Identificar o que as funções retornam (outputs) como resposta
4. Extrair todo esse código recebendo os inputs e retornando os outputs

Exemplo de custom hook usado para validação de formulários: https://www.youtube.com/watch?v=KGFG-yQD7Dw

### Redux

#### Redux Cycle

1. Action Creator

É o responsável por iniciar a ação, ou seja, a função responsável por criar ou retornar um objeto javascript (**action**)

2. Action

Ação que será realizada. A inteção do que se está propondo. É o objeto criado pelo **Action Creator**. Ele contem a propriedade type (mudanças que queremos faze - **obrigatório**), e o payload (contexto a respeito do que queremos mudar - **opcional**).

3. dispatch

Local centralizador que dispara a ação para todos os **Reducers**. Será responsável por criar copias da **Action** recebida e enviar para outros locais no sistema para trata-la.

4. Reducers

Departamentos responsável por tratar as ações. Caso a ação não seja relacionada a este departamento, ela é simplesmente ignorada. Sendo assim, é uma função responsável por receber uma ação, processa-la alterando o objeto e retornando-o para que seja controlado em um lugar centralizado.
Todos os reducers são chamados ao iniciar a aplicação informando o valor inicial de `undefined`

**Regras**

- Deve sempre retornar um valor diferente de `undefined`
- Deve retornar o state apenas usando o valor anterior e o action.
- Não deve sair do reducer, por exemplo, chamar uma API, ler um arquivo, acessar o DOM, enfim, fazer ações além de utilizar o **state** e **action** informado para retornar o proximo valor do **state**. Deve-se manter um reducers "puro".
- Não se deve modificar a própria instancia do **state**. Deve-se retornar um novo objeto/valor.
  ![Redux atualizando state](/doc-images/redux-update-state.png)

5. State

Local responsável por "armazenar" os dados de forma centralizada. Onde todos os **Reducers** podem acessar. Após os reducers processarem os dados, todas as informações são centralizadas nesse local.

#### Redux Thunk

Ao utilizar chamadas assincronas com Redux, deve-se utilizar um middleware, pois ActionsCreators devem sempre retornar como resposta um objeto simples, ou seja, um "JSON" com type e payload (opcional).
Quando realizamos uma chamada assincrona, acabamos retornando uma função assincrona como resposta e o reducers não saberá tratar este tipo de retorno, sendo assim, o redux já informa o erro e que devemos utilizar um middleware.

Abaixo um exemplo de como funciona uma chamada a APIs com redux
![Redux api calls](/doc-images/redux-api-calls.png)

Abaixo um fluxo de como o Redux-Thunk trata as funções até que o retorno seja um objeto e seja enviado para o reducers.

![Fluxo Redux thunk](/doc-images/fluxo-redux-thunk.png)

### Projetos

#### JSX

Projeto inicial que mostra como criar uma simples aplicação react

#### Components

Projeto que visa demonstrar como utilizar a componentização no react e como reutiliza-los

#### Seasons

Esta aplicação visa demonstrar como utilizar as classes no react, a propriedade state e suas funções

#### Pics

Aplicação utilizando uma API externa para requisicoes utilizando Axios. Com essa aplicação, utilizamos tambem funções do react e criamos novas, entendendo a utilização do "this" entre outros conceitos

#### Videos

Aplicação para consolidar as informações ja passadas até aqui

#### Videos-Hooks

Aplicação igual a anterior, de videos, mas refatorando utilizando apenas react hooks

#### Widgets

Aplicação utilizando react **hooks**

#### Redux-Songs

Aplicação com uma utilização simples de **Redux**

#### Redux-Async-Blog

Projeto utilizado para continuar a aprendizagem utilizando redux. Agora, utilizando APIs externas e requisições assincronas com axios. Além disso, utiliza-se também a biblioteca redux-thunk como middleware

#### Stream

Projeto que terá como base a ideia da Twitch. Nele será implemetada a ideia de stream de video, login, logout utilizando google, react-router, **CRUD** com redux e redux-form, que é a ideia principal deste projeto

- **client**
  Este projeto é responsável pelo front-end da aplicação
