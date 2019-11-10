const selectors = {
    NIopen: '.message__content',
    NIclose: '#close-btn',
    iframe: 'xpath://div[contains(@style,"display: block")]//iframe',
    NIaccordion: 'xpath://section[@id="ni-content"]/div[2]/h3',
    PayovertimeAccordion: 'xpath://section[@id = "ni-content"]/div[4]/h3',
    PaypalCreditAccordian: 'xpath://section[@id="ni-content"]/div[6]/h3',
    NIdiv: 'xpath://div[@data-pp-id="3"]'
};

exports.NIentrypage = function(nemo) {
    return {
        async viewNIbanner() {
            await nemo.driver.switchTo().frame(1);
            await nemo.view._waitVisible(selectors.NIopen);
            await nemo.view._find(selectors.NIopen).click();
            await nemo.driver.switchTo().defaultContent();
            await nemo.driver.sleep(5000);
        },

        async canOpenCloseNIAccordion() {
            const iframeElement = await nemo.view._finds(selectors.iframe);
            await nemo.view._waitVisible(selectors.iframe);
            await nemo.driver.switchTo().frame(iframeElement[0]);
            await nemo.view._waitVisible(selectors.NIaccordion);
            await nemo.view._find(selectors.NIaccordion).click();
            const NIaccordion1 = await nemo.view._finds(selectors.NIaccordion);
            await nemo.driver.sleep(5000);
            await nemo.driver
                .actions()
                .mouseMove(NIaccordion1[0], { x: 5, y: 5 })
                .click()
                .perform();
            await nemo.driver.sleep(5000);
        },

        async canOpenClosePayovertimeAccordion() {
            await nemo.view._waitVisible(selectors.PayovertimeAccordion);
            await nemo.view._find(selectors.PayovertimeAccordion).click();
            const NIaccordion2 = await nemo.view._finds(selectors.PayovertimeAccordion);
            await nemo.driver.sleep(5000);
            await nemo.driver
                .actions()
                .mouseMove(NIaccordion2[0], { x: 5, y: 5 })
                .click()
                .perform();
            await nemo.driver.sleep(5000);
        },
        async canOpenClosePaypalCreditAccordion() {
            await nemo.view._waitVisible(selectors.PaypalCreditAccordian);
            await nemo.view._find(selectors.PaypalCreditAccordian).click();
            const NIaccordion3 = await nemo.view._finds(selectors.PaypalCreditAccordian);
            await nemo.driver.sleep(5000);
            await nemo.driver
                .actions()
                .mouseMove(NIaccordion3[0], { x: 5, y: 5 })
                .click()
                .perform();
            await nemo.driver.switchTo().defaultContent();
            await nemo.driver.sleep(5000);
        },
        async closeNIbanner() {
            const iframeElement = await nemo.view._finds(selectors.iframe);
            await nemo.view._waitVisible(selectors.iframe);
            await nemo.driver.switchTo().frame(iframeElement[0]);
            await nemo.view._waitVisible(selectors.NIclose);
            await nemo.view._find(selectors.NIclose).click();
            await nemo.driver.switchTo().defaultContent();
            await nemo.driver.sleep(5000);
        },

        async canReopenNIBanner() {
            const NIstyle = await nemo.view._find(selectors.NIdiv).getAttribute('style');
            const NIdisplaystyle = await NIstyle.split(';');
            if (NIdisplaystyle[0] === 'display: none') {
                await this.viewNIbanner();
                await this.closeNIbanner();
            }
        },
        async NIcollectiveEntry() {
            await this.viewNIbanner();
            await this.canOpenCloseNIAccordion();
            await this.canOpenClosePayovertimeAccordion();
            await this.canOpenClosePaypalCreditAccordion();
            await this.closeNIbanner();
            await this.canReopenNIBanner();
        }
    };
};
