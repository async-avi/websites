import Image from "next/image";
import services from "./services";

const ServiceCard = (props: any) => {
  return (
    <div
      className="bg-red-200 p-4 flex h-18 justify-between text-sm text-black rounded-lg"
      style={{ width: "25%" }}
    >
      <Image
        src={props.img}
        alt={props.alt}
        style={{ height: "20%", marginRight: "5%" }}
      />
      <div>{services[0].description}</div>
    </div>
  );
};

export default ServiceCard;
