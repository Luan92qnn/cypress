
Cypress.Cookies.debug(true)
var userName = ""
var pass = ""

it ("",function(){

cy.visit('https://www.facebook.com/messages/t/1505208313074218')

cy.get('#email').type(userName)
cy.get('#pass').type(pass)
cy.get('#loginbutton').click()
cy.wrap([1, 2, 3]).each((num, i, array) => {
    return new Cypress.Promise((resolve) => {
      setTimeout(() => {
        resolve()
        cy.get('#js_1h > div > div > div > span').type('ok google', {force: true})
        
      }, num * 100)
    })
  })
cy.get('#js_1h > div > div > div > span').type('ok google', {force: true})
})


    
    