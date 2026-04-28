import { ServicesCoffee } from "./config";

export const getListFeatures = async () => {
    const getResponse = await ServicesCoffee.get("/api/why-section");
    return getResponse;
};