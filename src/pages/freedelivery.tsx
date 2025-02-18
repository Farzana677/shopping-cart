import black from "../assets/black-friday-elements-assortment.jpg";
import img3 from "../assets/refund.png";
const FreeDeliveryBanner = () => {
  return (
    <div
      className="w-full relative overflow-hidden mt-4 mb-4"
      style={{
        backgroundImage: `url(${black})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        minHeight: "400px",
      }}
    >
      <div className="absolute" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-xl">
          {/* Icon */}
          <img src={img3} className="sm:w-36 w-24 mx-auto" />
          {/* Text content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-2">Free Delivery</h2>
            <h3 className="text-3xl font-bold mb-4">20% Cashback</h3>
            <p className="text-lg mb-6 max-w-md opacity-90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-white text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDeliveryBanner;
