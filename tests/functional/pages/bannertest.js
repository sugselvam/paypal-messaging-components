const selectors = {
    ezpayopen: "xpath://span/span[text()='Pay over 3 months']"
};

exports.entrypage = function(nemo) {
    return {
        async viewezpaybanner() {
            await nemo.view._waitVisible(selectors.ezpayopen);
            await nemo.view._find(selectors.ezpay).click();
        },
        async collectiveEntry() {
            await this.viewezpaybanner();
        }
    };
};
