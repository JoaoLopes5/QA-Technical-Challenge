# QA Technical Challenge

## Sobre o projeto

Este projeto foi desenvolvido como solução para o desafio técnico de QA, contemplando testes de interface (UI Testing) e testes de API (API Testing).

As automações foram implementadas com foco em:
- organização
- reutilização
- legibilidade
- escalabilidade
- boas práticas de automação

---

# Tecnologias utilizadas

## UI Testing
- Cypress
- JavaScript
- Faker
- Lighthouse

## API Testing
- Postman
- Newman

## CI/CD
- GitHub Actions

---

# Estrutura do projeto

```txt
QA-Technical-Challenge/
│
├── ui-tests/
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── login/
│   │   │   ├── sorting/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   ├── navigation/
│   │   │   ├── logout/
│   │   │   ├── responsive/
│   │   │   └── accessibility/
│   │   │
│   │   ├── fixtures/
│   │   ├── pages/
│   │   └── support/
│   │
│   ├── reports/
│   ├── evidences/
│   ├── package.json
│   └── cypress.config.js
│
├── api-tests/
│   ├── collection/
│   │   └── Restful-booker.postman_collection.json
│   │
│   ├── environments/
│   │   └── Restful-booker.postman_environment.json
│   │
│   ├── package.json
│   
│
└── .github/
    └── workflows/
        ├── ui-tests.yml
        └── api-tests.yml
```

---

# Como executar o projeto

## UI Tests

```bash
cd ui-tests
npm install
```

## API Tests

```bash
cd api-tests
npm install
```

---

# Executar UI Tests

## Abrir interface Cypress

```bash
cd ui-tests
npx cypress open
```

## Executar em modo headless

```bash
cd ui-tests
npx cypress run
```

---

# Executar API Tests

```bash
cd api-tests
npm run api:test
```

---

# Executar Lighthouse Audit

```bash
cd ui-tests
npx lighthouse https://www.saucedemo.com --output html --output-path ./reports/lighthouse-report.html
```

---

# UI Testing — Sauce Demo

## Nível 1 (Obrigatório)

### Login
- Login com usuário válido
- Login com usuário bloqueado
- Login com múltiplos usuários

### Ordenação e filtros
- Ordenação A-Z
- Ordenação Z-A
- Ordenação por menor preço
- Ordenação por maior preço

### Carrinho
- Adicionar produto ao carrinho
- Remover produto do carrinho
- Validação da badge do carrinho

### Checkout
- Fluxo completo de compra
- Preenchimento de formulário
- Finalização da compra

### Cenários negativos
- Nome obrigatório
- Sobrenome obrigatório
- CEP obrigatório

### Navegação
- Inventory → Cart
- Cart → Inventory
- Inventory → Product Details
- Product Details → Inventory

### Logout
- Logout com sucesso

---

# Nível 2 (Diferencial)

## Responsividade
Validação em múltiplos dispositivos:
- iPhone X
- iPad
- Desktop

## Acessibilidade
Auditoria utilizando Google Lighthouse:
- Accessibility
- Performance
- SEO
- Best Practices

---

# API Testing — Restful Booker

## Nível 1 (Obrigatório)

### Auth
- Login com sucesso
- Login inválido
- Geração de token

### CRUD reservas
- Criar reserva
- Buscar reserva
- Atualizar reserva
- Deletar reserva

### Validações
- Campos obrigatórios
- Payload inválido
- Status code
- Estrutura de resposta

---

## Nível 2 (Diferencial)

### Testes de Performance
- Validação de tempo de resposta da API
- Verificação de SLA básico
- Monitoramento de response time nos principais endpoints

### Testes de Segurança
- Login inválido
- Atualização de reserva sem autenticação
- Exclusão de reserva sem token
- Validação de acesso não autorizado

### Automação via scripts
- Execução automatizada com Newman
- Integração contínua com GitHub Actions
- Execução via terminal utilizando scripts npm

---

# Diferenciais implementados

- Page Objects
- Dados dinâmicos com Faker
- Testes responsivos
- Auditoria Lighthouse
- Integração contínua com GitHub Actions
- Estrutura escalável
- Separação por responsabilidade
- Cenários positivos e negativos
- Automação API com Newman
- Testes básicos de performance API
- Testes básicos de segurança API

---

# CI/CD

O projeto possui integração contínua utilizando GitHub Actions.

Pipelines automatizadas:
- Execução de testes UI com Cypress
- Execução de testes API com Newman
- Validação automática em push e pull request

---

# Evidências

As evidências do projeto estão disponíveis em:

```txt
/ui-tests/evidences
```

Incluindo:
- screenshots
- relatórios
- auditorias Lighthouse

---

# Relatórios

## Lighthouse

Os relatórios de acessibilidade e performance estão disponíveis em:

```txt
/ui-tests/reports/lighthouse-report.html
```

---

# Premissas adotadas

- O Sauce Demo foi utilizado como aplicação de testes E2E.
- O Restful Booker foi utilizado para validação de API REST.
- Alguns problemas encontrados no Lighthouse pertencem à própria aplicação Sauce Demo.
- Os testes foram implementados visando reutilização e manutenção simplificada.

---

# Melhorias futuras

- Integração com Allure Reports
- Expansão da cobertura de testes
- Containerização com Docker

---

# Autor

João Pedro Lopes  
QA Engineer | Test Automation | Cypress | API Testing