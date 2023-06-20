"use client"
import Button from "@/components/Button";
import Image, { StaticImageData } from "next/image";
import Bookkartlogo from "../../public/Bookkartlogo.jpg";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const session=useSession()
  const [contact,setContact] = useState<any>({
    "name": "",
    "email": "",
    "subject": "",
    "message": "",

})
const postContact = () => {
  console.log("postBookData",contact)
  axios.post(`http://127.0.0.1:8000/contact/`,contact)
};
  return (
    <>
      <div className=" h-fit bg-[#FFF1F1] w-2/6 block justify-center border-2 rounded-xl px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:min-w-full sm:max-w-sm ">
          <div className="inset-x-28 flex justify-center">
            <Image
              src="/Bookkartlogo.jpg"
              alt="Logo"
              width={157}
              height={118}
            />
          </div>
          <h2 className="mt-1 text-center text-lg pb-1 font-medium leading-10 tracking-tight text-[#000000]">
            Contact Us
          </h2>
          
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  value={contact.name}
                  onChange={(e)=> setContact({...contact,name: e.target.value})}
                  placeholder="Name"
                  type="text"
                  autoComplete="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 focus:ring-1 focus:ring-inset placeholder:text-opacity-60 
                  focus:ring-[#FF6D6D] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={contact.email}
                  onChange={(e)=> setContact({...contact,email: e.target.value})}
                  placeholder="Your Email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 focus:ring-1 focus:ring-inset placeholder:text-opacity-60 
                  focus:ring-[#FF6D6D] sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="subject"
                  name="subject"
                  value={contact.subject}
                  onChange={(e)=> setContact({...contact,subject: e.target.value})}
                  placeholder="Subject"
                  type="text"
                  autoComplete="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 focus:ring-1 focus:ring-inset placeholder:text-opacity-60 
                  focus:ring-[#FF6D6D] sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                ></label>
              </div>
              <div className="mt-2">
                <input
                  id="message"
                  placeholder="Type your Message"
                  value={contact.message}
                  onChange={(e)=> setContact({...contact,message: e.target.value})}
                  name="message"
                  type="message"
                  autoComplete="message"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
            <div>
              <Button className=""onClick={postContact} fullwidth intent={"primary"}>
                SUBMIT
              </Button>
            </div>
            <div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
