import { Link } from "react-router-dom";

const Services = ({ service }) => {

    const { id, serviceName, image, description } = service;

    
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description}</p>
                <div className="card-actions">
                  <Link to={`/details/${id}`}><button className="btn btn-primary">Service Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;