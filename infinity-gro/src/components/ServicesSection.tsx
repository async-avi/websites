import ServiceCard from "./Service Card/ServiceCard";

const ServicesSection = () => {
  return (
    <div className="bg-white text-black grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 h-max">
      <div className="bg-orange-400 col-span-3 flex justify-center items-center">
        <h1>Our services</h1>
      </div>
      <div className="bg-blue-200 p-4">
        <ServiceCard />
      </div>
      <div className="bg-green-400 col-span-3 row-span-3"></div>
    </div>
  );
};

export default ServicesSection;
