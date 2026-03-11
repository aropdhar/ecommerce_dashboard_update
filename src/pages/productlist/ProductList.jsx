import React, { useState } from 'react'
import { Button, Input, Textarea , Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter , Select, Option} from '@material-tailwind/react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProductList = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const handleOpen = () => setOpen(!open);
    const TABLE_HEAD = ["Name", "Description", "Price", "Image" , "Category" , "Subcategory" , "Actions"];
     
    const TABLE_ROWS = [
        {
            name: "Wireless Headphone",
            description: "High quality noise cancelling headphone",
            price: "$120",
            image: "/images/headphone.jpg",
            category: "Electronics",
            subcategory: "Audio",
        },
        {
            name: "Gaming Mouse",
            description: "RGB gaming mouse with high DPI",
            price: "$45",
            image: "/images/mouse.jpg",
            category: "Electronics",
            subcategory: "Accessories",
        },
        {
            name: "Smart Watch",
            description: "Fitness tracking smart watch",
            price: "$90",
            image: "/images/watch.jpg",
            category: "Electronics",
            subcategory: "Wearables",
        },
        {
            name: "Leather Wallet",
            description: "Premium genuine leather wallet",
            price: "$35",
            image: "/images/wallet.jpg",
            category: "Fashion",
            subcategory: "Men",
        },
        {
            name: "Running Shoes",
            description: "Comfortable sports running shoes",
            price: "$75",
            image: "/images/shoes.jpg",
            category: "Fashion",
            subcategory: "Footwear",
        },
        {
            name: "Backpack",
            description: "Durable travel backpack",
            price: "$60",
            image: "/images/backpack.jpg",
            category: "Bags",
            subcategory: "Travel",
        },
        {
            name: "Bluetooth Speaker",
            description: "Portable bluetooth speaker",
            price: "$50",
            image: "/images/speaker.jpg",
            category: "Electronics",
            subcategory: "Audio",
        },
        {
            name: "Sunglasses",
            description: "UV protection stylish sunglasses",
            price: "$25",
            image: "/images/sunglasses.jpg",
            category: "Fashion",
            subcategory: "Accessories",
        },
        {
            name: "Laptop Stand",
            description: "Adjustable aluminum laptop stand",
            price: "$40",
            image: "/images/laptop-stand.jpg",
            category: "Office",
            subcategory: "Accessories",
        },
        {
            name: "Water Bottle",
            description: "Insulated stainless steel bottle",
            price: "$20",
            image: "/images/bottle.jpg",
            category: "Lifestyle",
            subcategory: "Daily Use",
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
                {TABLE_ROWS.map(({ name , description , price , image , category , subcategory }, index) => {
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
                        {description}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {price}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                          <img src={image} alt="Missing" />
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {category}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {subcategory}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <div className='flex items-center gap-x-3 justify-center'>
                        <Button color="red">Delete</Button>
                        <Button onClick={handleOpen} color="green">Update</Button>
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
            <DialogHeader>CateGory Edit</DialogHeader>
            <DialogBody className='flex flex-col gap-y-3'>
                <div>
                    <div className='flex flex-col gap-y-6'>
                    <Input size="md" label="Product Name" />
                    <div className='flex flex-col gap-y-2 mb-12'>
                        <label htmlFor="description">Description</label>
                        <ReactQuill theme="snow" value={value} onChange={setValue} className='h-[120px]'/>
                    </div>
                    <Input size="md" label="Product Price" type='number'/>
                    <div className='flex items-start gap-x-3'>
                        <div class="flex items-center  rounded-[8px] justify-center w-[30%]">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center text-center w-full h-21 bg-[#E5E7EB] border-2 border-dashed border-gray-400 rounded-[8px] cursor-pointer hover:bg-gray-200">
                            <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
                                <p class="mb-2 text-sm"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                        </div> 
                        <div className='w-full flex flex-col gap-y-5'>
                            <div className='w-full flex items-start justify-between'>
                                <div className='flex flex-col w-[48%] gap-y-5'>
                                    <Select color="purple" label="Category">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                    </Select>
                                    <Input size="md" label="Product Price" type='number'/>
                                </div>
                                <div className='flex flex-col w-[48%] gap-y-5'>
                                <Select color="purple" label="SubCategory">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                    </Select>
                                    <Input size="md" label="Product Discount" type='number'/>
                                </div>
                            </div>
                            <Input size="md" label="Product Price" type='number'/>
                        </div>
                    </div>
                    <Button variant="filled" color='green' loading={false} className='w-[20%]'>
                        Upload
                    </Button>
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
                <Button variant="gradient" color="green" onClick={handleOpen}>
                <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
       
    </>
  )
}

export default ProductList
