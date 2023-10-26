import BasePage from './BasePage.cy';

/**
 * Represents a DOC Common page methods.
 */
class DocBasePage extends BasePage {
    constructor() {
        super();
        this.docsCommonSelectors = {
            announcementBar:
                {
                    mainBanner: 'div[class*=announcementBar][role=banner]',
                    content: 'div[class*=announcementBarContent]',
                    closeBtn: 'button[class*=announcementBarClose]',
                },
        };
    }

    openDocPage(){
        cy.visit(this.baseUrl);
        cy.log("Visited docs page with URL" + this.baseUrl);
    }

    verifyAnnouncementBar(){
        cy.get(this.docsCommonSelectors.announcementBar.mainBanner).should('be.visible');
        cy.get(this.docsCommonSelectors.announcementBar.content)
            .should('be.visible')
            .should('include.text', this.content.AnnouncementBarContent);

        this.closeBanner();
        cy.get(this.docsCommonSelectors.announcementBar.mainBanner).should('not.exist');
    }

    closeBanner(){
        cy.get(this.docsCommonSelectors.announcementBar.closeBtn)
            .should('be.visible')
            .click();
    }
}
export default DocBasePage;
