export interface CoffeeItem {
    image: string;
    name: string;
    description: string;
    price: string;
}

export const COFFEES: CoffeeItem[] = [
    {
        image: "/image/CoffeeTeaImg1.jpg",
        name: "Cappuccino",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        image: "/image/CoffeeTeaImg2.jpg",
        name: "Chai Latte",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        image: "/image/CoffeeTeaImg3.jpg",
        name: "Macchiato",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        image: "/image/CoffeeTeaImg4.jpg",
        name: "Expresso",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
];