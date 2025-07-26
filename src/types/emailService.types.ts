export interface EmailTemplateParams {
  name: string;
  phone: string;
  type_of_form: string;
  time: string;
  selected_product?: string;
  user_message?: string;
  [key: string]: string | undefined;
}
