import "cypress-real-events";

describe("section 1",()=>{

    before(()=>{
        cy.visit("section-1.html")
    })   
    
    it("Button Functionality",()=>{
        /* for an element that has id, we write:"#<name of id>" */
        cy.get("#change-color-btn").click()
        /* for an element that has class, we write:".<name of class>" */
        cy.get(".grid-item").should("have.css", "background-color", "rgb(0, 0, 255)")
        cy.get("#change-color-btn").click()
        cy.get(".grid-item").should("have.css", "background-color", "rgb(255, 165, 0)")
        cy.get("#change-color-btn").click()
        cy.get(".grid-item").should("have.css", "background-color", "rgb(255, 0, 0)")
        cy.get("#change-color-btn").click()
        cy.get(".grid-item").should("have.css", "background-color", "rgb(255, 255, 0)")
        cy.get("#change-color-btn").click()
        cy.get(".grid-item").should("have.css", "background-color", "rgb(0, 0, 0)")
    })
    it("Pagination Functionality", ()=>{
        cy.visit("section-1.html")
        /* Find the link with an href attribute containing the word "questions and click it
           by this command:  cy.get('a[href*="questions"]').click()   " */
        cy.get('a[href*="section-1"]').click()
        cy.get('a[href*="section-2"]').click()
        cy.get('a[href*="section-2"]').click()
        cy.get('a[href*="section-3"]').click()
        cy.get('a[href*="section-3"]').click()
        cy.get('a[href*="section-2"]').click()
        cy.get('a[href*="section-1"]').click()
        cy.get('a[href*="section-3"]').click()
    })
})

describe("section 2",()=>{
    it("Button Functionality",()=>{
        cy.visit("section-2.html")
        cy.get('button').click()
        cy.get("#fname").invoke ('val').then((val)=>{
            const names = ['amir', 'ali', 'mehdi', 'salar'];
            expect(names).include(val)
        })
        cy.get("#lname").invoke('val').then((val)=>{
            const lastNames = ['ahmadi', 'rajai', 'habibi', 'emadi'];
            expect(lastNames).include(val)
        })
        cy.get("#email").invoke('val').then((val)=>{
            const emails = ['gfdpo34@yahoo.com', 'dsaoSD34@yahoo.com', 'afqopop2@yahoo.com', 'asdADS77@yahoo.com'];
            expect(emails).include(val)
        })
        cy.get("#bdate").invoke('val').then((val)=>{
            const birthDates = ['1950-01-01', '1995-02-05', '1999-10-19', '2002-12-23'];
            expect(birthDates).include(val)
        })

        cy.get('button').click()
        cy.get("#fname").invoke ('val').then((val)=>{
            const names = ['amir', 'ali', 'mehdi', 'salar']
            expect(names).include(val)
        })
        cy.get("#lname").invoke('val').then((val)=>{
            const lastNames = ['ahmadi', 'rajai', 'habibi', 'emadi'];
            expect(lastNames).include(val)
        })
        cy.get("#email").invoke('val').then((val)=>{
            const emails = ['gfdpo34@yahoo.com', 'dsaoSD34@yahoo.com', 'afqopop2@yahoo.com', 'asdADS77@yahoo.com'];
            expect(emails).include(val)
        })
        cy.get("#bdate").invoke('val').then((val)=>{
            const birthDates = ['1950-01-01', '1995-02-05', '1999-10-19', '2002-12-23'];
            expect(birthDates).include(val)
        })
        
    })
})
describe("section 3",()=>{
    it("Button Functionality",()=>{
        cy.visit("section-3.html")
        cy.get('#login-button').click()
        cy.on('window:confirm', (text) =>{
            expect(text).to.contains('Login failed');
        })
        cy.visit("section-3.html")
        cy.get('#username').type('ali')
        cy.get('#password').type('123asd123')
        cy.get('#login-button').click()
        cy.on('window:confirm', (text) =>{
            expect(text).to.contains('Login successful');
        })

        // cy.get("#fname").invoke ('val').then((val)=>{
        //     const names = ['amir', 'ali', 'mehdi', 'salar'];
        //     expect(names).include(val)
    
    })
})