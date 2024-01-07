import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const navigate = useNavigate();
    const [Credentials, setCredentials] = useState({ email: "", password: "" });
    const Submittheform = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Credentials.email,
          password: Credentials.password,
        }),
      });
      
      const json = await response.json();
      console.log(json.success);
      
      if (json.success)
      {
        console.log(json);
        // redirect
        // console.log(navigate)
        localStorage.setItem('token', json.authtoken)
        navigate("/")
        props.showAlert("Login successfully", "success")
    }
    else{
      props.showAlert("Invalid Details ", "danger")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        className="container w-5 border border-4 py-3 my-5 "
        onSubmit={Submittheform}
      >
        <h1 className={`text-${
              props.mode === "dark" ? "light" : "secondary"
            }`} >Login to CLOUD NOTE BOOK</h1>
        <div className="mb-3">
          <label htmlFor="email" className={`form-label text-${
                props.mode === "dark" ? "light" : "secondary"
                // props.mode === "light" ? "secondary" : "light"
              }`}>
            Email address
          </label>
          <input
            type="email"
            className={`form-control  bg-${props.mode === "light" ? "Dark" : "light"}`}
            id="email"
            onChange={onChange}
            value={Credentials.email}
            name="email"
            aria-describedby="emailHelp"
            placeholder='username'
          />
          <p id="emailHelp" className={`form-text text-${props.mode === "dark" ? "light" : "secondary"}  `}>
            We'll never share your email with anyone else, or may be 😅.
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={`form-label text-${
                props.mode === "dark" ? "light" : "secondary"
              }`}>
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};
