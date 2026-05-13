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
- Mochawesome

## API Testing
- Postman
- Newman

---

# Estrutura do projeto

```txt
ui-tests/
│
├── cypress/
│   ├── e2e/
│   │   ├── login/
│   │   ├── sorting/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── navigation/
│   │   ├── logout/
│   │   ├── responsive/
│   │   └── accessibility/
│   │
│   ├── fixtures/
│   │
│   ├── pages/
│   │
│   └── support/
│
├── reports/
│
├── evidences/
│
├── package.json
│
└── README.md
```

---

# Tecnologias e bibliotecas

| Ferramenta | Objetivo |
|---|---|
| Cypress | Automação E2E |
| Faker | Geração de dados dinâmicos |
| Lighthouse | Auditoria de acessibilidade e performance |
| Mochawesome | Relatórios de execução |
| Postman | Testes de API |
| Newman | Execução automatizada da collection |

---

# Como executar o projeto

## Instalar dependências

```bash
npm install
```

---

# Executar UI Tests

## Abrir interface Cypress

```bash
npx cypress open
```

## Executar em modo headless

```bash
npx cypress run
```

---

# Executar API Tests

```bash
newman run restful-booker-collection.json
```

---

# Executar Lighthouse Audit

```bash
npx lighthouse https://www.saucedemo.com --output html --output-path ./reports/lighthouse-report.html
```

---

# Cenários implementados

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
- Validar badge do carrinho

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
- Geração de token

### CRUD reservas
- Criar reserva
- Buscar reserva
- Atualizar reserva
- Deletar reserva

### Validações
- Campos obrigatórios
- Status code
- Estrutura de resposta

---

# Diferenciais implementados

- Page Objects
- Dados dinâmicos com Faker
- Testes responsivos
- Auditoria Lighthouse
- Relatórios Mochawesome
- Estrutura escalável
- Separação por responsabilidade
- Cenários positivos e negativos

---

# Evidências

As evidências do projeto estão disponíveis em:

```txt
/evidences
```

Incluindo:
- screenshots
- relatórios
- auditorias Lighthouse

---

# Relatórios

## Mochawesome
Os relatórios de execução são gerados automaticamente após a execução dos testes.

## Lighthouse
Os relatórios de acessibilidade e performance estão disponíveis em:

```txt
/reports/lighthouse-report.html
```

---

# Premissas adotadas

- O Sauce Demo foi utilizado como aplicação de testes E2E.
- O Restful Booker foi utilizado para validação de API REST.
- Alguns problemas encontrados no Lighthouse pertencem à própria aplicação Sauce Demo.
- Os testes foram implementados visando reutilização e manutenção simplificada.

---

# Melhorias futuras

- Integração contínua com GitHub Actions
- Execução paralela dos testes
- Integração com Allure Reports
- Testes visuais automatizados
- Testes cross-browser

---

# Autor

João Pedro Lopes  
QA Engineer | Test Automation | Cypress | API Testing