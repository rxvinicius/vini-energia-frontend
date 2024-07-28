# Clarke Energia Frontend

Repositório do Frontend do desafio técnico da Clarke Energia.

👉 <a href='https://clarke-energia-frontend.vercel.app'>Demo</a>

### Principais Tecnologias

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Ferramenta de construção de frontend rápida.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos.
- **Apollo Client**: Cliente GraphQL para gerenciar dados com GraphQL.

### Dependências

- **dotenv**: Carregar variáveis de ambiente a partir de um arquivo `.env`.
- **graphql**: Biblioteca para construir esquemas GraphQL e executar consultas.

### Desenvolvimento

- **@babel/core**: Núcleo do Babel, um transpiler JavaScript.
- **@babel/preset-env**: Preset Babel para compilar o JavaScript moderno.
- **@babel/preset-react**: Preset Babel para compilar JSX e outras sintaxes do React.
- **@testing-library/jest-dom**: Conjunto de utilitários para testes do DOM com Jest.
- **@testing-library/react**: Utilitários para testar componentes React.
- **@testing-library/user-event**: Utilitários para simular eventos de usuário.
- **@types/react**: Tipos TypeScript para React.
- **@types/react-dom**: Tipos TypeScript para ReactDOM.
- **@vitejs/plugin-react**: Plugin Vite para suportar React.
- **babel-jest**: Transpilador Babel para Jest.
- **eslint**: Ferramenta de linting para JavaScript/TypeScript.
- **eslint-plugin-react**: Linting específico para React.
- **eslint-plugin-react-hooks**: Regras de linting para hooks do React.
- **eslint-plugin-react-refresh**: Regras de linting para React Refresh.
- **identity-obj-proxy**: Mock para objetos CSS Modules.
- **jest**: Framework de testes para JavaScript.
- **jest-environment-jsdom**: Ambiente de teste JSDOM para Jest.

## Instalação

### Rodar localmente
- Clone esse repositório
- Acesse a raiz do repositório
- `npm install` para instalar dependências
- `npm run dev` para iniciar um servidor de desenvolvimento a partir do terminal
- Siga o passo a passo para iniciar o backend
- Renomeie o arquivo  `.env.example` para `.env` e altere o número da porta conforme a informada no backend

### Rodar com docker
- `docker build -t clarke-energia-frontend .`
- `docker run -p 4000:80 clarke-energia-frontend`

## Testes
- `npm test` para rodar os testes

