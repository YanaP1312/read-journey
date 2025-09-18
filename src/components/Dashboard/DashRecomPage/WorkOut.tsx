import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const WorkOut = () => {
    return <section className="dashBlockFrame">
        <h3 className="dashTitle">Start your workout</h3>
        <ul className="workOutList">
            <li className="workOutItem"><div className="workOutNumWrap"><p className="workOutNum">1</p></div><p>Create a personal library: <span className="workOutSpan">add the books you intend to read 
to it.</span></p></li>
            <li className="workOutItem"><div className="workOutNumWrap"><p className="workOutNum">2</p></div><p>Create your first workout:<span className="workOutSpan"> define a goal, choose a period, start training.</span></p></li>
        </ul>
        <Link to="/library" className="workOutLinkWrap"><p className="workOutLink">My library </p><IoArrowForward className="workOutArrow"/></Link>
    </section>
}

export default WorkOut;