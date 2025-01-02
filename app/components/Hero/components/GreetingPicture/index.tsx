import Image from "next/image";

const GreetingPicture = () => {
  return (
    <div className="mb-7 relative w-full max-w-[400px] md:ml-20 lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[760px]">
      <Image
        src="/hero.webp"
        layout="intrinsic"
        width={800}
        height={600}
        alt="platform's placeholder"
      />
    </div>
  );
};

export default GreetingPicture;
