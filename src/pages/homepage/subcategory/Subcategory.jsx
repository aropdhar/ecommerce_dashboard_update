import React, { useState } from 'react'
import { Button, Input, Textarea , Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter , Select, Option} from '@material-tailwind/react'
import { Controller, useForm } from "react-hook-form"
import { useDeleteSubCategoryMutation, useGetAllCategoryQuery, useGetAllSubCategoryQuery, useUploadsubcategooryMutation, useUpdatesubcategoryMutation } from '../../../features/api/exclusiveDash';
import { ErrorToast, SuccessToast } from '../../../utils/Toast';

const Subcategory = () => {

    const [open, setOpen] = useState(false);
    const [subcategoryupdate , setSubcategoryupdate] = useState();

    const handleOpen = (updateinfo) => { 
        setOpen(!open);
        setSubcategoryupdate({ 
            id: updateinfo?._id,
            title: updateinfo?.title,
            description: updateinfo?.description,
            category: updateinfo?.category[0]._id
        })
        
    }
    
    const TABLE_HEAD = ["Title", "Category", "Category Name", "Actions"];
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const {data , isLoading , isError} = useGetAllCategoryQuery();
    const [uploadsubcategory, {isLoading:loadingsubcategory , isError:errorsubcategory} ] = useUploadsubcategooryMutation();
    const {data:subcategorydata , isLoading:subcategoryloading} = useGetAllSubCategoryQuery();
    const [deletesubcategory , {isLoading:subcategoryloadings , isError:deleteerror}] = useDeleteSubCategoryMutation();
    const [updatesubcategory, {isLoading:updatesubcategoryloadings , isError:updatesubcategoryerror}] = useUpdatesubcategoryMutation();

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
    
    const handleupload = async (data) => {
            try {
            const response =  await uploadsubcategory(data);
            
            if(response?.error){
                    ErrorToast(response?.error?.data?.message)
                }else{
                    SuccessToast(response?.data?.message)
            }
            
            } catch (error) {
                console.error("Error from Handle Upload Subcategory" , error)
            }finally{
                reset()
            }
    }

    const handledelete = async(id) =>{     
       try {
          const response = await deletesubcategory(id);
          
          if(response?.data?.data){
            SuccessToast(response?.data?.message)
          }else{
            ErrorToast(response?.error?.data?.message)
          }

       } catch (error) {
          console.error("Error From Handle Delete" , error)
       }
    }
    
    
    const handleupdate = async()=>{
        setOpen(!open)
        try {
            const response = await updatesubcategory(subcategoryupdate);
            
            if(response?.data?.data){
                SuccessToast(response?.data?.message)
            }else{
                ErrorToast(response?.error?.data?.message);
            }
            
        } catch (error) {
            console.error("Error From Handle Update", error);
            
        }finally{
            reset()
        }
    }

  return (
   <div>
        <div className='flex flex-col gap-y-4'>
            <form onSubmit={handleSubmit(handleupload)}>
                <div className='flex flex-col gap-y-4'>
                    <div>
                        <Input size="md" label="Name" {...register("title", { required: true })}/>
                         {errors.title && <span className='text-red-500 text-[16px]'>This title field is required</span>}
                    </div>
                    <div>
                       <Textarea variant="outlined" label="description" {...register("description", { required: true })}/>
                        {errors.description && <span className='text-red-500 text-[16px]'>This description field is required</span>}
                    </div>


                    <Controller name="category" control={control} rules={{ required: true }} render={({ field }) => (
                       <Select color="purple" label="Select Version" value={field.value} onChange={(val) => { field.onChange(val);}}>
                            {data?.data?.length > 0 ? (
                                data.data.map((item, index) => (
                                    <Option key={item._id || index} value={item._id}>
                                        {item.title}
                                    </Option>
                                ))
                            ) : (
                                <Option disabled>Loading...</Option>
                            )}
                        </Select>
                       )}
                    />


                    <Button type="submit" variant="filled" color='green' loading={loadingsubcategory} className='w-[10%]'>
                        Upload
                    </Button>
                </div>
            </form>
    {/* sub category table list section */}
        
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
                    {subcategorydata?.data?.slice().reverse().map((item, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 text-center";

                    return (
                        <tr key={item}>
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
                            className="font-normal w-40 truncate"
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
                            {item.category[0]?.title}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <div className='flex items-center gap-x-3 justify-center'>
                            <Button loading={subcategoryloadings} onClick={()=>handledelete(item._id)} color="red">Delete</Button>
                            <Button onClick={()=>handleOpen(item)} color="green">Update</Button>
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
                    <Input size="md" label="Name" value={subcategoryupdate?.title} onClick={()=>setSubcategoryupdate({...subcategoryupdate, title: " "})} onChange={(e)=>setSubcategoryupdate({...subcategoryupdate, title: e.target.value})}/>
                </div>
                <div>
                    <Textarea variant="outlined" label="description" value={subcategoryupdate?.description} onClick={()=>setSubcategoryupdate({...subcategoryupdate, description: " "})} onChange={(e)=>setSubcategoryupdate({...subcategoryupdate, description: e.target.value})}/>
                </div>
                <Select color="purple" label="Select Version" >
                    {data?.data?.map((item , index)=>(
                        <Option key={index} onClick={()=>setSubcategoryupdate({...subcategoryupdate, category: item?._id})}>{item.title}</Option>
                    ))}
                </Select>
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
                <Button loading={updatesubcategoryloadings} variant="gradient" color="green" onClick={handleupdate}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
            </Dialog>
    </div>
  )
}

export default Subcategory
