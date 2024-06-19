describe('Login parabank', ()=>{
    it('Registro de usuario', ()=>{
        //Site fake de um banco
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        //Clicando, para fazer o registro do novo usuario.
        cy.get('#loginPanel > :nth-child(3) > a').click()

        //Colocando todas as informações do novo usuario.
        cy.get('[id="customer.firstName"]').type('José')
        cy.get('[id="customer.lastName"]').type('Fernandes')
        cy.get('[id="customer.address.street"]').type('Av. Caxangá, 3841 - Iputinga')
        cy.get('[id="customer.address.city"]').type('Recife')
        cy.get('[id="customer.address.state"]').type('Pernambuco')
        cy.get('[id="customer.address.zipCode"]').type('86789-976')
        cy.get('[id="customer.phoneNumber"]').type('(82)986685643')
        cy.get('[id="customer.ssn"]').type('001')
        cy.get('[id="customer.username"]').type('JoséFer')
        cy.get('[id="customer.password"]').type('1234567')
        cy.get('[id="repeatedPassword"]').type('1234567')
        cy.get('[colspan="2"] > .button').click()
    })  
})