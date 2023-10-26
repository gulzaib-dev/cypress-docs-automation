import DocBasePage from "../pages/DocBasePage.cy";

    const docBasePage = new DocBasePage

  describe('Test Cypress Documentation Header', () => {
      beforeEach(() => {
        docBasePage.openDocPage();
      });

      it('verifies Announcement Bar', () => {
          docBasePage.verifyAnnouncementBar();
      });

      it('verifies Nav bar Deeplinks', () => {
        docBasePage.verfiyNavBarLinks();
      });

  });
