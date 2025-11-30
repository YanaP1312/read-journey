import * as yup from "yup";
import type { paramsForRecom } from "../types/interfacesBook";


export const readingSchema = yup.object().shape({
  page: yup
    .number()
    .typeError("Enter a number")
    .integer("Page must be an integer")
    .min(1, "Page number must be ≥ 1")
    .required("This field is required")
    .test("max-page", function (value) {
      const { book } = this.options.context as { book: { totalPages: number } };
      if (value && book && value > book.totalPages) {
        return this.createError({
          message: `Page cannot exceed total pages (${book.totalPages})`,
          path: this.path,
        });
      }
      return true;
    }),
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

export const filtersSchema: yup.ObjectSchema<paramsForRecom> = yup.object({
  title: yup.string().optional(),
  author: yup.string().optional(),
  page: yup.number().optional(),
  limit: yup.number().optional(),
}).test("at-least-one", "Enter at least one filter", function (values) {
  if (!values?.title && !values?.author) {
    // привязываем ошибку к конкретному полю, чтобы она точно отобразилась
    return this.createError({ path: "title", message: "Enter at least one filter" });
  }
  return true;
});