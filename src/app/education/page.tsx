"use client";
import BookComponent from "@/components/BookComponent";
import Headingtext from "@/components/Headingtext";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {
  const [books,setBooks] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/book/').then((data)=>{
      console.log('DATA:--->', data);
      setBooks(data.data);
    })
    .catch((error)=>{
      console.log('Error-->', error);
      
    })
  },[])
  return (
    <div>
      <div className="my-6 mx-4   ">
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
          <IoIosArrowBack size={25}/>
          <Headingtext>Education</Headingtext>
      </div>
       
    </div><div className="space-y-10">
        <div className="flex gap-8">
        {books.map(book => <BookComponent book={book} />)}
        </div>

        <div className="flex gap-8">
        {books.map(book => <BookComponent book={book} />)}
        </div>
        <div className="flex gap-8">
        {books.map(book => <BookComponent book={book} />)}
        </div>
      </div>
    </div>
  );
}
