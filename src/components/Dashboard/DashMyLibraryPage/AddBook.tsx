import { useState } from "react";
import ModalSuccessAddOwn from "../../Modals/ModalSuccessAddOwn/ModalSuccessAddOwn";
import { useAppDispatch } from "../../../redux/helpers/hooks";
import type { AddBookPayload } from "../../../redux/helpers/types/interfacesBook";
import { useForm } from "react-hook-form";
import { addOwnBook } from "../../../redux/ownBooks/operations";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { addingBookSchema } from "../../../redux/helpers/schemas/dashboardFormsSchemas";

const AddBook = () => {

const [isOpen, setIsOpen] = useState(false)
const dispatch = useAppDispatch();

const {register, handleSubmit, formState:{isSubmitting, errors}, reset} = useForm<AddBookPayload>({
    resolver: yupResolver(addingBookSchema),
  });

const onSubmit = async (values: AddBookPayload) => {
    try{
        await dispatch(addOwnBook(values)).unwrap();
        reset();
        setIsOpen(true);
    }catch(error: any){
        toast.error(`👀 ${error || "Something went wrong."}`)
    }
}


    return <section>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="dashTitleForm">Create your library:</h4>

<div className="dashInputs">
    <div>
            <div className="dashInputsWrap"><label htmlFor="title" className="dashInputsWrapLabel">Book title:</label><input id="title" type="text" placeholder="Enter text" className="dashInputsWrapTitle" 
            {...register("title")} /></div>
            {errors.title && <span className="dashInputsWrapError">{errors.title.message}</span>}
            </div>
            
<div>
            <div className="dashInputsWrap"><label htmlFor="author" className="dashInputsWrapLabel" >The author:</label><input id="author" type="text" placeholder="Enter text" className="dashInputsWrapAuthor" {...register("author")} /></div>
            {errors.author && <span className="dashInputsWrapError">{errors.author.message}</span>}
            </div>

<div>
            <div className="dashInputsWrap"><label htmlFor="totalPages" className="dashInputsWrapLabel">Number of pages:</label><input id="totalPages" type="number" placeholder="0" className="dashInputsWrapNumber" {...register("totalPages")}/></div>
            {errors.totalPages && <span className="dashInputsWrapError">{errors.totalPages.message}</span>}
            </div>
            </div>


            <button type="submit" disabled={isSubmitting} className="dashBtm">Add book</button>
            

        </form>
        {isOpen && <ModalSuccessAddOwn onClose={() => setIsOpen(false)}/>}
    </section>
}

export default AddBook;