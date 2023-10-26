import LOCALIZE from '../resources/Content.js'

class BasePage {
    constructor() {
        this.baseUrl = Cypress.env('BASE_URL');
        this.content = LOCALIZE['US'];
        this.defaultTimeout = 30000;
        this.defaultInterval = 500;
        this.defaultWaitUntilOptions = {
            timeout: this.defaultTimeout,
            interval: this.defaultInterval
        };
    }
}

export default BasePage;
