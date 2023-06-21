"use client";
import BookComponent from "@/components/BookComponent";
import Button from "@/components/Button";
import Headingtext from "@/components/Headingtext";
import Navtext from "@/components/Navtext";
import Slideshow from "@/components/Slideshow";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Page() {
  const [books,setBooks] = useState([]);
  useEffect(()=>{
    axios.get('http://0.0.0.0:8000/book/').then((data)=>{
      console.log('DATA:--->', data);
      setBooks(data.data);
    })
    .catch((error)=>{
      console.log('Error-->', error);
      
    })
  },[])
  return (
    <div>
      <div className="flex">
        <div className="flex justify-items-center space-x-16 p-4">
          <Navtext>Category</Navtext>
          <a href="/bestsellingbook">Best Seller Book</a>

          <a href="/education">Education</a>
        </div>
        <div className="flex rowjustify-end p-4 space-x-96">
          <a className="w-24 h-10" href="/postbook">
            Sell
          </a>
        </div>
      </div>

      <Slideshow />
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <Headingtext>Popular Books</Headingtext>
      </div>
      <div className="flex gap-8">
        {books.map(book => <BookComponent book={book} />)}
        {/* <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent /> */}
      </div>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <Headingtext>Newly Released</Headingtext>
      </div>
      <div className="flex gap-8">
      {books.map(book => <BookComponent book={book} />)}
      </div>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <Headingtext>Reader’s Choice</Headingtext>
      </div>
      <div className="flex gap-8">
      {books.map(book => <BookComponent book={book} />)}
      </div>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <Headingtext>Book Sets</Headingtext>
      </div>
      <div className="flex gap-8">
      {books.map(book => <BookComponent book={book} />)}
      </div>
    </div>
  );
}
