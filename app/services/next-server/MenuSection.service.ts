import { ServicesCoffee } from "./config"

export const getListMenuCoffee = async () =>{
    const getResponse = await ServicesCoffee.get("/api/menu-coffee")
/*     console.log(getResponse); */
    return getResponse;
}