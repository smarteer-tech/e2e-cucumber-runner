"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const chai_1 = require("chai");
const helpers_1 = require("./helpers");
cucumber_1.setDefaultTimeout(300 * 1000);
cucumber_1.Given('{string} opens page {string}', async function (user, url) {
    // Write code here that turns the phrase above into concrete actions
    const driver = await helpers_1.getDriver(user);
    await driver.get(url);
    await driver.sleep(1000);
});
cucumber_1.Then('{string} waits {int} seconds', async function (user, timeout) {
    const driver = await helpers_1.getDriver(user);
    return await helpers_1.sleep(driver, timeout);
});
cucumber_1.Then('{string} should see element with title {string}', async function (user, elementTitle) {
    const driver = await helpers_1.getDriver(user);
    const el = await helpers_1.findElement(driver, elementTitle, 'title');
    chai_1.expect(el).not.to.equal(null);
});
cucumber_1.Then('{string} should see text {string}', async function (user, textValue) {
    const driver = await helpers_1.getDriver(user);
    const el = await helpers_1.findText(driver, textValue);
    chai_1.expect(el).to.not.equal(null);
});
cucumber_1.Then('{string} types {string} in element with title {string}', async function (user, value, elementTitle) {
    const driver = await helpers_1.getDriver(user);
    const el = await helpers_1.typeInField(driver, elementTitle, value, 'title');
    chai_1.expect(el).not.to.equal(null);
});
cucumber_1.Then('{string} clicks on element with value {string} in attribute {string}', async function (user, attributeValue, attributeName) {
    const driver = await helpers_1.getDriver(user);
    const el = await helpers_1.findElement(driver, attributeValue, attributeName);
    chai_1.expect(el).not.to.equal(null);
    await el.click();
});
//# sourceMappingURL=steps.js.map