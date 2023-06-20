'use client';
import BookComponent from "@/components/BookComponent";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page({searchParams}:any) {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/book/${searchParams.id}`).then((data)=>{
      console.log('Individual book', data);
      setBook(data.data);
    })
    .catch((error)=>{
      console.log('Error-->', error);
      
    })
  },[])
  const router = useRouter()
  console.log(searchParams,'id');
  return (
    <div className="flex">
        <BookComponent book={book}/>
        {/* <BookComponent/>
        <BookComponent/>
        <BookComponent/>
        <BookComponent/> */}
        </div>
  )
  }