# Clarke Energia Frontend

Repositório do Frontend do desafio técnico da Clarke Energia.

👉 <a href='https://clarke-energia-frontend.vercel.app'>Demo</a>

### Principais Tecnologias

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Ferramenta de construção de frontend rápida.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos.
- **Apollo Client**: Cliente GraphQL para gerenciar dados com GraphQL.

## Instalação

### Rodar localmente

- Clone esse repositório
- Acesse a raiz do repositório
- `npm install` para instalar dependências
- `npm run dev` para iniciar um servidor de desenvolvimento a partir do terminal
- Clone o [backend](https://github.com/rxvinicius/clarke-energia-backend) e siga as instruções do repositório
- Renomeie o arquivo `.env.example` para `.env`

### Rodar com docker

- `docker build -t clarke-energia-frontend .`
- `docker run -p 4000:80 clarke-energia-frontend`

## Testes

- `npm test` para rodar os testes
