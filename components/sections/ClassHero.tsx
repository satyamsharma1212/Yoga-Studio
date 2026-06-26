import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ClassHero({
  title,
  description,
  image,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Yoga Classes in Agra
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800">
              Book Free Trial
            </button>

            <button className="rounded-full border border-green-700 px-8 py-4 font-semibold text-green-700 hover:bg-green-50">
              Call Now
            </button>
          </div>
        </div>

        <div>
          <Image
            src={image}
            alt={title}
            width={700}
            height={700}
            priority
            className="rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}