describe("Login Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");

    cy.get("form", { timeout: 10000 }).should("be.visible");
  });

  it("Geçersiz email buton disabled", () => {
    cy.get('input[name="email"]').type("email");
    cy.get('input[name="password"]').type("password");
    cy.get('input[name="terms"]').check();
    cy.get('input[name="email"]')
      .next()
      .should("contain", "Please enter a valid email address");
    cy.get('input[name="password"]').next().should("not.exist");
    cy.get("button").contains("Sign In").should("be.disabled");
  });

  it("Geçerli email ve geçersiz şifre", () => {
    cy.get('input[name="email"]').clear().type("example@example.com");
    cy.get('input[name="password"]').clear().type("sho");
    cy.get('input[name="terms"]').check();
    cy.get('input[name="password"]')
      .next()
      .should("contain", "Password must be at least 4 characters long");
    cy.get('input[name="email"]').next().should("not.exist");
    cy.get("button").contains("Sign In").should("be.disabled");
  });

  it("koşullar kabul edilmediğinde", () => {
    cy.get('input[name="email"]').clear().type("example@example.com");
    cy.get('input[name="password"]').clear().type("password");
    cy.get('input[name="password"]').next().should("not.exist");
    cy.get('input[name="email"]').next().should("not.exist");
    cy.get('input[name="terms"]').uncheck();
    cy.get("button").contains("Sign In").should("be.disabled");
  });

  it("Tüm form doğru doldurulduğunda", () => {
    cy.get('input[name="email"]').type("example@example.com");
    cy.get('input[name="password"]').type("password");
    cy.get('input[name="terms"]').check();
    cy.get("button").should("not.be.disabled");
  });
});
