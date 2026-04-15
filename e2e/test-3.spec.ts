import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('https://devlbc.juvomos.com/login');    
  await page.getByRole('textbox', { name: 'Email address' }).fill('aperez@juvomos.com');  
  await page.getByRole('textbox', { name: 'Password' }).fill('Assafsapg411973*');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('banner').getByText('A', { exact: true })).toBeVisible();
  
});