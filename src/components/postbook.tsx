import Button from "@/components/Button";
import Headingtext from "./Headingtext";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";

export default function Postbook() {
  const headers = {
    'Content-Type': 'multipart/form-data',
  }
  const [book,setBook] = useState<any>({
    "book_name": "",
    "author_name": "",
    "publisher_name": "",
    "description": "",
    "language": "`",
    "category": "",
    "book_type": "",
    "price": 0,
    "available_for": "",
    "book_image": null
})
const [imageUrl,setImageUrl] = useState('');
const postBookData = () => {
  console.log("postBookData",book)
  axios.post(`http://127.0.0.1:8000/book/`,book,{headers:headers})
};

  return (
    <>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
          <IoIosArrowBack size={25}/>
          <Headingtext>New Post</Headingtext>
      </div>

      <div className=" border-2 h-fit p-10 flex justify-center items-center bg-[#FFF1F1] shadow-xl rounded-xl  my-6 ml-40 mr-40 gap-x-6">

       <div className= "border-2 w-60 h-60 rounded-lg flex justify-center items-center">
        <img src= {imageUrl} />
        <input
        type="file"
        name="myImage"
        onChange={(e) => {
          
          if (e.target.files && e.target.files[0]){
            console.log(e.target.files[0]);
            const formData = new FormData();
          formData.append("book_image", e.target.files[0]);
          setBook({...book,book_image: e.target.files[0]});
          setImageUrl(URL.createObjectURL(e.target.files[0]));
          }
        }
        }
      />
       </div>
    
       <div>
        <div className="space-y-4 flex flex-col">
          <div className="flex flex-row ... ">
            <label className="flex-1 px-4 whitespace-nowrap">Book Name</label>
            <input
              name="book_name"
              value={book.book_name}
              onChange={(e)=> setBook({...book,book_name: e.target.value})}
              type="text"
              placeholder="Enter Book Name"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4 whitespace-nowrap">Author Name</label>
            <input
              name="author_name"
              value={book.author_name}
              onChange={(e)=> setBook({...book,author_name: e.target.value})}
              type="text"
              placeholder="Enter author Name"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4">Publisher</label>
            <input
              name="publisher_name"
              value={book.publisher_name}
              onChange={(e)=> setBook({...book,publisher_name: e.target.value})}
              type="text"
              placeholder="Enter publisher"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4" >Description</label>
            <input
              name="description"
              value={book.description}
              onChange={(e)=> setBook({...book,description: e.target.value})}
              type="text"
              placeholder="Description of your book"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex flex-row ... flex-1">
            <label className="flex-1 px-4">Language</label>
            <input
              name="language"
              value={book.language}
              onChange={(e)=> setBook({...book,language: e.target.value})}
              type="text"
              placeholder="Enter Language"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4">Category</label>
            <input
              name="category"
              value={book.category}
              onChange={(e)=> setBook({...book,category: e.target.value})}
              type="text"
              placeholder="Enter your book category"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="relative flex-2 w-full lg:max-w-sm flex flex-row ... justify-between  ">
            <label className="flex-2 px-4 whitespace-nowrap"> Book Type</label>
            <select
              name="book_type"
              value={book.book_type}
              onChange={(e)=> setBook({...book,book_type: e.target.value})}
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
              shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
              pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
              focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            >
              <option value="">Select</option>
              <option value="New">NEW</option>
              <option value="Old">OLD</option>
            </select>
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4">Price</label>
            <input
              name="price"
              value={book.price}
              onChange={(e)=> setBook({...book,price: +e.target.value})}
              type="number"
              placeholder="Enter your book price"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="relative w-full lg:max-w-sm flex flex-row ... ">
            <label className="flex-1 px-4 whitespace-nowrap"> Available for</label>
            
            <select
              name="available_for"
              value={book.available_for}
              onChange={(e)=> setBook({...book,available_for: e.target.value})}
              className="block w-96 rounded-md border-0 py-1.5  text-gray-900 
              shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
              pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
              focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            > 
              <option value="">Select</option>
              <option value="Sell">SELL</option>
              <option value="Rent">RENT</option>
            </select>
          </div>
          </div> 
          <div className="flex mt-4 space-x-6 ">
          <div>
              <Button className=""onClick={postBookData} fullwidth intent={"primary"}>
                Upload
              </Button>
            </div>
          <div>
              <Button className="" fullwidth intent={"secondary"}>
                Cancel
              </Button>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
