import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {

    const loaderUsers = useLoaderData()
    const [users,setUsers] = useState(loaderUsers)



    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {


                fetch(`  https://server-milks-shop.vercel.app/user/${id}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
                    
                   const remaining = users?.filter(user => user._id !== id);
                   setUsers(remaining)
            }
          });
    }
    return (
        <div className="max-w-6xl m-auto">
            <h2 className="text-4xl font-bold text-center mt-12 mb-10">users :{users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table mb-10">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Create At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users?.map(user =>  <tr key={user._id} className="bg-base-200">
                        <th>1</th>
                        <td>{user.email}</td>
                        <td>{user.createAt}</td>
                        <td>
                            <Link to={`/updateUser/${user._id}`}>Edit<button className="btn"></button></Link>
                            <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                        </td>
                    </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;