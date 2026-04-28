export interface TestimonialItem {
    text: string;
    name: string;
    role: string;
    image: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        name: "Jonny Thomas",
        role: "Project Manager",
        image: "/image/person1.jpg",
    },
    {
        text: "The coffee here is absolutely incredible. Every morning I come in and the baristas know exactly what I need. The atmosphere is warm, the beans are fresh, and the service is unmatched anywhere in the city.",
        name: "Sarah Mitchell",
        role: "Graphic Designer",
        image: "/image/person2.jpg",
    },
    {
        text: "Bean Scene changed my morning routine completely. I used to dread waking up early but now I look forward to every single cup. The quality and consistency is something truly special.",
        name: "Marcus Rivera",
        role: "Software Engineer",
        image: "/image/person3.jpg",
    },
    {
        text: "The coffee here is absolutely incredible. Every morning I come in and the baristas know exactly what I need. The atmosphere is warm, the beans are fresh, and the service is unmatched anywhere in the city.",
        name: "Smith Moore",
        role: "Graphic Designer",
        image: "/image/person4.jpg",
    },
];

export const SPLASH_POSITIONS = [
    { top: -150, right: -250, left: "unset", bottom: "unset", transform: "scaleX(-1) scaleY(-1)" },
    { top: "unset", right: "unset", left: -250, bottom: -150, transform: "scaleX(1) scaleY(1)" },
    { top: -150, right: -250, left: "unset", bottom: "unset", transform: "scaleX(-1) scaleY(-1)" },
    { top: "unset", right: "unset", left: -250, bottom: -150, transform: "scaleX(1) scaleY(1)" },
];