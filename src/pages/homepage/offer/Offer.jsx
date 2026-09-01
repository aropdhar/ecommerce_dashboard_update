import React, { useState } from 'react'
import { Button, Input, Dialog, DialogHeader, DialogBody, DialogFooter, } from '@material-tailwind/react'
import { useForm } from "react-hook-form"
import { useDeleteofferMutation, useGetAllofferQuery, useUpdateofferMutation, useUploadofferMutation } from '../../../features/api/exclusiveDash'
import { ErrorToast, SuccessToast } from '../../../utils/Toast'


const Offer = () => {
    const [uploadoffer , {isLoading , isError}] = useUploadofferMutation();
    const {data:alloffer , isLoading:offerloading} = useGetAllofferQuery();
    const [deleteoffer, {isLoading:deleteloading}]= useDeleteofferMutation();
    const [offerupdated ,{isLoading:updateloading}] = useUpdateofferMutation();
    const { register, handleSubmit, reset, formState: { errors },} = useForm();
    const [updateoffer , setupdateoffer] = useState()
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = (updatedata) => {
        setOpen(!open);
        setupdateoffer({
            id: updatedata?._id,
            offerdateName: updatedata?.offerdateName,
            offerDate: updatedata?.offerDate
        })
        
    }
    
    
    

    const handleoffer =async (data) => {
        try {
            const response = await uploadoffer(data);
            
            if(response?.data?.data){
                SuccessToast(response?.data?.message)
            }else{
                ErrorToast(response?.error?.data?.message)
            }
            
            
        } catch (error) {
            console.error("Error From Handle offer", error);
            
        }finally{
            reset()
        }
    }
    
    const handledelete = async(itemId) =>{
        try {
            const response = await deleteoffer(itemId);

            if(response?.data?.data){
                SuccessToast(response?.data?.message)
            }
            
        } catch (error) {
            console.error("Error From Handle Deleted", error);
            
        }
        
    }
    
    const handleupdate = async() =>{
        setOpen(!open)
        try {
            const response = await offerupdated(updateoffer);
            
            if(response?.data?.data){
                SuccessToast(response?.data?.message)
            }
        } catch (error) {
            console.error("Error From Handle Update", error);
            
        }
    }
    
  return (
    <>  
        {/* offer Input section */}
        <form onSubmit={handleSubmit(handleoffer)}>
            <div className='flex flex-col gap-y-5 mb-8'>
                <div>
                   <Input label="Offer Name" type='text'  {...register("offerdateName", { required: true })}/>
                   {errors.offerdateName && <span className='text-red-500 text-[16px]'>This offer name field is required</span>}
                </div>
                <div>
                   <Input label="Offer Date" type='number' {...register("offerDate" , { required: true })}/>
                   {errors.offerDate && <span className='text-red-500 text-[16px]'>This offer date field is required</span>}
                </div>
                <Button type="submit" variant="filled" color='green' loading={isLoading} className='w-[10%]'>
                    Upload
                </Button>
            </div>
        </form>
        {/* offer list section */}
        <div class="relative bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <div className='h-[338px] overflow-y-scroll'>
                <table class="w-full text-sm text-left rtl:text-right text-body ">
                    <thead class="text-sm text-body bg-gray-100 border-b border-default-medium sticky top-0 z-10">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Offer name
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Offer Date
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {alloffer?.data?.map((item , index)=>(
                            <tr key={index} class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    {item.offerdateName}
                                </th>
                                <td class="px-6 py-4 text-center">
                                    {item.offerDate}
                                </td>
                                <td class="px-6 py-4 flex items-center justify-center gap-x-2">
                                    <Button loading={deleteloading} onClick={()=>handledelete(item._id)} color="red">Delete</Button>
                                    <Button onClick={()=>handleOpen(item)} color="green">Update</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* offer update section */}
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Offer Update</DialogHeader>
            <DialogBody>
                <div className='flex flex-col gap-y-4'>
                    <div>
                      <Input label="Offer Name" type='text' value={updateoffer?.offerdateName} onClick={()=>setupdateoffer({...updateoffer, offerdateName: " "})} onChange={(e)=>setupdateoffer({...updateoffer, offerdateName: e.target.value})}/>
                    </div>
                    <div>
                       <Input label="Offer Date" type='number' value={updateoffer?.offerDate} onClick={()=>setupdateoffer({...updateoffer, offerDate: " "})} onChange={(e)=>setupdateoffer({...updateoffer, offerDate: e.target.value})}/>
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
            <Button variant="gradient" color="green" onClick={handleupdate}>
                <span>Confirm</span>
            </Button>
            </DialogFooter>
        </Dialog>
    </>
  )
}

export default Offer
