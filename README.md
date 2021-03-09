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

#### Widgets

Aplicação utilizando react **hooks**
