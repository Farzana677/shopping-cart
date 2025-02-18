import { Card } from "primereact/card";
import { MdOutlinePayment } from "react-icons/md";
import { RiPlaystationLine } from "react-icons/ri";
export default function Fourcard() {
  return (
    <>
      <section className="grid grid-cols-1  md:grid-cols-2">
        <Card className="bg-[#FFF7ED] p-6 font-bold ">
          <div className="flex items-center gap-4">
            <MdOutlinePayment size={24} />{" "}
            <div className="flex flex-col">
              {" "}
              <h1>Free Shipping</h1>
              <p className="font-medium">Free Shipping Worldwide</p>
            </div>
          </div>
        </Card>
        <Card className="bg-[#FFF7ED] p-6 font-bold">
          <div className="flex items-center gap-4">
            <RiPlaystationLine size={24} />{" "}
            <div className="flex flex-col">
              {" "}
              <h1>Free Shipping</h1>
              <p className="font-medium">Online service for 24 * 7</p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#FFF7ED] p-6 font-bold">
          <div className="flex items-center gap-4">
            <RiPlaystationLine size={24} />{" "}
            <div className="flex flex-col">
              {" "}
              <h1>Free Shipping</h1>
              <p className="font-medium">Online service for 24 * 7</p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#FFF7ED] p-6 font-bold">
          <div className="flex items-center gap-4">
            <MdOutlinePayment size={24} />{" "}
            <div className="flex flex-col">
              {" "}
              {/* Container for title and text on the right */}
              <h1>Online Payment</h1>
              <p className="font-medium">Square Payment</p>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
