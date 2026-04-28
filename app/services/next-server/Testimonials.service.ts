import { ServicesCoffee } from "./config";

export const getListTestimonials = async () => {
    const getResponse = await ServicesCoffee.get("/api/testimonials");
    return getResponse;
};