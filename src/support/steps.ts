import {
  Builder, By, Capabilities, Key, until, WebDriver
} from 'selenium-webdriver';
import { Given, When, Then, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';

import { click, getDriver, findElement, findText, sleep, typeInField } from './helpers';

setDefaultTimeout(300 * 1000);

Given('{string} opens page {string}', async function (user: string, url: string) {
  // Write code here that turns the phrase above into concrete actions
  const driver = await getDriver(user);
  await driver.get(url);
  await driver.sleep(1000);
});

Then('{string} waits {int} seconds', async function (user: string, timeout: number) {
  const driver = await getDriver(user);
  return await sleep(driver, timeout);
});

Then('{string} should see element with title {string}', async function (user: string, elementTitle: string) {
  const driver = await getDriver(user);
  const el = await findElement(driver, elementTitle, 'title');
  expect(el).not.to.equal(null);
});

Then('{string} should see text {string}', async function (user: string, textValue: string) {
  const driver = await getDriver(user);
  const el = await findText(driver, textValue);
  expect(el).to.not.equal(null);
});

Then('{string} types {string} in element with title {string}', async function (user: string, value: string, elementTitle: string) {
  const driver = await getDriver(user);
  const el = await typeInField(driver, elementTitle, value, 'title');
  expect(el).not.to.equal(null);
});


Then('{string} clicks on element with value {string} in attribute {string}', async function (user: string, attributeValue: string, attributeName: string) {
  const driver = await getDriver(user);
  const el = await findElement(driver, attributeValue, attributeName);
  expect(el).not.to.equal(null);
  await el.click();
});
