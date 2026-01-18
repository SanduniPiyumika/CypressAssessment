///<reference types="cypress" />
import LoginPage from "../support/pageObjects/LoginPage";
import InventoryPage from "../support/pageObjects/InventoryPage";

describe('Login and Add item to cart', () => {
  let creds;

  before(() => {
    cy.fixture('credentials.example').then((data) => {
      creds = data;
    });
  });
 
  it('User should be able to login with valid credentials', () => {
      LoginPage.visit();
      LoginPage.login(creds.username,creds.password);
      InventoryPage.addFirstItemToCart();
      InventoryPage.assertCartCount(1);
    })

})