import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const WorkOut = () => {
    return <section>
        <h3>Start your workout</h3>
        <ul>
            <li><div style={{background: "black", color:"white", borderRadius:"50"}}>1</div><p><span>Create a personal library:</span> add the books you intend to read 
to it.</p></li>
            <li><div style={{background: "black", color:"white", borderRadius:"50"}} >2</div><p><span>Create your first workout:</span> define a goal, choose a period, start training.</p></li>
        </ul>
        <Link to="/library">My library <IoArrowForward /></Link>
    </section>
}

export default WorkOut;