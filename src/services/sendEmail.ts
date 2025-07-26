import type { EmailTemplateParams } from "../types/emailService.types";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";



const SERVICE_ID = "service_rwiuc33";
const TEMPLATE_ID = "template_f3x1r9s";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
console.log("PUBLIC_KEY:", PUBLIC_KEY);

export default async function sendEmail(params: EmailTemplateParams) {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      params,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error("EmailJS error:", error);
    toast.error("Сталася помилка при надсиланні. Спробуйте пізніше.");
    return false;
  }
}
