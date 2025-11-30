import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../redux/helpers/hooks";
import { getRecommended } from "../../../redux/recommendedBooks/operations";
import { toast } from "react-toastify";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { filtersSchema } from "../../../redux/helpers/schemas/dashboardFormsSchemas";
import type { paramsForRecom } from "../../../redux/helpers/types/interfacesBook";



const Filters = () => {
  const dispatch = useAppDispatch()
  const [isFiltered, setIsFiltered] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<paramsForRecom>({
    resolver: yupResolver(filtersSchema),
  });

  const onSubmit = async (values: paramsForRecom) => {
    try {
      await dispatch(getRecommended(values)).unwrap();
      setIsFiltered(true);
    } catch (error: any) {
      toast.error(error.message || "Request error");
    }
  };

  const handleReset = async () => {
    await dispatch(getRecommended({})).unwrap(); 
    reset();
    setIsFiltered(false); 
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="dashTitleForm">Filters:</h4>
        <div className="dashInputs">
<div>
        <div className="dashInputsWrap">
          <label htmlFor="title" className="dashInputsWrapLabel">Book title:</label>
          <input id="title" {...register("title")} placeholder="Enter text" className="dashInputsWrapTitle" />
        </div>
        {errors.title && <span className="dashInputsWrapError">{errors.title.message}</span>}
        </div>
<div>
        <div className="dashInputsWrap">
          <label htmlFor="author" className="dashInputsWrapLabel">The author:</label>
          <input id="author" {...register("author")} placeholder="Enter text" className="dashInputsWrapAuthor"/>
        </div>
        {errors.author && <span className="dashInputsWrapError">{errors.author.message}</span>}
        </div>
</div>
<button
  type={isFiltered ? "button" : "submit"}
  disabled={isSubmitting}
  className="dashBtm"
  onClick={isFiltered ? handleReset : undefined}
>
  {isFiltered ? "Reset filters" : "Apply"}
</button>
      </form>
    </section>
  );
};

export default Filters;
