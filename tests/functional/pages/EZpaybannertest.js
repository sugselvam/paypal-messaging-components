const selectors = {
    ezpayopen: '.message__content',
    ezcloseban: '#close-btn',
    iframe: 'xpath://div[contains(@style,"display: block")]//iframe',
    ezpaytextbox: '.calculator__input',
    ezpaycalculate: '.calculator__btn',
    ezpaycontainer: 'xpath://section[@id="modal-container"]',
    ezpayaccordion: 'xpath://section[@id="ezp-content"]/div[4]/h3',
    ezpaypromotionaccordion: 'xpath://section[@id="ezp-content"]/div[6]/h3',
    ezpaymonthlypayments: 'xpath://section[@id = "financing-terms"]/table/tbody/tr/td[1]',
    ezpaypayments: 'xpath://section[@id = "financing-terms"]table/tbody/tr/td[2]',
    ezpayminimumpurchase: 'xpath://section[@id = "financing-terms"]/table/tbody/tr/td[2]',
    ezpaytotalintrest: 'xpath://section[@id = "financing-terms"]/table/tbody/tr/td[5]',
    ezpaytabclick: "xpath://section[@id='tabs']/h3[@id='ni-tab']",
    nitabclick: "xpath://section[@id='tabs']/h3[@id='ezp-tab']",
    ezpaytab: '#ezp-tab',
    nitab: '#ni-tab',
    ezpContent: '#ezp-content',
    niContent: '#ni-content'
};
const chai = require('chai');

chai.should();

exports.ezpayentrypage = function(nemo) {
    return {
        async viewezpaybanner() {
            await nemo.driver.sleep(10000);
            await nemo.driver.switchTo().frame(0);
            await nemo.view._waitVisible(selectors.ezpayopen);
            await nemo.view._find(selectors.ezpayopen).click();
            await nemo.driver.sleep(5000);
            await nemo.driver.switchTo().defaultContent();
        },
        async checkEzpayPage() {
            const iframeElement = await nemo.view._finds(selectors.iframe);
            await nemo.view._waitVisible(selectors.iframe);
            await nemo.driver.switchTo().frame(iframeElement[0]);
            const minimumpurchaseamount = await nemo.view._find(selectors.ezpayminimumpurchase).getText();
            return minimumpurchaseamount.should.equal('$30.00');
        },

        async calculateamount() {
            await nemo.view._waitVisible(selectors.ezpaytextbox);
            await nemo.view._find(selectors.ezpaytextbox).sendKeys(300);
            await nemo.view._waitVisible(selectors.ezpaycalculate);
            await nemo.view._find(selectors.ezpaycalculate).click();
            await nemo.driver.sleep(5000);
        },
        async checkmonthlypaymentsafterCalculate() {
            const monthlypayments = await nemo.view._find(selectors.ezpaymonthlypayments).getText();
            return monthlypayments.should.equal('$100.00');
        },

        async checktotalintrestafterCalculate() {
            const totalintrest = await nemo.view._find(selectors.ezpaytotalintrest).getText();
            return totalintrest.should.equal('$300.00');
        },

        async clearamount() {
            await nemo.view._find(selectors.ezpaytextbox).clear();
            await nemo.view._find(selectors.ezpaycalculate).click();
            await nemo.driver.sleep(5000);
        },
        async canOpenCloseEzpayAccordion() {
            await nemo.view._waitVisible(selectors.ezpayaccordion);
            await nemo.view._find(selectors.ezpayaccordion).click();
            await nemo.driver.sleep(3000);
            const ezpayaccordion = await nemo.view._finds(selectors.ezpayaccordion);
            await nemo.driver
                .actions()
                .mouseMove(ezpayaccordion[0], { x: 5, y: 5 })
                .click()
                .perform();
            await nemo.driver.sleep(3000);
        },
        async canOpenClosePromotionAccordion() {
            await nemo.view._waitVisible(selectors.ezpaypromotionaccordion);
            await nemo.view._find(selectors.ezpaypromotionaccordion).click();
            await nemo.driver.sleep(3000);
            const promotionaccordion = await nemo.view._finds(selectors.ezpaypromotionaccordion);
            await nemo.driver
                .actions()
                .mouseMove(promotionaccordion[0], { x: 5, y: 5 })
                .click()
                .perform();
            await nemo.driver.sleep(5000);
        },
        async canChangeTabs() {
            const ezpayselected = await nemo.view._find(selectors.ezpaytab).getAttribute('class');
            if (ezpayselected === 'selected') {
                await nemo.view._find(selectors.ezpaytabclick).click();
            }
            await nemo.driver.sleep(3000);
            const niselected = await nemo.view._find(selectors.nitab).getAttribute('class');
            if (niselected === 'selected') {
                await nemo.view._find(selectors.nitabclick).click();
            }
            await nemo.driver.sleep(3000);
        },

        async closesOnEscKey() {
            await nemo.driver
                .actions()
                .sendKeys(nemo.wd.Key.ESCAPE)
                .perform();
            await nemo.driver.switchTo().defaultContent();
            await nemo.driver.sleep(5000);
        },
        async closesOnOverlayClick() {
            await this.viewezpaybanner();
            const iframeElement = await nemo.view._finds(selectors.iframe);
            await nemo.view._waitVisible(selectors.iframe);
            await nemo.driver.switchTo().frame(iframeElement[0]);
            const container = await nemo.view._finds(selectors.ezpaycontainer);
            await nemo.driver
                .actions()
                .mouseMove(container[0], { x: 5, y: 5 })
                .click()
                .perform();
            await nemo.driver.switchTo().defaultContent();
            await nemo.driver.sleep(5000);
        },

        async closeezpaybanner() {
            await this.viewezpaybanner();
            const iframeElement = await nemo.view._finds(selectors.iframe);
            await nemo.view._waitVisible(selectors.iframe);
            await nemo.driver.switchTo().frame(iframeElement[0]);
            await nemo.view._waitVisible(selectors.ezcloseban);
            await nemo.view._find(selectors.ezcloseban).click();
            await nemo.driver.switchTo().defaultContent();
            await nemo.driver.sleep(5000);
        },
        async ezpaycollectiveEntry() {
            await this.viewezpaybanner();
            await this.checkEzpayPage();
            await this.calculateamount();
            await this.checkmonthlypaymentsafterCalculate();
            await this.checktotalintrestafterCalculate();
            await this.clearamount();
            await this.canOpenCloseEzpayAccordion();
            await this.canOpenClosePromotionAccordion();
            await this.canChangeTabs();
            await this.closesOnEscKey();
            await this.closesOnOverlayClick();
            await this.closeezpaybanner();
        }
    };
};
