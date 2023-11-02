import {test}from "@playwright/test"
import Movies from "../pages/movies"
import Cartoons from "../pages/cartoons";
import Anime from "../pages/anime";

test("me as use can find Forest Gum mobie under one of thr popular test 01",async({page,baseURL})=>{
  const find1 = new Movies(page);

  await find1.findForest();

})



test("me as use can find Cartoon Shrek test 02",async({page,baseURL})=>{

    const find2 = new Cartoons(page);
    await find2.findShrek();
 
  })



  test("find the best anime in univers 01",async({page,baseURL})=>{
    const find3 = new Anime(page);
    await find3.findNaruto();


  })

