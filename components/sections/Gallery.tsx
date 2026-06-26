import Image from "next/image";


const galleryImages = [
  {
    src: "/images/gallery/yoga-1.jpg",
    alt: "Morning Yoga Class in Agra",
  },
  {
    src: "/images/gallery/yoga-2.jpg",
    alt: "Meditation Session",
  },
  {
    src: "/images/gallery/yoga-3.jpg",
    alt: "Group Yoga Training",
  },
  {
    src: "/images/gallery/yoga-4.jpg",
    alt: "Hatha Yoga Practice",
  },
  {
    src: "/images/gallery/yoga-5.jpg",
    alt: "Power Yoga Class",
  },
  {
    src: "/images/gallery/yoga-6.jpg",
    alt: "Yoga Studio Interior",
  },
];

export default function Gallery() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Our Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Explore Our Yoga Studio
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Take a look at our peaceful yoga studio, expert instructors,
            meditation sessions, and group classes in Agra.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={500}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}