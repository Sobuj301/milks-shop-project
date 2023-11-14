import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMilks = () => {

    const milk = useLoaderData()
    const {_id,name,details,photo} = milk


    const handleUpdateMilk = event =>{
        event.preventDefault()
        const form = event.target;
        const name = event.target.name.value;
        const details = event.target.details.value;
        const photo = event.target.photo.value;


        const updateMilk = {name,details,photo}
        

        fetch(`  https://server-milks-shop.vercel.app/milks/${_id}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(updateMilk)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your milk has been updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="p-16 bg-blue-500 rounded-2xl mt-20 max-w-7xl m-auto">
            <h2 className="text-3xl font-bold">Update a MILK</h2>
           <form onSubmit={handleUpdateMilk}>
           <div className="flex gap-5">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-normal">Milk Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter your milk name" name="name"defaultValue={name} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-normal">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter milks description" name="details"defaultValue={details} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl font-normal">Photo</span>
                </label>
                <label className="">
                    <input type="text" placeholder="Enter milk photo url" name="photo"defaultValue={photo} className="input input-bordered w-full" />
                    
                </label>
            </div>
            <div className="mt-10">
              <input type="submit" value="update milk"className="btn btn-block" />  
            </div>
           </form>

           <Link to="/"> <button className="btn btn-accent">Back Home Page</button></Link>
            
        </div>
    );
};

export default UpdateMilks;