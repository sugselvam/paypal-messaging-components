const selectors = {
    ezpayopen: "xpath://div[@class= 'message__content']",
    ezpayclose: "xpath:/html/body/section[@class='modal__container show']/div/div/div[1]/div/div/header/button",
    NIopen: "xpath://div[@class= 'message__content']"
};

exports.entrypage = function(nemo) {
    return {
        async viewezpaybanner() {
            await nemo.driver.switchTo().frame(0);
            await nemo.view._waitVisible(selectors.ezpayopen);
            await nemo.view._find(selectors.ezpayopen).click();
            await nemo.driver.sleep(5000);
        },
        /* async closeezpaybanner()
        {   
            await nemo.view._waitVisible(selectors.ezpayclose);
            await nemo.view._find(selectors.ezpayclose).click();
            await nemo.driver.sleep(5000);
        }, */
        async viewNIbanner() {
            await nemo.driver.switchTo().frame(1);
            await nemo.view._waitVisible(selectors.NIopen);
            await nemo.view._find(selectors.NIopen).click();
            await nemo.driver.sleep(5000);
        },
        async collectiveEntry() {
            await this.viewezpaybanner();
            // await this.closeezpaybanner();
            await this.viewNIbanner();
        }
    };
};
