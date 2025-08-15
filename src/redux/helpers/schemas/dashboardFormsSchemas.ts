import * as yup from "yup";

export const readingSchema = yup.object().shape({
  page: yup
    .number()
    .typeError("Enter a number")
    .integer("Page must be an integer")
    .min(1, "Page number must be ≥ 1")
    .required("This field is required"),
});
