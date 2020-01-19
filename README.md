# DevRadar 🛰️

DevRadar é uma aplicação onde devs podem encontrar outros devs próximos que trabalham com techs de seu interesse.

![Print screen WebApp](https://i.imgur.com/suSSJz6.png)


<p align="center">
  <img height="640" src="./app-mobile.gif">
</p>
  
---

## Techs usadas no projeto

-  ⚛️  **ReactJS**  — Uma biblioteca JavaScript para criar interfaces de usuário
-  ⚛️  **React Native**  — Um framework JavaScript para criar aplicativos nativos para Android e iOS
-   💹  **Node.js**  — Um runtime que permite desenvolver aplicações JavaScript diretamente do servidor
-   📄  **MongoDB**  — Um banco de dados orientado a documentos e de código aberto
-   ♻️  **Socket IO**  — Uma biblioteca para aplicativos web em tempo real

## Configurando 

1.  Clone este repositório usando  `git clone git@github.com:alissongdev/devradar.git`
2.  Vá para o diretório usando:  `cd devradar`
3.  Execute `yarn`  para instalar as dependências 

### Configurando o servidor back-end
1.  Mova-se para a pasta do back-end:  `cd backend`
2.  Siga os passos descritos em  **backend/env_example**  
3.  Execute `yarn dev`  para iniciar o servidor

❗️  O back-end começará na porta 3333

### Configurando a aplicação web
1.  Mova-se para a pasta da aplicação web:  `cd web`
2.  Execute `yarn start`  para iniciar a aplicação web

### Configurando o app mobile
1.  Mova-se para a pasta do app mobile:  `cd mobile`
2.  Execute `yarn start` para iniciar o app mobile

❗️  O app foi testado diretamente em um dispositivo físico por meio do app Expo. É preciso alterar o endereço ip em **mobile/src/services/api.js** e em **mobile/src/services/socket.js**.
