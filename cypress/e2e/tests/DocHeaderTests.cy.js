import DocBasePage from "../pages/DocBasePage.cy";

    const docBasePage = new DocBasePage

  describe('Test Cypress Documentation Header', () => {
      beforeEach(() => {
        docBasePage.openDocPage();
      });

      it('verifies Announcement Bar', () => {
          cy.log("it ran sucessfully");
          docBasePage.verifyAnnouncementBar();
      });

  });
