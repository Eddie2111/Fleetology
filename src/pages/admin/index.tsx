import axios from 'axios';
import React, { useState } from 'react';

interface LoginFormState {
  email: string;
  password: string;
}
interface IResponse{
    data:{
        token: string;
    }
}

const LoginForm: React.FC = () => {
    const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if(formData.email==="admin@admin.com" && formData.password==="admin"){
        // delete all other tokens from localstorage
        const token:any = await axios.post<IResponse>("api/auth/login", formData)
        localStorage.setItem('fleetology-user', token.data.token)
        //window.location.href = '/admin/home'
    }
    else{
        setError("Invalid email or password, attempt has been logged")
    }
    // Add your login logic here
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 rounded shadow-md">
        <p className="text-lg text-center"> Login as Admin </p>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border rounded focus:ring focus:ring-blue-200 mb-4"
          placeholder="example@example.com"
          value={formData.email}
          onChange={handleChange}
          onClick={()=>setError("")}
          required
        />

        <label className="block mb-2 font-medium" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full p-2 border rounded focus:ring focus:ring-blue-200 mb-4"
          placeholder="********"
          value={formData.password}
          onClick={()=>setError("")}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default function Index(){
    // design me a simple login form using ts and tailwindcss please
    return(
        <div className=" flex justify-center items-center ">
            <LoginForm/>
      </div>

    )
}