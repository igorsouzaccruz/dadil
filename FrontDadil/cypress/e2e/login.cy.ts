describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should display login form', () => {
    cy.get('h1').contains('DADIL')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="password"]').should('be.visible')
    cy.get('button[type="submit"]').contains('Entrar')
  })

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })

  it('should show error for empty fields', () => {
    cy.get('button[type="submit"]').click()
    cy.get('.bg-error-500').should('be.visible')
  })
})