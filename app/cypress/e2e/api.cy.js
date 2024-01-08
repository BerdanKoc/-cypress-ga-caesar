context('API Testing', () => {
    beforeEach(() => {
        cy.fixture('cars').then((cars) => {
            cy.request('POST', '/reset', cars);
        });
    })
    it('should add a car - POST /cars', () => {
        cy.fixture('car').then((car) => {
            cy.request('POST', '/cars', car);
        })
    });
}); 