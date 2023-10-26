import DocBasePage from "../pages/DocBasePage.cy";

    const docBasePage = new DocBasePage

  describe('Test Cypress Documentation Header', () => {
      beforeEach(() => {
        docBasePage.openDocPage();
      });

      it('verifies visit to doc page', () => {
          cy.log("it ran sucessfully");
      });

  });
