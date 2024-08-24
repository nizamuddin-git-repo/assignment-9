import { Link, NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center mt-40 text-[200px] text-secondary'>404</h2>
            <h2 className='text-center text-6xl font-bold'>NOT FOUND</h2>
            <div className="mt-10 text-center">
            <Link to="/"><button className="btn btn-success">Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;