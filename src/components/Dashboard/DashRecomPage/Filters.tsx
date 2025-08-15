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
        <h4>Filters:</h4>

        <div>
          <label htmlFor="title">Book title:</label>
          <input id="title" {...register("title")} placeholder="Enter text" />
        </div>
        {errors.title && <p>{errors.title.message}</p>}

        <div>
          <label htmlFor="author">The author:</label>
          <input id="author" {...register("author")} placeholder="Enter text" />
        </div>
        {errors.author && <p>{errors.author.message}</p>}

        <button type="submit" disabled={isSubmitting}>
          To apply
        </button>
      </form>
    </section>
  );
};

export default Filters;
