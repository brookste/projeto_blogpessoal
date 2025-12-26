# 📘 Blog Pessoal – API REST (CRUD)

Este projeto consiste no desenvolvimento de uma **API REST para um Blog Pessoal**, com funcionalidades completas de **CRUD**, autenticação, relacionamento entre entidades e documentação automática. O objetivo principal é aplicar boas práticas de desenvolvimento backend utilizando **NestJS**, seguindo uma arquitetura modular, organizada e escalável.

---

## 🚀 Funcionalidades

* CRUD completo de **Postagens**
* CRUD de **Temas**
* Cadastro e gerenciamento de **Usuários**
* Autenticação com **JWT (JSON Web Token)**
* Relacionamentos entre entidades (Postagem, Tema e Usuário)
* Validações de dados
* Documentação automática com **Swagger**

---

## 🧱 Arquitetura do Projeto

O projeto segue a arquitetura padrão do **NestJS**, baseada em **módulos**, garantindo separação de responsabilidades e facilidade de manutenção.

Cada módulo é composto por:

* **Entity**: representa a tabela no banco de dados
* **Service**: contém a regra de negócio
* **Controller**: recebe as requisições HTTP e direciona para o service
* **Module**: organiza e encapsula a funcionalidade

Exemplo de módulos:

* PostagemModule
* TemaModule
* UsuarioModule
* AuthModule

---

## 🗄️ Modelagem de Dados

### Entidade Postagem

* id
* titulo
* texto
* data
* Relacionamento ManyToOne com **Tema**
* Relacionamento ManyToOne com **Usuário**

Os relacionamentos utilizam **cascade**, garantindo integridade referencial no banco de dados.

---

## 🔐 Autenticação e Segurança

A autenticação da aplicação é feita utilizando **JWT (JSON Web Token)**.

Fluxo:

1. O usuário realiza login
2. A API gera um token JWT
3. O token é enviado nas requisições protegidas
4. Guards validam o token antes de permitir o acesso aos endpoints

Isso garante que apenas usuários autenticados possam acessar rotas sensíveis.

---

## 📑 Documentação

A API conta com documentação automática gerada pelo **Swagger**, facilitando o entendimento e o teste dos endpoints.

Através do Swagger é possível:

* Visualizar todas as rotas disponíveis
* Testar requisições diretamente pela interface
* Ver exemplos de payloads e respostas

---

## 🌐 Deploy

O projeto foi preparado para **deploy em ambiente de produção**, com:

* Configuração de variáveis de ambiente
* Banco de dados relacional
* API hospedada em ambiente cloud

*(Exemplo: Render, Railway ou outra plataforma de deploy)*

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **NestJS**
* **TypeScript**
* **TypeORM**
* **PostgreSQL**
* **JWT (JSON Web Token)**
* **Swagger**
* **Git & GitHub**

---

## ▶️ Como executar o projeto

```bash
# Instalar dependências
npm install

# Executar em ambiente de desenvolvimento
npm run start:dev
```

---

## 📌 Objetivo do Projeto

Este projeto foi desenvolvido com fins **educacionais e práticos**, com o objetivo de consolidar conhecimentos em desenvolvimento backend, arquitetura de APIs REST, autenticação, banco de dados e boas práticas com NestJS.

---

## 👩‍💻 Autora

Projeto desenvolvido por **Ester Santos** 🚀

---

Se você gostou do projeto, fique à vontade para contribuir ou deixar sugestões ✨

