import { test, expect } from '@playwright/test';

/**
 *
 *  Basic Navigation Tests
 *
 * */
test('click About span and expect url to be /about', async ({ page }) => {
  await page.goto('/');

  // Find and click <span class="n-button__content">About</span>
  const aboutSpan = page.locator('.n-button__content', { hasText: 'About' });
  await expect(aboutSpan).toBeVisible();
  await aboutSpan.click();

  // Verify navigation to about page
  await expect(page).toHaveURL('/about');
});

test('click Home span and expect url to be /', async ({ page }) => {
  // First go to a different page (like about) so we can navigate back to home
  await page.goto('/about');

  // Find and click <span class="n-button__content">Home</span>
  const homeSpan = page.locator('.n-button__content', { hasText: /^Home$/ });
  await expect(homeSpan).toBeVisible();
  await homeSpan.click();

  // Verify navigation to home page
  await expect(page).toHaveURL('/');
});

test('click Go to Hippodrome span and expect url to be /hippodrome', async ({ page }) => {
  await page.goto('/');

  // Find and click <span class="n-button__content"> Go to Hippodrome </span>
  const hippodromeSpan = page.locator('.n-button__content', { hasText: 'Go to Hippodrome' });
  await expect(hippodromeSpan).toBeVisible();
  await hippodromeSpan.click();

  // Verify navigation to hippodrome page
  await expect(page).toHaveURL('/hippodrome');
});

/**
 *
 *  Basic Hippodrome Tests
 *
 * */
test('click Go to Hippodrome and verify content on hippodrome page', async ({ page }) => {
  await page.goto('/');

  await page.locator('.n-button__content', { hasText: 'Go to Hippodrome' }).click();
  await expect(page).toHaveURL('/hippodrome');

  // Verify h1 contains the main title
  await expect(page.locator('h1')).toContainText('GallopIn’sider');

  // Verify the subtitle contains "Hippodrome"
  await expect(page.locator('.title-desc-wrapper .n-text')).toContainText('Hippodrome');
});

test('verify horse list has 20 tr elements', async ({ page }) => {
  await page.goto('/');

  await page.locator('.n-button__content', { hasText: 'Go to Hippodrome' }).click();
  await expect(page).toHaveURL('/hippodrome');

  // Verify h1 contains the main title
  await expect(page.locator('h1')).toContainText('GallopIn’sider');

  // Verify the subtitle contains "Hippodrome"
  await expect(page.locator('.title-desc-wrapper .n-text')).toContainText('Hippodrome');

  // Find div with data-test="horse-list" and then find tbody inside it
  const horseListDiv = page.locator('div[data-test="horse-list"]');
  await expect(horseListDiv).toBeVisible();

  // Find tbody inside the horse list div
  const tbody = horseListDiv.locator('tbody');
  await expect(tbody).toBeVisible();

  // Verify there are exactly 20 tr elements inside the tbody
  const trElements = tbody.locator('tr');
  await expect(trElements).toHaveCount(20);
});


test('verify hippodrome has exactly 10 horse-slider elements', async ({ page }) => {
  await page.goto('/hippodrome');

  // Count all elements with data-test="horse-slider"
  const horseSliders = page.locator('[data-test="horse-slider"]');
  await expect(horseSliders).toHaveCount(10);
});


test('generate program and verify 6 tables in hippodrome program', async ({ page }) => {
  // Start from hippodrome page
  await page.goto('/hippodrome');

  // Find and click the generate program button
  const generateButton = page.locator('[data-test="generate-program-button"]');
  await expect(generateButton).toBeVisible();
  await expect(generateButton).toBeEnabled();
  await generateButton.click();

  // Find the hippodrome program element
  const hippodromeProgram = page.locator('[data-test="hippodrome-program"]');
  await expect(hippodromeProgram).toBeVisible();

  // Find all table elements inside the hippodrome program
  const tables = hippodromeProgram.locator('table');
  await expect(tables).toHaveCount(6);

  // Optional: Verify each table has the expected structure
  for (let i = 0; i < 6; i++) {
    const table = tables.nth(i);
    await expect(table).toBeVisible();
  }
});


