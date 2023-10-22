import {Page,expect} from "@playwright/test"

export default class Movies{
    constructor(public page:Page){

    }


  async findForest(){

     await this.page.goto('https://hdrezka.website/');
    await this.page.locator('#topnav-menu').getByRole('link', { name: 'Фильмы', exact: true }).click();
    await this.page.getByRole('link', { name: 'Популярные' }).click();
    await this.page.getByRole('link', { name: 'Форрест Гамп', exact: true }).click();
    await this.page.getByText('Forrest Gump').click();
} 

// async findMatrix(){

//     await this.page.goto('https://hdrezka.website/');
//     await this.page.locator('#topnav-menu').getByRole('link', { name: 'Фильмы', exact: true }).click();
//     await this.page.getByRole('link', { name: 'Популярные' }).click();
//     await this.page.getByRole('link', { name: 'Матрица', exact: true }).click();
   
// } 

// }


}
