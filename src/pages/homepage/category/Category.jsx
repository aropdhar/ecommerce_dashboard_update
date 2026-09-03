import React, { useState } from 'react'
import { Button, Input, Textarea , Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter} from '@material-tailwind/react'
import { useForm } from 'react-hook-form';
import { useGetAllCategoryQuery, useUploadcategoryMutation, useDeleteCategoryItemMutation , useUpdatecategoryMutation } from '../../../features/api/exclusiveDash';
import { ErrorToast, SuccessToast } from '../../../utils/Toast';

const Category = () => {
 
  const [open, setOpen] = useState(false);
  const TABLE_HEAD = ["Title", "Description", "isActive", "SubCategory" , "Product" ,"Actions"];
  const { register, handleSubmit, reset, formState: { errors },} = useForm();
  const [categoryupload , {isLoading , isError}] =  useUploadcategoryMutation();
  const  {data , isLoading:categoryLoading , isError:categoryError}= useGetAllCategoryQuery();
  const [deletecategory ,{isLoading:deleteloading , isError: deleteerror}] = useDeleteCategoryItemMutation();
  const [categoryupdate, {isLoading:updateloading , isError:updateerror}] = useUpdatecategoryMutation();
  const[updateinfo , setUpdateinfo] = useState({});
  
  
  const handleOpen = (updatedata) => {
    setUpdateinfo({ title: updatedata?.title ,  description: updatedata?.description, id: updatedata?._id})
    
    setOpen(!open)
  };

   
  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
    
  ];

  const uploadcategory = async (data) => {
    try {
        const response = await categoryupload(data);
        
        if(!response?.data?.data){
            ErrorToast(response?.error?.data?.message)
        }else{
            SuccessToast(response?.data?.message)
        }
        
    } catch (error) {
        console.errors("Error from categoryUpload" , error)
    }finally{
        reset()
    }
  }
  
  const handledelete = async(deleteid)=>{
    try {
        const response = await deletecategory(deleteid);
        
        if(!response?.data?.data){
            ErrorToast(response?.error?.data?.message)
        }else{
            SuccessToast(response?.data?.message)
        }
        
        
        
    } catch (error) {
        console.error("Category Delete Not Found")  
    }
  }
  
  
  const handleupdate = async () =>{
      try {
        const response = await categoryupdate(updateinfo);

        if(response?.data?.data){
            SuccessToast(response?.data?.message)
        }
        
      } catch (error) {
        console.error("Error From HandleUpdate" , error)
      } finally{
        setOpen(!open)
        reset()
      }
  }

  return (
    <div>
        <div className='flex flex-col gap-y-4'>
            <form onSubmit={handleSubmit(uploadcategory)}>
                <div className='flex flex-col gap-y-4'>
                    <div>
                        <Input size="md" label="Name" {...register("title", { required: true })}/>
                        {errors.title && <span className='text-red-500 text-[18px]'>This title is required</span>}
                    </div>
                    <Textarea variant="outlined" label="description" {...register("description", { required: true })}/>
                    {errors.description && <span className='text-red-500 text-[18px]'>This Description is required</span>}
                    <Button type="submit" variant="filled" color='green' loading={isLoading} className='w-[10%]'>
                        Upload
                    </Button>
                </div>
            </form>
            {/* category table list section */}
        
            <Card className="h-[320px] w-full overflow-y-scroll">
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
                    {data?.data?.slice()?.reverse()?.map((item, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 text-center";

                    return (
                        <tr key={index}>
                        <td className={classes}>
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                            >
                            {item?.title}
                            </Typography>
                        </td>
                        <td className={`classes flex items-center justify-center translate-y-full`}>
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal truncate w-52 text-center"
                            >
                            {item?.description}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                            >
                            {item.isActive ? "True" : "False"}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                            >
                            {item?.subcategory?.length}
                            </Typography>
                        </td>
                         <td className={classes}>
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                            >
                            {item?.product?.length}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <div className='flex items-center gap-x-3 justify-center'>
                            <Button loading={deleteloading} onClick={()=>handledelete(item._id)} color="red">Delete</Button>
                            <Button loading={updateloading} onClick={()=>handleOpen(item)} color="green">Update</Button>
                            </div>
                        </td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </Card>
        </div>
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
                    <Input size="md" label="Name" onChange={(e)=> setUpdateinfo({...updateinfo , title:e.target.value})}/>
                </div>
                <Textarea variant="outlined" label="Description" onChange={(e)=> setUpdateinfo({...updateinfo , description:e.target.value})}/>
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
                <Button variant="gradient" color="green" onClick={handleupdate}>
                <span>Confirm</span>
                </Button>
            </DialogFooter>
            </Dialog>
    </div>
  )
}

export default Category