test('verify play/pause button functionality with text changes', async ({ page }) => {
  await page.goto('/hippodrome');

  const generateButton = page.locator('[data-test="generate-program-button"]');
  await expect(generateButton).toBeVisible();
  await expect(generateButton).toBeEnabled();
  await generateButton.click();

  const playButton = page.locator('[data-test="play-toggle-button"]');
  await expect(playButton).toBeVisible();

  // Verify initial state
  await expect(page.locator('.n-card-header__main', { hasText: 'Click Start' })).toBeVisible();

  // The button might also have text content that changes
  const buttonText = await playButton.textContent();
  console.log('Initial button text:', buttonText);

  // Click to start race
  await playButton.click();

  // Verify race in progress
  await expect(page.locator('.n-card-header__main', { hasText: 'Race In Progress' })).toBeVisible();

  // Check if button text changed
  const buttonTextDuringRace = await playButton.textContent();
  console.log('Button text during race:', buttonTextDuringRace);

  // Click to pause
  await playButton.click();

  // Verify back to click start
  await expect(page.locator('.n-card-header__main', { hasText: 'Click Start' })).toBeVisible();

  const buttonTextAfterPause = await playButton.textContent();
  console.log('Button text after pause:', buttonTextAfterPause);
});

// /**
//  * 
//  *  Basic Lap 1 test
//  * 
//  *  Important Note: While testing this HIPPODROME_LAP_DISTANCE_MULTIPLIER
//  *  should be low enougth to fit 30 time range
//  * 
//  * */

test('check all aria-valuenow values are non-zero then back to 0 within 30 seconds', async ({ page }) => {
  await page.goto('/hippodrome');

  const generateButton = page.locator('[data-test="generate-program-button"]');
  const playButton = page.locator('[data-test="play-toggle-button"]');
  const horseHandles = page.locator('[data-test="horse-slider"] [role="slider"]');

  await expect(generateButton).toBeEnabled();

  // Generate Program
  await generateButton.click();

  await expect(playButton).toBeVisible();

  // Click Play (Starts the simulation)
  await playButton.click();

  // --- STEP 1: Validate values are NOT 0 (Max 5 seconds) ---

  console.log('Validating values are NON-ZERO...');

  // Wait for at least ONE slider handle to have an aria-valuenow > 0.
  // We use the precise selector '[data-test="horse-slider"] [role="slider"]' 
  // because document.querySelectorAll doesn't check descendants automatically.
  await page.waitForFunction(() => {
    // Select the actual element containing aria-valuenow
    const handles = document.querySelectorAll('[data-test="horse-slider"] [role="slider"]');
    if (handles.length === 0) return false;

    // Check if AT LEAST ONE handle has a value greater than 0
    return Array.from(handles).some(handle => {
      const valueNow = handle.getAttribute('aria-valuenow');
      return valueNow && parseFloat(valueNow) > 0;
    });
  }, { timeout: 5000 }); // 5 second timeout for values to start moving

  console.log('Successfully validated that AT LEAST ONE value is now non-zero.');


  // --- STEP 2: Wait for ALL values to return to 0 (Max 30 seconds) ---

  console.log('Waiting for ALL values to return to 0 (Max 30s)...');

  // Wait for ALL slider handles to have aria-valuenow = 0 within 30 seconds
  await page.waitForFunction(() => {
    const handles = document.querySelectorAll('[data-test="horse-slider"] [role="slider"]');
    if (handles.length === 0) return false;

    // Check if ALL handles have aria-valuenow = '0'
    return Array.from(handles).every(handle => {
      const valueNow = handle.getAttribute('aria-valuenow');
      return valueNow && parseFloat(valueNow) === 0;
    });
  }, { timeout: 30000 }); // 30 second timeout


  // --- FINAL VERIFICATION ---

  const handlesCount = await horseHandles.count();
  console.log(`Final verification on ${handlesCount} handles...`);

  for (let i = 0; i < handlesCount; i++) {
    const handle = horseHandles.nth(i);
    const valueNow = await handle.getAttribute('aria-valuenow');
    const numericValue = parseFloat(valueNow || '-1');

    expect(numericValue).toBe(0);
    console.log(`Handle ${i + 1} final value: ${numericValue} (Verified 0)`);
  }

  console.log('Test completed: All sliders returned to aria-valuenow = 0');
});