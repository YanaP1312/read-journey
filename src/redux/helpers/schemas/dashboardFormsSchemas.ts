import * as yup from "yup";

export const readingSchema = yup.object().shape({
  page: yup
    .number()
    .typeError("Enter a number")
    .integer("Page must be an integer")
    .min(1, "Page number must be ≥ 1")
    .required("This field is required"),
});




export const addingBookSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup
    .string()
    .required("Author is required"),
    totalPages: yup
    .number()
    .typeError("Must be a number")
    .min(1, "Must be at least 1 page")
    .required("Number of pages is required"),
});
