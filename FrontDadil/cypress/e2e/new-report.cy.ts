describe('New Report', () => {
  beforeEach(() => {
    // Login and navigate to new report page
    cy.visit('/login')
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')
    cy.get('button[type="submit"]').click()
    cy.contains('Nova Denúncia').click()
  })

  it('should display report form', () => {
    cy.get('input[name="title"]').should('be.visible')
    cy.get('select[name="type"]').should('be.visible')
    cy.get('input[name="location"]').should('be.visible')
    cy.get('textarea[name="description"]').should('be.visible')
  })

  it('should submit report successfully', () => {
    cy.get('input[name="title"]').type('Teste de Denúncia')
    cy.get('select[name="type"]').select('illegal_dumping')
    cy.get('input[name="location"]').type('Rua Teste, 123')
    cy.get('textarea[name="description"]').type('Descrição do teste de denúncia')
    cy.get('button[type="submit"]').click()
    cy.contains('Denúncia Enviada!').should('be.visible')
  })

  it('should validate required fields', () => {
    cy.get('button[type="submit"]').click()
    cy.get('button[type="submit"]').should('be.disabled')
  })
})