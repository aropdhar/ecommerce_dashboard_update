import React from 'react'
import { Button, Select, Option, Input } from '@material-tailwind/react'
import { useForm } from "react-hook-form"
import { useGetAllofferQuery, useUploadofferMutation } from '../../../features/api/exclusiveDash'
import { ErrorToast, SuccessToast } from '../../../utils/Toast'

const Offer = () => {
    const [uploadoffer , {isLoading , isError}] = useUploadofferMutation();
    const {data:alloffer , isLoading:offerloading} = useGetAllofferQuery();
    const { register, handleSubmit, reset, formState: { errors },} = useForm();
    
    
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
        {/* Flashsale product list section */}
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
                                    <Button color="red">Delete</Button>
                                    <Button color="green">Update</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Offer
