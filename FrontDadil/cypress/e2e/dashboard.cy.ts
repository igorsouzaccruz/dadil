/// <reference types="cypress" />

describe('Dashboard', () => {
  beforeEach(() => {
    // Login before each test
    cy.visit('/login')
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')
    cy.get('button[type="submit"]').click()
  })

  it('should display welcome message', () => {
    cy.get('h1').contains('Bem-vindo')
  })

  it('should navigate to new report page', () => {
    cy.contains('Nova Denúncia').click()
    cy.url().should('include', '/new-report')
  })

  // it('should display region chart', () => {
  //   cy.get('#regionChart').should('be.visible')
  // })

  it('should logout successfully', () => {
    cy.contains('Sair').click()
    cy.url().should('include', '/login')
  })
})