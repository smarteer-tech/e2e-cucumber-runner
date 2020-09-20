import {
  WebDriver, WebElement
} from 'selenium-webdriver';

export function getDriver(): Promise<WebDriver>;
export function findElement(): Promise<WebElement>;
