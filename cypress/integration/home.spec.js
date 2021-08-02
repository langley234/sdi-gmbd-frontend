describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })


    it (`should have a navigation bar with a 'Home' link, a 'Login' link, an input field, and a button with 'Search' displayed`, () => {
        expect(cy.findByText('Home').should('exist'));
        expect(cy.findByText('Login').should('exist'));
        expect(cy.findByRole('textbox').should('exist'));
        expect(cy.findByRole('button').contains('Search').should('exist'));
    });
    it ('should take user to a login page when the login link is clicked', () => {
        //cy.findByText('Login').click();

        return cy.findByText('Login').click()
            .then(() => {
                expect(cy.findByText('Email:').should('exist'));
                expect(cy.findByRole('textbox', {name: /Email:/i})).should('exist')
                expect(cy.findByText('Password:').should('exist'));
                expect(cy.findByRole('button').contains('Login').should('exist'));
            })
    }); 
  })

  // it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
  //   cy.findByRole('button').click();
  //   expect(cy.findByRole('textbox', {name: /Recipe name/i})).toExist()
  //   cy.findByRole('textbox', {name: /instructions/i}).should('exist')
  // })

//   describe("login page", () => {
//     beforeEach(() => {
//         cy.visit('/')
       
        
    
//     })

    
//     it('login page contains a form', () => {
  
//       cy.findByRole('login').click();
//       cy.get('form')
//         .should('exist')

      
//     });
    
//     it('login page has a textbox for the first name of the user', () => {
//       cy.findByRole('login').click();
//       expect(cy.findByRole('textbox').contains(/first name/i)).should('exist');

//     });
    
    // it('login page has a textbox for the last name of the user', () => {
      // cy.findByRole('login').click();
    //   expect(cy.findByRole('textbox', {name: /last name/i})).should('exist')
    // });

    // it('login page has a textbox for the email of the user', () => {
      // cy.findByRole('login').click();
    //   expect(cy.findByRole('textbox', {name: /email/i})).should('exist')
    // });

    // it('login page has a textbox for the username of the user', () => {
      // cy.findByRole('login').click();
    //   expect(cy.findByRole('textbox', {name: /username/i})).should('exist')
    // });

    // it('login page has a textbox for the password of the user', () => {
      // cy.findByRole('login').click();
    //   expect(cy.findByRole('textbox', {name: /password/i})).should('exist')
    // });
  //})




