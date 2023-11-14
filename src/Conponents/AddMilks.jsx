import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddMilks = () => {

    const handleAddMilk = event =>{
        event.preventDefault()
        const form = event.target;
        const name = event.target.name.value;
        const details = event.target.details.value;
        const photo = event.target.photo.value;


        const addMilk = {name,details,photo}
        console.log(addMilk)

        fetch('  https://server-milks-shop.vercel.app/milks',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(addMilk)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your milk has been added",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="p-16 bg-blue-500 rounded-2xl mt-20 max-w-7xl m-auto">
            <h2 className="text-3xl font-bold">Add a MILK</h2>
           <form onSubmit={handleAddMilk}>
           <div className="flex gap-5">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-normal">Milk Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter your milk name" name="name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-normal">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter milks description" name="details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl font-normal">Photo</span>
                </label>
                <label className="">
                    <input type="text" placeholder="Enter milk photo url" name="photo" className="input input-bordered w-full" />
                    
                </label>
            </div>
            <div className="mt-10">
              <input type="submit" value="add milk"className="btn btn-block" />  
            </div>
           </form>
           <Link to="/"> <button className="btn btn-accent">Back Home Page</button></Link>
            
        </div>
    );
};

export default AddMilks;