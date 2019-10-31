const selectors = {
    ezpayopen: '.message__content',
    // ezpayclose: 'xpath://html/body/section[@data-pp-modal="ezp"]/div/div/div[1]/div/div/header/button',
    ezcloseban: '.close',
    iframe: 'xpath://div[contains(@style,"display: block")]//iframe'
};

exports.ezpayentrypage = function(nemo) {
    return {
        async viewezpaybanner() {
            await nemo.driver.switchTo().frame(0);
            await nemo.view._waitVisible(selectors.ezpayopen);
            await nemo.view._find(selectors.ezpayopen).click();
            await nemo.driver.sleep(5000);
            await nemo.driver.switchTo().defaultContent();
            const iframe = await nemo.view._finds('xpath://iframe');
            await console.log('iframe', iframe.length);
        },
        async closeezpaybanner() {
            const iframeElement = await nemo.view._finds('xpath://div[contains(@style,"display: block")]//iframe');
            await console.log('divframe', iframeElement.length);
            await nemo.view._waitVisible(selectors.iframe);
            await nemo.driver.switchTo().frame(iframeElement[0]);
            // await nemo.view._waitVisible(selectors.ezcloseban);
            // await nemo.view._find(selectors.ezcloseban).click();
            await nemo.driver.sleep(5000);
        },
        async ezpaycollectiveEntry() {
            await this.viewezpaybanner();
            await this.closeezpaybanner();
        }
    };
};
