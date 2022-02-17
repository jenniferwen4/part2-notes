describe("Note app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    const user = {
      name: "name",
      username: "booty",
      password: "open",
    };
    cy.request("POST", "http://localhost:3001/api/users/", user);
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", function () {
    cy.contains("Notes");
    cy.contains(
      "Note app, Department of Computer Science, University of Helsinki 2021"
    );
  });

  it("login form can be opened", function () {
    cy.contains("login").click();
  });

  it("user can login", function () {
    cy.contains("login").click();
    cy.get("#username").type("booty");
    cy.get("#password").type("open");
    cy.get("#login-button").click();

    cy.contains("name logged-in");
  });

  describe("when logged in", function () {
    beforeEach(function () {
      cy.contains("login").click();
      cy.get("input:first").type("booty");
      cy.get("input:last").type("open");
      cy.get("#login-button").click();
    });
    it("a new note can be created", function () {
      cy.contains("new note").click();
      cy.get("input").type("a note created by cypress");
      cy.contains("save").click();
      cy.contains("a note created by cypress");
    });
  });
});

// something wrong with back end
// not 'getting' notes
