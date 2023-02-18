import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="border-4 border-green-600">Hello world!</h1>
      <h1 className="text-vuejs-100">Hello world!</h1>
      <p className="text-xs sm:text-base md:text-lg lg:text-3xl">
        Hello long sentence
      </p>
      <p className="mb-1">Hello long sentence</p>
      <p>Another long sentence</p>
    </div>
  );
}
