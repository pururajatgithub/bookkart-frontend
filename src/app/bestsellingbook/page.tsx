'use client';
import BookComponent from "@/components/BookComponent";
import Headingtext from "@/components/Headingtext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    axios.get(`http://43.204.149.220:8000/book/`).then((data)=>{
      console.log('Individual book', data);
      setBook(data.data);
    })
    .catch((error)=>{
      console.log('Error-->', error);
      
    })
  },[])
  const router = useRouter()
  return (
    <div>
      <div className="my-6 mx-4   ">
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
          <IoIosArrowBack size={25}/>
          <Headingtext>Best Selling Books</Headingtext>
      </div>
       
    </div><div className="space-y-10">
        <div className="flex gap-8">
          {book.map(book => <BookComponent book={book} />)}
          {/* <BookComponent book = {book}/>
          <BookComponent book = {book}/>
          <BookComponent book = {book}/>
          <BookComponent book = {book}/>
          <BookComponent book = {book}/> */}
        </div>

        <div className="flex gap-8">
        {book.map(book => <BookComponent book={book} />)}
        </div>
        <div className="flex gap-8">
        {book.map(book => <BookComponent book={book} />)}
        </div>
      </div>
    </div>
  );
}
