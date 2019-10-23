const selectors = {
    NIopen: '.message__content',
    NIclose: '#close-btn'
};

exports.NIentrypage = function(nemo) {
    return {
        async viewNIbanner() {
            await nemo.driver.switchTo().frame(1);
            await nemo.view._waitVisible(selectors.NIopen);
            await nemo.view._find(selectors.NIopen).click();
            await nemo.driver.sleep(5000);
        },
        async closeNIbanner() {
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
