# Loja do Groot

Bem-vindo à Loja do Groot! Este é um projeto de e-commerce para venda de plantas, desenvolvido com React, TypeScript e Vite.

## Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Sobre

A Loja do Groot é um e-commerce fictício que oferece uma ampla variedade de plantas. O objetivo deste projeto é demonstrar habilidades em desenvolvimento front-end utilizando tecnologias modernas.

## Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Clerk](https://clerk.dev/) para autenticação
- [Swiper](https://swiperjs.com/) para carrosséis
- [Axios](https://axios-http.com/) para requisições HTTP
- [React Hook Form](https://react-hook-form.com/) para gerenciamento de formulários
- [Zod](https://zod.dev/) para validação de esquemas
- [React Router](https://reactrouter.com/) para roteamento
- [React Loading Indicators](https://www.npmjs.com/package/react-loading-indicators) para indicadores de carregamento

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/loja-do-groot-web.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd loja-do-groot-web
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de API do Clerk e sua chave de API da loja:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_sua_chave_aqui
   VITE_LOJA_DO_GROOT_API_URL=loja-do-groot-api-url
   ```

5. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

## Uso

Após iniciar o servidor de desenvolvimento, você pode acessar a aplicação em `http://localhost:5173`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
loja-do-groot-web/
├── .env.local
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── fertilizer.svg
│   │   │   ├── sun.svg
│   │   │   ├── water.svg
│   │   ├── images/
│   │   │   ├── left_plant.png
│   │   │   ├── right_plant.png
│   ├── components/
│   │   ├── AboutUsCard.tsx
│   │   ├── Button.tsx
│   │   ├── ColumnText.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icon.tsx
│   │   ├── Input.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlantCard.tsx
│   │   ├── PlantContainer.tsx
│   │   ├── TakeCareOfYourPlants.tsx
│   │   ├── TextArea.tsx
│   │   ├── TextContainer.tsx
│   │   ├── Title.tsx
│   ├── hooks/
│   │   └── useFetchPlants.ts
│   ├── models/
│   │   └── Plant.ts
│   ├── pages/
│   │   ├── AboutUs.tsx
│   │   ├── Home.tsx
│   │   ├── LoginPage.tsx
│   │   ├── Product.tsx
│   │   ├── Products.tsx
│   │   ├── Register.tsx
│   ├── services/
│   │   └── plantService.ts
│   ├── styles/
│   │   ├── AboutUs.css
│   │   ├── AboutUsCard.css
│   │   ├── Button.css
│   │   ├── ColumnText.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Home.css
│   │   ├── Icon.css
│   │   ├── Input.css
│   │   ├── LoginPage.css
│   │   ├── Navbar.css
│   │   ├── PlantCard.css
│   │   ├── PlantContainer.css
│   │   ├── Product.css
│   │   ├── Products.css
│   │   ├── Register.css
│   │   ├── TakeCareOfYourPlants.css
│   │   ├── TextArea.css
│   │   ├── TextContainer.css
│   │   ├── Title.css
│   ├── validation/
│   │   └── plantSchema.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   ├── index.css
│   ├── Router.tsx
│   ├── vite-env.d.ts
│   └── ...
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```
