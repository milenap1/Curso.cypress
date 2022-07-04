//elementos:
const cpf = '.styles__Input-sc-1skgo2r-2'
//LOGIN
/// <reference types="cypress" />

describe ('Should test at a functional level', () => {
before (() => {

    cy.visit('https://pernambucanas.com.br')

})

it('login', () => {
  cy.get('.iXjpkc').click() //login
  cy.wait(4000)
  cy.get(cpf).type('48434292874') 
  cy.get('form > .styles__Container-sc-1yc3ktd-0').click() //botão continuar
  cy.wait(4000)
  cy.get('.bwutOR > .styles__InputContainer-sc-1skgo2r-1').type('Laura2111@') //senha Laura2111@
  cy.get('form > .styles__Container-sc-1yc3ktd-0').click() //botão continuar
  cy.wait(6000) //esperar 
  cy.get('.styles__HeaderMenuList-sc-1qotcn3-30 > :nth-child(1)').click()
  cy.get('.styles__DepartmentsList-sc-15109u8-8 > :nth-child(1)').click()
  
//escolher produto  
//cy.get('.styles__HeaderMenuList-sc-1qotcn3-30 > :nth-child(1)').click()
//cy.get().click()
//cy.get('#customer-account-login').click() //botão feminino ***
   

   
}) 

}) 
