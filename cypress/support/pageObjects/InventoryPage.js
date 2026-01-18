class InventoryPage{
    addFirstItemToCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').first().click();
    }
    assertCartCount(expected){
        cy.get('[data-test="shopping-cart-badge"]').should('have.text',expected.toString());
    }
}
export default new InventoryPage();