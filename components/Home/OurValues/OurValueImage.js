import Image from "next/image";

export default function OurValueImage({ image }) {
  return <Image quality={100} priority={true} src={image} alt="Our Values" />;
}
