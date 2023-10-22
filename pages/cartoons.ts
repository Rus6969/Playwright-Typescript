import {Page,expect} from "@playwright/test"

export default class Cartoons{
    constructor(public page:Page){

    }

    async findShrek(){
        await this.page.goto('https://hdrezka.website/');
  await this.page.locator('#topnav-menu').getByRole('link', { name: 'Мультфильмы', exact: true }).click();
  await this.page.locator('#search-field').click();
  await this.page.locator('#search-field').fill('shrek');
  await this. page.keyboard.press('Enter');
  

    }


  

}