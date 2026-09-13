import React from 'react'
import { Button, Select, Option } from '@material-tailwind/react'
import { useGetAllBestSellingQuery } from '../../../features/api/exclusiveDash'
import ProductSkeleton from '../../../productskeleton/ProductSkeleton';

const BestSelling = () => {

    const {data , isLoading , isError} = useGetAllBestSellingQuery();
    
    if(isLoading){
        return <ProductSkeleton/>
    }

    const handledelete = (id) =>{
        try {
            console.log(id);
            
        } catch (error) {
            console.error("Error From Handle Delete", error);
            
        }
    }
    
  return (
    <>  
       {/* BestSelling product list section */}
        <div class="relative bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <div className='h-[338px] overflow-y-scroll'>
                <table class="w-full text-sm text-left rtl:text-right text-body ">
                    <thead class="text-sm text-body bg-gray-100 border-b border-default-medium sticky top-0 z-10">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((item , index)=>(
                            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    {item?.product?.name}
                                </th>
                                <td class="px-6 py-4">
                                    <div className='w-10 h-10 overflow-hidden'>
                                         <img src={item?.product?.image[0]} alt="Not Found" className='w-full h-full object-cover'/>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    {item?.product?.category?.title}
                                </td>
                                <td class="px-6 py-4">
                                    {item?.product?.price}
                                </td>
                                <td class="px-6 py-4 flex items-center justify-center gap-x-2">
                                    <Button onClick={()=>handledelete(item._id)} color="red">Delete</Button>
                                    <Button color="green">Update</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        {/* BestSelling pagination section */}
            <nav class="flex items-center sticky bottom-0 z-50 flex-column flex-wrap md:flex-row justify-between p-4 bg-gray-100" aria-label="Table navigation">
                <span class="text-sm font-normal text-body mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-heading">1-10</span> of <span class="font-semibold text-heading">1000</span></span>
                <ul class="flex -space-x-px text-sm">
                    <li>
                        <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-brand-softer box-border border border-default-medium hover:bg-brand-soft hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">...</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">5</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default BestSelling
