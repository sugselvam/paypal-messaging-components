const selectors = {
    ezpayopen: '.message__content',
    ezcloseban: '#close-btn',
    iframe: 'xpath://div[contains(@style,"display: block")]//iframe',
    ezpaytextbox: '.calculator__input',
    ezpaycalculate: '.calculator__btn'
};

exports.ezpayentrypage = function(nemo) {
    return {
        async viewezpaybanner() {
            await nemo.driver.switchTo().frame(0);
            await nemo.view._waitVisible(selectors.ezpayopen);
            await nemo.view._find(selectors.ezpayopen).click();
            await nemo.driver.sleep(5000);
            await nemo.driver.switchTo().defaultContent();
        },
        async calculateamount() {
            const iframeElement = await nemo.view._finds(selectors.iframe);
            await nemo.driver.switchTo().frame(iframeElement[0]);
            await nemo.view._waitVisible(selectors.ezpaytextbox);
            await nemo.view._find(selectors.ezpaytextbox).sendKeys(300);
            await nemo.view._find(selectors.ezpaycalculate).click();
            await nemo.driver.sleep(5000);
            await nemo.view._find(selectors.ezpaytextbox).clear();
            await nemo.view._find(selectors.ezpaycalculate).click();
            await nemo.driver.switchTo().defaultContent();
            await nemo.driver.sleep(5000);
        },
        async closesOnEscKey() {
            const iframeElement = await nemo.view._finds(selectors.iframe);
            await nemo.driver.switchTo().frame(iframeElement[0]);
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
            await nemo.driver.switchTo().frame(iframeElement[0]);
            const container = await nemo.view._finds('xpath://section[@id="modal-container"]');
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
            await nemo.driver.switchTo().frame(iframeElement[0]);
            await nemo.view._waitVisible(selectors.ezcloseban);
            await nemo.view._find(selectors.ezcloseban).click();
            await nemo.driver.switchTo().defaultContent();
            await nemo.driver.sleep(5000);
        },
        async ezpaycollectiveEntry() {
            await this.viewezpaybanner();
            await this.calculateamount();
            await this.closesOnEscKey();
            await this.closesOnOverlayClick();
            await this.closeezpaybanner();
        }
    };
};
