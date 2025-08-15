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
            <h4>Create your library:</h4>

            <div><label htmlFor="title">Book title:</label><input id="title" type="text" {...register("title")} /></div>
            {errors.title && <p>{errors.title.message}</p>}
            

            <div><label htmlFor="author">The author:</label><input id="author" type="text" {...register("author")} /></div>
            {errors.author && <p>{errors.author.message}</p>}

            <div><label htmlFor="totalPages">Number of pages:</label><input id="totalPages" type="number" {...register("totalPages")}/></div>
            {errors.totalPages && <p>{errors.totalPages.message}</p>}


            <button type="submit" disabled={isSubmitting}>Add book</button>
            

        </form>
        {isOpen && <ModalSuccessAddOwn onClose={() => setIsOpen(false)}/>}
    </section>
}

export default AddBook;