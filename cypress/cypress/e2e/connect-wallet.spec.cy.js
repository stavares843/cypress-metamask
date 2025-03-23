describe("connect wallet spec", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  afterEach(() => {
    cy.disconnectMetamaskWalletFromAllDapps()
    cy.resetMetamaskAccount()
  })

  it("should connect wallet with success", () => {
    cy.get('.btn_connect').click()
    cy.acceptMetamaskAccess()
    cy.changeMetamaskNetwork('Ethereum Mainnet')
    cy.contains("Connected!").click()
    cy.getMetamaskWalletAddress()
    cy.get('#address').type('DAQ341DoQaHqYUMJYtNgncm4xxwhv4GZfQC7VsbsdiSB')
    cy.get('#message').click()
    cy.get('#message').type('test')
    cy.contains('Sign the message').click()
    cy.confirmMetamaskSignatureRequest()
    cy.contains('Verify the signature').click()
    cy.contains('Invalid signature')
    cy.get('#address').clear().type('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
    cy.contains('Sign the message').click()
    cy.confirmMetamaskSignatureRequest()
    cy.contains('Verify the signature').click()
    cy.contains('Valid signature')
  })
})
