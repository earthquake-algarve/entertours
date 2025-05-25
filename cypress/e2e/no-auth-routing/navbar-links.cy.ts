describe('Navbar links', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('[data-testid="dropdown-menu"]').should('exist');
		cy.get('[data-testid="dropdown-menu"]').click();
	});

	//home page button click
	it('should navigate to home page', () => {
		cy.get('[data-testid="logo-link"]').click();
		cy.url().should('eq', `${Cypress.config().baseUrl}/`);
		cy.get('h1').contains(
			'Discover Unforgettable Tours — Wherever You Are.',
		);
	});

	it('should navigate to tours page', () => {
		cy.get('[data-testid="dropdown-menu-tours"]').click();
		cy.url().should('include', '/tours');
		cy.get('h1').contains('All tours');
	});

	it('should navigate to locations page', () => {
		cy.get('[data-testid="dropdown-menu-locations"]').click();
		cy.url().should('include', '/locations');
		cy.get('h1').contains('All locations');
	});

	it('should navigate to categories page', () => {
		cy.get('[data-testid="dropdown-menu-categories"]').click();
		cy.url().should('include', '/categories');
		cy.get('h1').contains('All categories');
	});
});
