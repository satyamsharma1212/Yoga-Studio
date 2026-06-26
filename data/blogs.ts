export type Blog = {
  slug: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  category: string;
  content: string[];
};

export const blogs: Blog[] = [
  {
    slug: "benefits-of-hatha-yoga",

    title: "10 Benefits of Hatha Yoga for Beginners",

    description:
      "Discover how Hatha Yoga improves flexibility, posture, breathing and mental wellness.",

    image: "/images/blogs/hatha.jpg",

    author: "Yoga Studio Agra",

    date: "June 26, 2026",

    category: "Hatha Yoga",

    content: [
      "Hatha Yoga is one of the oldest forms of yoga that combines physical postures, breathing techniques, and meditation.",

      "Practicing Hatha Yoga regularly helps improve flexibility, strengthen muscles, enhance posture, and reduce stress.",

      "It is suitable for beginners because it focuses on slow movements and proper breathing techniques.",

      "Daily yoga practice also improves concentration, sleep quality, and overall mental wellness.",
    ],
  },
];  