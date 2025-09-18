import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../redux/helpers/hooks";
import { getRecommended } from "../../../redux/recommendedBooks/operations";
import type { paramsForRecom } from "../../../redux/helpers/types/interfacesBook";
import { toast } from "react-toastify";

const Filters = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<paramsForRecom>();

  const onSubmit = async (values: paramsForRecom) => {
    try {
      await dispatch(getRecommended(values)).unwrap();
      reset();
    } catch (error: any) {
      toast.error("Error fetching recommendations:", error.message);
    }
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
        <button type="submit" disabled={isSubmitting} className="dashBtm">
          To apply
        </button>
      </form>
    </section>
  );
};

export default Filters;
