import css from "./Contact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PhoneCall } from "lucide-react";

interface FormCallValues {
  name: string;
  phone: string;
  message: string;
}

const CallSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Ім'я має містити щонайменше 3 літери")
    .max(20, "Ім'я надто довге (максимум 20 символів)")
    .required("Поле ім'я є обов’язковим"),
  phone: Yup.string().required("Номер телефону обов'язковий"),
  message: Yup.string().max(
    500,
    "Повідомлення надто довге (максимум 500 символів)"
  ),
});

export default function Contact() {
  const initialFormCallValues: FormCallValues = {
    name: "",
    phone: "+380",
    message: "",
  };

  const handleSubmit = (
    values: FormCallValues,
    actions: FormikHelpers<FormCallValues>
  ) => {
    console.log(values);
    toast.success("Дякуємо! Ми вам зателефонуємо.");
    actions.resetForm();
  };

  return (
    <section className={css.contact}>
      <div className={css.container}>
        <h3 className={css.title}>контакти</h3>
        <div className={css.information}>
          <div className={css.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d857.8360467228931!2d24.058430912699926!3d49.8874692285935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sru!2sfr!4v1753213617234!5m2!1sru!2sfr"
              width={575}
              height={350}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={css.contactForm}>
            <Formik
              initialValues={initialFormCallValues}
              onSubmit={handleSubmit}
              validationSchema={CallSchema}
            >
              {({ values, setFieldValue }) => (
                <Form className={css.form}>
                  <div className={css.formGroup}>
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      className={css.inputName}
                      placeholder="введіть ІМ'Я"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className={css.errorName}
                    />
                  </div>

                  <div className={css.formPhone}>
                    <PhoneInput
                      country={"ua"}
                      value={values.phone}
                      onChange={(phone) => setFieldValue("phone", `+${phone}`)}
                      containerClass="formPhone"
                      inputClass="inputPhone"
                      dropdownClass="dropdown"
                      enableSearch
                    />
                    <ErrorMessage
                      name="phone"
                      component="span"
                      className={css.errorPhone}
                    />
                  </div>

                  <div className={css.formGroup}>
                    <Field
                      id="message"
                      name="message"
                      rows={8}
                      className={css.inputMessage}
                      placeholder="Введіть Ваше повідомлення"
                    />
                    <ErrorMessage
                      name="message"
                      component="span"
                      className={css.ErrorMessage}
                    />
                  </div>

                  <button className={css.btnContact} type="button">
                    <span className={css.btnContactSpan}>
                      ЗАМОВИТИ ДЗВІНОК
                      <PhoneCall className={css.iconPhone}/>
                    </span>
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
