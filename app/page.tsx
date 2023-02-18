import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="border-4 border-green-600">Hello world!</h1>
      <h1 className="text-vuejs-100">Using </h1>
      <p className="text-xs sm:text-base md:text-lg lg:text-3xl">
        Using screen classes for media queries
      </p>
      <p className="mb-1">Using custom spacing</p>
      <p>Another long sentence</p>
      <p className="bg-[#bada55]">
        Using TW square-bracket notation to generate a class on the fly with any
        arbitrary value.
      </p>
    </div>
  );
}
