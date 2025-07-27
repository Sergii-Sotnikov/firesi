import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { PhoneCall } from "lucide-react";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import css from "./CallBack.module.css";
import type { FormikHelpers } from 'formik';

export default function Callback() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const myKeyRECAPTCHA = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const initialcallBackValues = {
    name: "",
    phone: "+380",
    consent: false,
  };

  const CallSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Ім'я має містити щонайменше 3 літери")
      .required("Поле ім'я є обов’язковим"),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Номер повинен бути формату +380XXXXXXXXX")
      .required("Номер телефону обов'язковий"),
    consent: Yup.boolean().oneOf(
      [true],
      "Ви повинні погодитися з обробкою персональних даних"
    ),
  });

  const handleSubmit = async (
  values: typeof initialcallBackValues,
  actions: FormikHelpers<typeof initialcallBackValues>
) => {
    if (!recaptchaToken) {
      toast.error("Підтвердіть, що ви не робот");
      return;
    }

    console.log("Дані для дзвінка:", values);
    toast.success("Ми вам зателефонуємо!");
    actions.resetForm();
    recaptchaRef.current?.reset();
    setRecaptchaToken(null);
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className={css.callBackForm}>
        <Formik
          initialValues={initialcallBackValues}
          onSubmit={handleSubmit}
          validationSchema={CallSchema}
        >
          {({ values, setFieldValue, isValid, dirty }) => (
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

              <div className={css.formGroupCheckbox}>
                <label className={css.checkboxLabel}>
                  <Field
                    type="checkbox"
                    name="consent"
                    className={css.checkboxInput}
                  />
                  Я погоджуюсь з обробкою моїх персональних даних
                </label>
                <ErrorMessage
                  name="consent"
                  component="span"
                  className={css.errorConsent}
                />
              </div>

              {isValid && dirty && (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={myKeyRECAPTCHA}
                  onChange={(token) => setRecaptchaToken(token)}
                />
              )}

              <button
                className={css.btnContact}
                type="submit"
                disabled={!(isValid && dirty && recaptchaToken)}
              >
                <span className={css.btnContactSpan}>
                  ЗАМОВИТИ ДЗВІНОК
                  <PhoneCall className={css.iconPhone} />
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
