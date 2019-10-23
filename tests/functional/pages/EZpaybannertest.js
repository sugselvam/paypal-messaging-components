const selectors = {
    ezpayopen: "xpath://div[@class= 'message__content']",
    ezpayclose: "xpath:/html/body/section[@data-pp-modal='ezp']/div/div/div[1]/div/div/header/button",
    ezpaytextbox: "xpath://input[@id ='number-input']",
    ezpaycalculate: "xpath://button[@id ='calculate-ezp']"
};

exports.ezpayentrypage = function(nemo) {
    return {
        async viewezpaybanner() {
            await nemo.driver.switchTo().frame(0);
            await nemo.view._waitVisible(selectors.ezpayopen);
            await nemo.view._find(selectors.ezpayopen).click();
            await nemo.driver.sleep(5000);
        },
        async closeezpaybanner() {
            await nemo.view._waitVisible(selectors.ezpayclose);
            await nemo.view._find(selectors.ezpayclose).click();
            await nemo.driver.sleep(5000);
        },
        async ezpaycollectiveEntry() {
            await this.viewezpaybanner();
            await this.closeezpaybanner();
        }
    };
};
