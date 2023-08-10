import axios from 'axios';
import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Idata {
    plan?: string;
    payableAmount?: string;
}

export default function Payment<NextPage>(){
    const router = useRouter();
    const {plan} = router.query;
    const [paidvalue, setPaidValue] = useState<string>("");
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        amount: '',
        email: '',
      });
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      React.useEffect(() => {
        try {
          calculation(plan as string)
            .then((data) => {
              if (data) {
                setPaidValue(data.payableAmount || " ");
              }
            })
            .catch((err) => console.log());
        } catch (err) {
          const pass = 1;
        }
      }, [plan]);
    async function calculation<Idata>(data:string){
        if(data === "basic"){
            return {
                plan: "Basic Plan",
                payableAmount: "7000 tk"
            }
        }
        else if(data === "premium"){
            return {
                plan: "Premium Plan",
                payableAmount: "30000"
            }
        }
        else if(data === "advanced"){
            return {
                plan: "Advanced Plan",
                payableAmount: "15000"
            }
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const settingData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            amount: paidvalue
        }
        localStorage.setItem("paidforplan", plan as string)
        console.log(settingData)
        const tokenn = process.env.NEXT_PUBLIC_PAYMENTAPI || " ";
        await axios.post<string>(tokenn, settingData)
        .then(data=>{
            router.push(data.data)
        })
        .catch(err=>console.log(err))
      };

    return(
        <div>
            <p>Payment:{plan || " "}</p>
            
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border rounded focus:ring focus:ring-blue-200 mb-4"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
        />

        <label className="block mb-2 font-medium" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full p-2 border rounded focus:ring focus:ring-blue-200 mb-4"
          placeholder="123-456-7890"
          value={formData.phone}
          onChange={handleChange}
        />

        <label className="block mb-2 font-medium" htmlFor="amount">
          Amount → [{paidvalue}tk]
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          className="w-full p-2 border rounded focus:ring focus:ring-blue-200 mb-4 text-gray-400"
          placeholder="$0.00"
          value={paidvalue}
          disabled
          onChange={handleChange}
        />

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
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Make Payment
        </button>
      </form>
    </div>
    </div>
        </div>
    )
}