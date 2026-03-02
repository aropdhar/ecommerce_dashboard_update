import React from 'react'
import { Button, Select, Option } from '@material-tailwind/react'

const Flashsale = () => {
  return (
    <>  
       {/* flashsale select section */}
        <div className='flex flex-col gap-y-5 mb-8'>
            <Select color="purple" label="Select Version">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
            <Select color="purple" label="Select Version">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
            <Button variant="filled" color='green' loading={false} className='w-[10%]'>
                Search
            </Button>
        </div>
       {/* Flashsale product list section */}
        <div class="relative bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <div className='h-[390px] overflow-y-scroll'>
                <table class="w-full text-sm text-left rtl:text-right text-body ">
                    <thead class="text-sm text-body bg-gray-100 border-b border-default-medium sticky top-0 z-10">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <label for="table-checkbox-27" class="sr-only">Table checkbox</label>
                                </div>
                            </th>
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
                        {[...new Array(10)].map((_ , index)=>(
                            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="table-checkbox-28" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>
                                        <label for="table-checkbox-28" class="sr-only">Table checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">
                                    Silver
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
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
        {/* flashsale pagination section */}
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

export default Flashsale
