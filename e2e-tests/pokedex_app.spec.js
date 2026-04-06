// eslint-disable-next-line no-unused-vars, no-undef
const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('can navigate to page of specific pokemon', async ({ page }) => {
    await page.goto('/pokemon/wartortle')
    await expect(page.getByText('wartortle')).toBeVisible()
    await expect(page.getByText('torrent')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})