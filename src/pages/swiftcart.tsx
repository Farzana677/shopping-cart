import img from "../assets/smartphones-marble-table.png";
import appGallery from "../assets/appGallery.png";
import playStore from "../assets/appStore.png";
import { IoPhonePortraitOutline } from "react-icons/io5";

function swiftcardttsx() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mx-auto max-w-screen-lg py-10">
        <div>
          <img
            src={img}
            className="max-w-72 sm:max-w-96 m-auto md:max-w-full"
          ></img>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <IoPhonePortraitOutline className="text-[#d77a7a] text-3xl" />
            <h3 className="text-[#d77a7a] text-3xl font-bold mb-4">
              Get The SwiftCart App
            </h3>
          </div>

          <p className="text-gray-700 mb-4 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            amet est, ab tempora ullam molestiae modi, voluptates explicabo
            eligendi repellat non. Et quod reprehenderit ut doloremque fuga odit
            mollitia? Mollitia?
          </p>
          <div className="flex gap-2">
            <img src={appGallery} className="w-42" />
            <img src={playStore} className="w-42" />
            <img src={appGallery} className="w-42" />
          </div>
        </div>
      </section>
    </>
  );
}

export default swiftcardttsx;
