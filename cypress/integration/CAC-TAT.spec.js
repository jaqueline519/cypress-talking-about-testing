///<reference types="Cypress" />
describe('Central de atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('../../src/index.html')
    })

    it('verifica o titulo da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    });

    it('preenche os campos obrigatórios e envia o formulário', () => {
        const longText = 'O Cypress é uma ferramenta de teste de software de código aberto amplamente utilizada para testes de integração e end-to-end em aplicações web. Com uma sintaxe simples e poderosa, o Cypress oferece uma experiência de teste robusta, permitindo aos desenvolvedores validar a funcionalidade de seus aplicativos de forma eficiente. Sua capacidade de realizar testes em tempo real e sua integração fácil com frameworks populares tornam o Cypress uma escolha popular para equipes de desenvolvimento que buscam garantir a qualidade e a estabilidade de seus produtos web.'
        cy.get('#firstName').type('Jaqueline')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('jaquelinetestescypress@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    });

    it('exibe mensagem erro ao submeter o formulário com um email com formatação inválida', () => {
        const longText = 'O Cypress é uma ferramenta de teste de software de código aberto amplamente utilizada para testes de integração e end-to-end em aplicações web. Com uma sintaxe simples e poderosa, o Cypress oferece uma experiência de teste robusta, permitindo aos desenvolvedores validar a funcionalidade de seus aplicativos de forma eficiente. Sua capacidade de realizar testes em tempo real e sua integração fácil com frameworks populares tornam o Cypress uma escolha popular para equipes de desenvolvimento que buscam garantir a qualidade e a estabilidade de seus produtos web.'
        cy.get('#firstName').type('Jaqueline')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('jaquelinetestescypress.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    });
  
    it('campo telefone continua vazio quando preenchido com valor não numérico', () => {
        cy.get('#phone')
          .type('um valor qualquer')
          .should('have.value', '')

    });
})