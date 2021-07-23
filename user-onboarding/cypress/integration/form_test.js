describe('Form App',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    const nameInput=()=> cy.get('input[name=name]')
    const emailInput=()=> cy.get('input[name=email]')
    const passwordInput=()=> cy.get('input[name=password]')
    const termsInput=()=> cy.get('input[name=terms]')
    const buttonInput=()=> cy.get('button[name=button]')

    it('Check for test working',()=>{
        expect(1+2).to.equal(3)
    })

    it('Check for correct elements',()=>{
        nameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        termsInput().should("exist");
        buttonInput().should("exist");
    })

    it('Inputs are typeable',()=>{
        nameInput()
            .should("have.value", "")
            .type("Typable Name")
            .should("have.value", "Typable Name");
        emailInput()
            .should("have.value", "")
            .type("Typeable@email.com")
            .should("have.value", "Typeable@email.com");
        passwordInput()
            .should("have.value", "")
            .type("Typed-Password")
            .should("have.value", "Typed-Password");
        buttonInput()
            .click();
    })

    it('Terms are checkable',()=>{
        cy.get('[type="checkbox"]').check()
    })

    it('Form validation works',()=>{
        nameInput()
            .should("have.value", "")
            .type("Typable Name")
            .clear()
            .should("have.value", "")
        emailInput()
            .should("have.value", "")
            .type("Typeable@email.com")
            .clear()
            .should("have.value", "")
        passwordInput()
            .should("have.value", "")
            .type("Typed-Password")
            .clear()
            .should("have.value", "")
        termsInput()
            .should("have.value", "false")
            .check()
            .uncheck()
            .should("have.value", "false")
    })
})