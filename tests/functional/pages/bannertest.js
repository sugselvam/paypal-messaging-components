const selectors = {
    ezpay: "xpath://div[@id='EZ']"
};

exports.entrypage = function(nemo) {
    return {
        async viewezpaybanner() {
            await nemo.view._waitVisible(selectors.ezpay);
            await nemo.view._find(selectors.ezpay).click();
        },
        async collectiveEntry() {
            await this.viewezpaybanner();
        }
    };
};
