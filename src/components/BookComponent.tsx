'use client';
import React, { useEffect, useState } from "react";
import { RiBook2Line } from "react-icons/ri";
import Button from "./Button";
import SupaClient from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";



async function fetchbooks(){
  try {
    var book = await SupaClient();
    console.log(book);
  }
  catch(error){
    console.log(error);
  }
}
console.log(fetchbooks);




const BookComponent = ({book}:any) => {

  const router = useRouter();
  const openBookPage = ()=> {
    router.push(`/book/?id=${book.id}`)
  }
  return (

      <div className=" border-2 h-80 p-4   bg-[#FFF1F1] shadow-xl rounded-xl " onClick={openBookPage}>
        <img 
          src={book?.book_image}
          alt="Image"
          className="h-52 w-48 rounded-xl" 
        />
        <div>
        <label className="text-center font-medium">{book?.book_name}</label>
        </div>
        <label className="text-center font-normal">{book?.price}/-</label>
        
        <Button className="h-6 text-sm rounded-none" fullwidth intent={"primary"}>
          Add to Cart
        </Button>
      </div>

      
  );
};

export default BookComponent;
