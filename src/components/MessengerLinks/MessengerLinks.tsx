import { FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa";

export default function MessengerLinks() {
  return (
    <>
      <a href="https://t.me/firesi_support" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={50}/>
      </a>
      <a href="viber://chat?number=%2B380989136599" target="_blank" rel="noopener noreferrer">
        <FaViber size={50}/>
      </a>
      <a href="https://wa.me/380989136599" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={50}/>
      </a>
    </>
  );
}