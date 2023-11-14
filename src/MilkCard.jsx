import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MilkCard = ({ milk, milks, setMilks }) => {

    const { _id, name, details, photo } = milk;


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`  https://server-milks-shop.vercel.app/milks/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your milk has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = milks?.filter(milk => milk._id !== _id);
                        setMilks(remaining)
                    })

            }
        });
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <div className="join space-x-3">
                        <button className="btn btn-primary">View</button>
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-neutral">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilkCard;