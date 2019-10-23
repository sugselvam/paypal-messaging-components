const ezpaybanner = require('../../pages/EZpaybannertest');
const nibanner = require('../../pages/NIbannertest');

describe('bannertest', () => {
    it('Ezpaybanner', async function() {
        const { nemo } = this;
        await nemo.driver.sleep(5000);
        await nemo.driver.get(nemo.data.baseurl);
        await nemo.driver.sleep(5000);
        await nemo.driver
            .manage()
            .window()
            .maximize();
        await nemo.driver.sleep(5000);
        await ezpaybanner.ezpayentrypage(nemo).ezpaycollectiveEntry({});
        await nibanner.NIentrypage(nemo).NIcollectiveEntry({});
        await nemo.driver.sleep(5000);
    });
});
