import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ']+$/, "Ім'я повинно бути тільки з літер")
    .min(2, 'Довжина повинна бути більше двох символів')
    .max(30, 'Дуже багато символів')
    .trim()
    .required("Поле обов'язкове до заповнення"),
  date: Yup.string(),
  email: Yup.string()
    .max(50, 'Довжина повинна бути більше двох символів')
    .email('Невірний формат email')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Невірний формат email',
    )
    .required("Поле обов'язкове до заповнення"),
  password: Yup.string()
    .min(2, 'Довжина повинна бути більше двох символів')
    .max(30, 'Дуже багато символів')
    .trim()
    .required("Поле обов'язкове до заповнення"),
});
