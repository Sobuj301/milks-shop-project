import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvide";
import Swal from "sweetalert2";


const SingUp = () => {

  const {createUser} = useContext(AuthContext);


    const handleSingUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            const createdAt = result?.user?.metadata?.creationTime;
            const user = {email,createAt:createdAt}

            fetch('  https://server-milks-shop.vercel.app/user',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your are added",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })


        })
        .catch(err => {
            console.log(err.message)
        })
           


    }
    return (
        <div className="max-w-2xl m-auto mt-16">
            <h2 className="text-3xl font-bold">Please Sing Up !!!</h2>
            <form onSubmit={handleSingUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email"name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password"name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sing up</button>
                </div>
            </form>
        </div>
    );
};

export default SingUp;