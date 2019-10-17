const homepage = require('../../pages/bannertest');

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
        await homepage.entrypage(nemo).collectiveEntry({});
        await nemo.driver.sleep(5000);
    });
});
