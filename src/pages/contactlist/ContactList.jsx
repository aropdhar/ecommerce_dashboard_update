import React, { useState } from 'react'
import { Button, Input, Textarea , Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter , Select, Option} from '@material-tailwind/react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import images from '../../assets/image.jpeg'

const ContactList = () => {

        const [open, setOpen] = useState(false);
        const [value, setValue] = useState('');
        const handleOpen = () => setOpen(!open);
        const TABLE_HEAD = ["Name", "Email", "Image" , "PhoneNumber" , "Actions"];
         
        const TABLE_ROWS = [
            {
                name: "Wireless Headphone",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
            {
                name: "Gaming Mouse",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
            {
                name: "Smart Watch",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
            {
                name: "Leather Wallet",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
            {
                name: "Running Shoes",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
            {
                name: "Backpack",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
            {
                name: "Bluetooth Speaker",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
            {
                name: "Sunglasses",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
            {
                name: "Laptop Stand",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
            {
                name: "Water Bottle",
                Email: "aropsutradhar@gmail.com",
                image: "/images/headphone.jpg",
                phoneNumber: "01720000000",
            },
        ];
    
  return (
    <>
      {/* productlist table list section */}
        
        <Card className="h-[420px] w-full overflow-y-scroll">
            <table className="w-full min-w-max table-auto text-center">
            <thead className='sticky top-0 z-10'>
                <tr>
                {TABLE_HEAD.map((head) => (
                    <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                    >
                        {head}
                    </Typography>
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {TABLE_ROWS.map(({ name , Email , image , phoneNumber }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 text-center";

                return (
                    <tr key={name}>
                    <td className={classes}>
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {name}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {Email}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <div
                        variant="small"
                        color="blue-gray"
                        className="font-normal flex items-center justify-center"
                        >
                          <img src={images} alt={images} className='w-14 h-14 object-cover rounded-md ' />
                        </div>
                    </td>
                    <td className={classes}>
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {phoneNumber}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <div className='flex items-center gap-x-3 justify-center'>
                        <Button color="red">Delete</Button>
                        <Button onClick={handleOpen} color="green">View</Button>
                        </div>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </Card>
        
    {/* Edit modal body section  */}
        <Dialog
        open={open}
        handler={handleOpen}
        animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
        }}
        >
            <DialogHeader>Customer View</DialogHeader>
            <DialogBody className='flex flex-col gap-y-3'>
                <div class="flex justify-center items-center min-h-[50vh]">
                    <div class="max-w-[720px] mx-auto">
                        <div class="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
                            <a 
                                target="_blank" 
                                href="https://www.material-tailwind.com/docs/html/card" 
                                class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
                            >
                                More components on <b>Material Tailwind</b>.
                            </a>
                        </div>

                        
                        <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <div class="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                                <img
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                    alt="Tania Andrew"
                                    class="relative inline-block h-[58px] w-[58px] rounded-full object-cover object-center" />
                                <div class="flex w-full flex-col gap-0.5">
                                    <div class="flex items-center justify-between">
                                        <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            Tania Andrew
                                        </h5>
                                        <div class="flex items-center gap-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-5 h-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-5 h-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-5 h-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-5 h-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-5 h-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                                        Frontend Lead @ Google
                                    </p>
                                </div>
                            </div>
                            <div class="p-0 mb-6">
                                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    "I found a solution to all my design needs from Creative Tim. I use them as a freelancer in my
                                    hobby projects for fun! And it's really affordable, very humble guys!!!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
            </DialogFooter>
        </Dialog>
       
    </>
  )
}

export default ContactList
