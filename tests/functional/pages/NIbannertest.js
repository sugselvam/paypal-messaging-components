const selectors = {
    NIopen: '.message__content',
    NIclose: '#close-btn',
    iframe: 'xpath://div[contains(@style,"display: block")]//iframe'
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
        async closeNIbanner() {
            const iframeElement = await nemo.view._finds('xpath://div[contains(@style,"display: block")]//iframe');
            await console.log('divframe', iframeElement.length);
            await nemo.view._waitVisible(selectors.iframe);
            await nemo.driver.switchTo().frame(iframeElement[0]);
            await nemo.view._waitVisible(selectors.NIclose);
            await nemo.view._find(selectors.NIclose).click();
            await nemo.driver.sleep(5000);
        },
        async NIcollectiveEntry() {
            await this.viewNIbanner();
            await this.closeNIbanner();
        }
    };
};
