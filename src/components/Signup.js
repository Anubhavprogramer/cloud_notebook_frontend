import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";

export const Signup = (props) => {
  const navigate = useNavigate();
  const [Credentials, setCredentials] = useState({ name:"",email: "", password: "", cnfpassword:"" });
    const Submittheform = async (e) => {
      e.preventDefault();
      const{name, email, password} = Credentials;
      const response = await fetch("http://localhost:5000/api/auth/createUser", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,email,password
        }),
      });
      
      const json = await response.json();
      console.log(json);
      
      if (json.success)
      {
        // redirect
        // console.log(navigate)
        localStorage.setItem('token', json.authtoken)
        props.showAlert("Account created successfully", "success")
        navigate("/")
    }
    else{
        props.showAlert("Invlaid Credentials", "danger")
    }
  };

  const onChange = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
          <form
        className="container w-5 border border-4 py-3 my-5"
        onSubmit={Submittheform}
      >
        <h1>SIGN UP to CLOUD NOTE BOOK</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            value={Credentials.name}
            name="name"
            aria-describedby="emailHelp"
            placeholder='name'
            />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={onChange}
            value={Credentials.email}
            name="email"
            aria-describedby="emailHelp"
            placeholder='@email'
            />
        </div>
        <div className="my-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={onChange}
            id="password"
            value={Credentials.password}
            name="password"
            placeholder='password'
            required
            minLength={5}
          />
        </div>
        <div className="my-2">
          <label htmlFor="cnfpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={onChange}
            id="cnfpassword"
            value={Credentials.cnfpassword}
            name="cnfpassword"
            placeholder='confirm password'
            required
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  )
}
