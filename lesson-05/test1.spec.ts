import { test } from "@playwright/test";

test("Register Page", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");

    await test.step("click Bai hoc 1 Register Page”", async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    });

    await test.step("Nhap ten user", async () => {
        await page.locator("//input[@id='username']").fill('Tam Nhan');
    });

    await test.step("Nhap email", async () => {
        await page.locator("//input[@id='email']").fill('test123@gmail.com');
    });

    await test.step("Chon radio Female", async () => {
        await page.locator("//input[@id='female']").check();
    });

    await test.step("Chon checkbox Traveling", async () => {
        await page.locator("//input[@id='traveling']").check();
    });

    await test.step("Chon option Sports", async () => {
        const selectBox = "//select[@id='interests']";
        await page.locator(selectBox).selectOption({ value: 'sports' });
    });

    await test.step("Chon contry Canada", async () => {
        await page.locator("//select[@id='country']").selectOption('canada');
    });

    //  await test.step("Chon contry Canada", async () => {
    //     const selectPulldown = "//select[@id='country']";
    //     await page.locator(selectPulldown).selectOption({ value: 'canada' });
    // });

    // await test.step("Chon dd/mm/yy ", async () => {
    //     const fillBirthday = "//input[@id='dob']";
    //     await page.locator(fillBirthday).fill('1998-05-14');
    // });

    await test.step("Chon dd/mm/yy ", async () => {
        await page.locator("//input[@id='dob']").fill('1998-05-14');
    });
    // Sai
    // await test.step("upload file ", async () => {
    //     await page.locator("//input[@id='profile']").setInputFiles('tests\lesson-05\file1.txt');
    // });

      await test.step("Nhap bio", async () => {
        await page.locator("//textarea[@id='bio']").fill('test 123');
    });

     await test.step("click button Register", async () => {
        await page.locator("//button[@type='submit']").click();
    });
});