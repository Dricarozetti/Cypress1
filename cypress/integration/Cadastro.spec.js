//Mocha é o test runner do cypress
// describe,content,it
var Chance = require('chance')
var chance = new Chance()

describe ('cadastro', () => {

    it ('Quando eu informo os dados e finalizar, então cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app')


        //inpus de texto/textarea/email
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        cy.get('input[value=n]').check()

        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

          //Inputs do tipos combobox
          cy.get('select#countries').select('Dinamarca' , {force: true})
          cy.get('select#years').select('2005' , {force: true})
          cy.get('select#months').select('Janeiro' , {force: true})
          cy.get('select#days').select('8' , {force: true})

          //Inputs de senha -> Type
          cy.get('input#firstpassword').type('Alunos@2021')
          cy.get('input#secondpassword').type('Alunos@2021')
          cy.get('#submitbtn').click()


          //espero que minha aplicaçao seja direcionada para a listagem
          //url
          //deve conter listagem.. should contain
          cy.url().should('contain', 'listagem')







    




        
    });

});
