import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/helpers/hooks";
import { selectBook } from "../../../redux/ownBookInfo/selectors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { readingSchema } from "../../../redux/helpers/schemas/dashboardFormsSchemas";
import { toast } from "react-toastify";
import { readingFinish, readingStart } from "../../../redux/ownBookInfo/operations";
import ModalFinishReading from "../../Modals/ModalFinishReading/ModalFinishReading";

interface FormValues {
    page: number;
}


const AddReading = () => {
const [isOpenModal, setIsOpenModal] = useState(false);
const dispatch = useAppDispatch();
const book = useAppSelector(selectBook);
const lastProgress = book?.progress?.at(-1);
const isReading = lastProgress?.status === "active";


const {
    register, handleSubmit, formState: {errors, isSubmitting}, reset,
} = useForm<FormValues>({resolver: yupResolver(readingSchema), context: { book }});

const onSubmit = async({page}: FormValues) => {
    if (!book?._id) {
        toast.error("Book not found");
        return;
      }

      if (page > book.totalPages) {
        toast.error(`Page cannot exceed ${book.totalPages}`);
        return;
      }

    const payload = {id: book._id, page};

    try {
        if(isReading){
            await dispatch(readingFinish(payload)).unwrap();
            toast.success("Reading stopped")
            if(page === book?.totalPages){
                setIsOpenModal(true);
            }
        } else{await dispatch(readingStart(payload)).unwrap();
        toast.success("Reading started")}
        reset();
    }catch(error: any){
        toast.error(error.message || "Request error");
        
    }
}

    return (
        <section>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="dashTitleForm">{isReading? "Stop page" : "Start page"}</h4>
            <div>
            <div className="dashInputsWrap">
            <label  className="dashInputsWrapLabel" htmlFor="page">Page number:</label>
            <input id='page' type="number" {...register("page")} placeholder="0" className="dashInputsWrapPage"/>
            </div>
            {errors.page && <span className="dashInputsWrapError">{errors.page.message}</span>}
            </div>
            
            <button 
            className="dashBtm" type="submit" disabled={isSubmitting}>
{isReading? "To stop" : "To start"}
            </button>

        </form>
        {isOpenModal && <ModalFinishReading onClose={() => setIsOpenModal(false)}/>}
        </section>
    )

}

export default AddReading;