
# Teste UX

Esse projeto tem a proposta de fazer Teste UX, utilizando o Cypress. Pegando um site já existente e fazendo testes, usando o que nos foi ensinado na aula de Teste - Manutenção e Análise de Sistema.

## Ferramentas:
- Node, para fazer a instalação do projeto.
- Cypress, para fazer os testes.
- Para Bank, o site utilizado para rodar os testes.

## Testes:
- [Teste de Registro](https://github.com/RyanRafaelA/teste_ux/blob/main/cypress/e2e/testeRegistro.cy.js)
- [Teste de Login](https://github.com/RyanRafaelA/teste_ux/blob/main/cypress/e2e/testeLogin.cy.js)

## Métodos Utilizados:

```bash
cy.visit()
```
Esse método para navegar para a url.
```bash
cy.get()
```
Seleciona um elemento da pagina, utilizando id ou class do elemento.
```bash
cy.get().type()
```
Com um elemento já selecionado, o type digita no elemento.
```bash
cy.get().click()
```
Com um elemento já selecionado, o click da um click no elemento.
## Alunos

- Larissa Silva de Morais Batista
- Ludmila do Carmo Ferreira
- Maria Clara de Araújo Lima
- Pedro Henrique Lima de Andrade
- Ryan Rafael Amaral dos Santos