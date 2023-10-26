import BasePage from './BasePage.cy';

/**
 * Represents a DOC Common page methods.
 */
class DocBasePage extends BasePage {
    constructor() {
        super();
        this.docsCommonSelectors = {

        };
    }

    openDocPage(){
        cy.visit(this.baseUrl);
        cy.log("Visited docs page" + this.baseUrl);
        cy.wait(5000);
    }

}
export default DocBasePage;
