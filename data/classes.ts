export type YogaClass = {
  slug: string;
  title: string;

  shortDescription: string;

  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  heroImage: string;

  duration: string;
  level: string;
  schedule: string;

  benefits: string[];

  content: {
    heading: string;
    paragraphs: string[];
  };

  faqs: {
    question: string;
    answer: string;
  }[];
};

export const yogaClasses: YogaClass[] = [
  {
    slug: "hatha-yoga",

    title: "Hatha Yoga",

    shortDescription:
      "Traditional yoga classes designed to improve flexibility, posture, breathing, and overall wellness.",

    metaTitle:
      "Hatha Yoga Classes in Agra | Beginner Friendly Yoga Studio",

    metaDescription:
      "Join Hatha Yoga classes in Agra with certified yoga instructors. Improve flexibility, posture, breathing, and overall health through traditional yoga practices.",

    keywords: [
      "Hatha Yoga Agra",
      "Yoga Classes in Agra",
      "Best Yoga Studio Agra",
      "Beginner Yoga",
      "Traditional Yoga",
    ],

    heroImage: "/images/classes/hatha.jpg",

    duration: "60 Minutes",

    level: "Beginner to Intermediate",

    schedule: "Monday - Saturday | 6:00 AM - 7:00 AM",

    benefits: [
      "Improve Flexibility",
      "Reduce Stress",
      "Increase Energy",
      "Improve Breathing",
      "Better Posture",
      "Mental Wellness",
    ],

    content: {
      heading: "Why Choose Hatha Yoga?",

      paragraphs: [
        "Hatha Yoga is one of the oldest and most effective forms of yoga that combines breathing exercises, meditation, and physical postures.",

        "Our Hatha Yoga classes in Agra are designed for beginners, working professionals, students, and senior citizens looking to improve their physical and mental well-being.",

        "Every session is conducted by experienced and certified yoga instructors who ensure correct posture, breathing techniques, and a safe learning environment.",
      ],
    },

    faqs: [
      {
        question: "Who can join Hatha Yoga?",
        answer:
          "Anyone can join, including beginners, adults, working professionals, and senior citizens.",
      },
      {
        question: "How many classes should I attend each week?",
        answer:
          "For the best results, we recommend attending 3 to 5 classes per week.",
      },
      {
        question: "Do you provide a free trial class?",
        answer:
          "Yes. We offer a free trial session for new students.",
      },
      {
        question: "What should I bring to my first class?",
        answer:
          "Wear comfortable clothing, bring a yoga mat and a water bottle.",
      },
    ],
  },
];