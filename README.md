# Vini Energia Frontend

Projeto desenvolvido para o desafio técnico de um processo seletivo que participei.

👉 <a href='https://vini-energia-frontend.vercel.app'>Demo</a>

### Principais Tecnologias

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Ferramenta de construção de frontend rápida.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos.
- **Apollo Client**: Cliente GraphQL para gerenciar dados com GraphQL.
- **TailwindCSS**: Framework de CSS utilitário para estilização rápida e responsiva.
- **Jest**: Framework de testes em JavaScript.
- **Testing Library**: Conjunto de utilitários para testar componentes React.

## Instalação

### Rodar localmente

- Clone esse repositório
- Acesse a raiz do repositório
- `npm install` para instalar dependências
- `npm run dev` para iniciar um servidor de desenvolvimento a partir do terminal
- Clone o [backend](https://github.com/rxvinicius/vini-energia-backend) e siga as instruções do repositório
- Renomeie o arquivo `.env.example` para `.env`

### Rodar com docker

- `docker build -t vini-energia-front .`
- `docker run -p 4000:8080 vini-energia-front`

## Testes

- `npm test` para rodar os testes
