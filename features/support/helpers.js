"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findText = exports.click = exports.typeInField = exports.sleep = exports.findElement = exports.getDriver = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = __importDefault(require("selenium-webdriver/chrome"));
const drivers = {};
async function getDriver(user) {
    if (user && drivers[user]) {
        return drivers[user];
    }
    let browser = 'chrome';
    let options = await new chrome_1.default.Options()
        .addArguments('allow-file-access-from-files')
        .addArguments('use-fake-device-for-media-stream')
        .addArguments('use-fake-ui-for-media-stream');
    let capabilities = selenium_webdriver_1.Capabilities.chrome();
    const driver = await new selenium_webdriver_1.Builder()
        .forBrowser(browser)
        .setChromeOptions(options)
        .withCapabilities(capabilities).build();
    console.log(`Steps.initDriver(): driver: `, driver);
    drivers[user] = driver;
    return driver;
}
exports.getDriver = getDriver;
async function findElement(driver, elemId, fieldname = 'accessibilityid', xpath = '') {
    if (!xpath) {
        // if not getting by xpath directly
        xpath = '//*[@' + fieldname + '="' + elemId + '"]';
    }
    return await driver.findElement(selenium_webdriver_1.By.xpath(xpath));
}
exports.findElement = findElement;
async function sleep(driver, timeout) {
    await driver.sleep(timeout * 1000);
}
exports.sleep = sleep;
async function typeInField(driver, elemId, value, fieldname = 'accessibilityid') {
    const el = await findElement(driver, elemId, fieldname);
    await el.clear();
    await el.sendKeys(value);
}
exports.typeInField = typeInField;
async function click(driver, elemId, fieldname = 'accessibilityid') {
    const el = await findElement(driver, elemId, fieldname);
    await el.click();
}
exports.click = click;
async function findText(driver, value) {
    let el = await driver.findElement(selenium_webdriver_1.By.xpath("//*[contains(text(),'" + value + "')]"));
    return el;
}
exports.findText = findText;
//# sourceMappingURL=helpers.js.map