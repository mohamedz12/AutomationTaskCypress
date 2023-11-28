/// < reference type="cypress" />

//import { describe } from "mocha";
import AutomationTests from "../support/Pages/ValidatePackages";


describe("Automation TCs", function(){
    const mytest = new AutomationTests

    it('Validate Kuwait Packages and Prices', function() {

        mytest.OpenURL("https://www.stctv.com/")
        mytest.SelectKWCountry()
        mytest.ValidateKWPackagesandPrices()
    })

    it('Validate Bahrain Packages and Prices', function() {

        mytest.OpenURL("https://www.stctv.com/")
        mytest.SelectBHCountry()
        mytest.ValidateBHPackagesandPrices()
    })

});