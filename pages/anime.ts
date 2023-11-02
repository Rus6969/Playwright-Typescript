import {Page,expect} from "@playwright/test"



export default class Anime{
    constructor(public page:Page){

    }

    async findNaruto(){
        await this.page.goto("https://hdrezka.website/");
        await this.page.locator("#search-field").fill("Naruto");
        await this.page.keyboard.press('Enter');
        await this.page.getByRole('link', { name: 'Наруто [ТВ-1]', exact: true }).click();
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: 'Narutoscreenshot.png', fullPage: true });
        


    }

}