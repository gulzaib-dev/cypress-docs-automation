import BasePage from './BasePage.cy';

/**
 * Represents a DOC Common page methods.
 */
class DocBasePage extends BasePage {
    constructor() {
        super();
        this.docsCommonSelectors = {
            htmlTheme: '.docs-wrapper',
            announcementBar:
                {
                    mainBanner: 'div[class*=announcementBar][role=banner]',
                    content: 'div[class*=announcementBarContent]',
                    closeBtn: 'button[class*=announcementBarClose]',
                },
                navBar:
                {
                    inner: '.navbar__inner',
                    itemDiv: '.navbar__items',
                    item: '.navbar__item.navbar__link',
                    activeItem: 'navbar__link--active',
                    colorModeToggle: 'button[class*=darkNavbarColorModeToggle]'
                }
        };
    }

    openDocPage() {
        cy.visit(this.baseUrl);
        cy.url().should('include', 'docs');
        cy.log("Visited docs page with URL" + this.baseUrl);
    }

    verifyAnnouncementBar() {
        cy.get(this.docsCommonSelectors.announcementBar.mainBanner).should('be.visible');
        cy.get(this.docsCommonSelectors.announcementBar.content)
            .should('be.visible')
            .should('include.text', this.content.AnnouncementBarContent);

        this.closeBanner();
        cy.get(this.docsCommonSelectors.announcementBar.mainBanner).should('not.exist');
    }

    verfiyNavBarLinks() {
        this.content.NavBar.links.forEach( (link) => {
            this.verifylink(link)
        })
    }

    verifylink(link) {
        cy.get(this.docsCommonSelectors.navBar.item)
            .contains(link)
            .should('be.visible')
            .click();

        cy.url().should('include', link.toLowerCase());

        cy.get(this.docsCommonSelectors.navBar.item)
            .contains(link)
            .should('have.class', this.docsCommonSelectors.navBar.activeItem)
    }

    verifyColorModeToggle() {
        cy.get(this.docsCommonSelectors.navBar.colorModeToggle)
            .should('be.visible')
            .click();

        cy.get(this.docsCommonSelectors.htmlTheme)
            .should('have.attr', 'data-theme', 'dark');
    }

    closeBanner(){
        cy.get(this.docsCommonSelectors.announcementBar.closeBtn)
            .should('be.visible')
            .click();
    }
}
export default DocBasePage;
