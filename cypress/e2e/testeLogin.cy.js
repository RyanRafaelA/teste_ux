describe('Parabank', ()=>{
    it('Login de usuario', ()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get(':nth-child(2) > .input').type('JoséFer')
        cy.get(':nth-child(4) > .input').type('1234567')
        cy.get(':nth-child(5) > .button').click()
    })
})