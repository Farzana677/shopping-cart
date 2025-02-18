import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
function Contact() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
          <p className="text-2xl font-bold text-[#d77a7a]">Contact Us</p>
          <p className="text-[#d77a7a] font-medium mt-2">
            We're here to help. Reach out to us anytime!
          </p>
          <div className="mt-4 text-left">
            <div className="flex items-center">
              <LuMessageSquare />
              <span className="font-semibold ml-2">Email:</span>
              <span className="text-[#d77a7a] ml-2">
                waniifarzana63840@gmail.com
              </span>
            </div>

            <div className="flex items-center mt-2">
              <IoPhonePortraitOutline />
              <span className="font-semibold ml-2">Phone No:</span>
              <span className="text-[#d77a7a] ml-2">+9123456220</span>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26420.02301583088!2d74.803442241203!3d34.13347440299037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e184fda3ee0d63%3A0x51ded5305cf0681f!2sLal%20Bazar%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1739854712583!5m2!1sen!2sin"
              width="100%"
              height="350"
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
