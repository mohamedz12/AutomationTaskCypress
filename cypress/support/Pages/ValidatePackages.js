// < reference type= "cypress" />

export class AutomationTests{

    OpenURL(url){
        cy.visit(url)
        cy.get('a').contains("English").click()
    }

    SelectKWCountry(){
        cy.get('span#country-name').click()
        cy.get('div#country-selct > a#kw').click()
    }

    SelectKSACountry(){
        cy.get('span#country-name').click()
        cy.get('div#country-selct > a#sa').click()
    }

    SelectBHCountry(){
        cy.get('span#country-name').click()
        cy.get('div#country-selct > a#bh').click()
    }

    ValidateKWPackagesandPrices(){
        cy.contains("LITE").should('exist')
        cy.contains("CLASSIC").should('exist')
        cy.contains("PREMIUM").should('exist')
        cy.contains("1.2 KWD/month").should('exist')
        cy.contains("2.5 KWD/month").should('exist')
        cy.contains("4.8 KWD/month").should('exist')
    }

    ValidateBHPackagesandPrices(){
        cy.contains("LITE").should('exist')
        cy.contains("CLASSIC").should('exist')
        cy.contains("PREMIUM").should('exist')
        cy.contains("2 BHD/month").should('exist')
        cy.contains("3 BHD/month").should('exist')
        cy.contains("6 BHD/month").should('exist')
    }





}
export default AutomationTests