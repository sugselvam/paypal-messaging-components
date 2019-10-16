const selectors = {
    ezpayopen: "xpath://div[@id='EZ']"
};

exports.entrypage = function(nemo) {
    return {
        async viewezpaybanner() {
            await nemo.view._waitVisible(selectors.ezpayopen);
            await nemo.view._find(selectors.ezpayopen).click();
        },
        async collectiveEntry() {
            await this.viewezpaybanner();
        }
    };
};
