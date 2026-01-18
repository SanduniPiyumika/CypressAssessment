class LoginPage{
    //visit
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }
    //login    
    login(usernameInput,passwordInput){
        cy.get('[data-test="username"]').type(usernameInput);
        cy.get('[data-test="password"]').type(passwordInput);
        cy.get('[data-test="login-button"]').click();
    }
}
export default new LoginPage();