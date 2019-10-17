const selectors = {
    ezpayIframe: 'xpath:/html/body/div[1]/div[1]/span/iframe',
    ezpayopen: "xpath://div[@class= 'message__content']"
};

exports.entrypage = function(nemo) {
    return {
        async viewezpaybanner() {
            await nemo.driver.switchTo().frame(0);
            await nemo.view._waitVisible(selectors.ezpayopen);
            await nemo.view._find(selectors.ezpayopen).click();
            await nemo.driver.sleep(5000);
        },
        async collectiveEntry() {
            await this.viewezpaybanner();
        }
    };
};
