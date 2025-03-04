import Image, { StaticImageData } from "next/image";

interface Iprops{
    imgurl:StaticImageData,
    alt:string,
    content:string
}
export default function Lay(props:Iprops) {
  return (
    <div className="flex justify-center items-center relative">
      <Image  src={props.imgurl} alt={props.alt} />
      <div className="absolute inset-0"></div>
      <h1 className={props.alt=='111'?"absolute top-1/5 font-bold":"absolute font-bold"}>{props.content}</h1>
    </div>
  );
}