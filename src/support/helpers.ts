import {
  Builder, By, Capabilities, Key, until, WebDriver, WebElement
} from 'selenium-webdriver';
import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import Chrome from 'selenium-webdriver/chrome';

const drivers: any = {};

export async function getDriver(user: string): Promise<WebDriver> {
  if (user && drivers[user]) {
    return drivers[user];
  }
  let browser = 'chrome';
  let options = await new Chrome.Options()
    .addArguments('allow-file-access-from-files')
    .addArguments('use-fake-device-for-media-stream')
    .addArguments('use-fake-ui-for-media-stream');
  let capabilities = Capabilities.chrome();
  const driver = await new Builder()
    .forBrowser(browser)
    .setChromeOptions(options)
    .withCapabilities(capabilities).build();
  console.log(`Steps.initDriver(): driver: `, driver);
  drivers[user] = driver;
  return driver;
}


export async function findElement(driver: WebDriver, elemId: string, fieldname = 'accessibilityid', xpath = ''): Promise<WebElement> {
  if (!xpath) {
    // if not getting by xpath directly
    xpath = '//*[@' + fieldname + '="' + elemId + '"]';
  }
  return await driver.findElement(By.xpath(xpath));
}

export async function sleep(driver: WebDriver, timeout: number) {
  await driver.sleep(timeout * 1000);
}

export async function typeInField(driver: WebDriver, elemId: string, value: string, fieldname = 'accessibilityid') {
  const el = await findElement(driver, elemId, fieldname);
  await el.clear();
  await el.sendKeys(value);
}

export async function click(driver: WebDriver, elemId: string, fieldname = 'accessibilityid') {
  const el = await findElement(driver, elemId, fieldname);
  await el.click();
}

export async function findText(driver: WebDriver, value: string) {
  let el = await driver.findElement(By.xpath("//*[contains(text(),'" + value + "')]"));
  return el;
}
