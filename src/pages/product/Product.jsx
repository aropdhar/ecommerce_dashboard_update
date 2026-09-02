import { Input ,Select, Option, Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm , Controller } from "react-hook-form"
import { useGetAllCategoryQuery, useGetAllSubCategoryQuery, useUploadproductMutation } from '../../features/api/exclusiveDash';
import { ErrorToast, SuccessToast } from '../../utils/Toast';


const Product = () => {

   const [value, setValue] = useState('');
   const {register, handleSubmit, control, reset, formState: { errors },} = useForm();
   const [uploadproduct, {isLoading , isError}] = useUploadproductMutation();
   const {data:categorydata , isLoading:categoryloading} = useGetAllCategoryQuery();
   const {data:subcategorydata , isLoading:subcategoryloading} = useGetAllSubCategoryQuery();

   const handleupload = async (data) => {
    try {
      const plainText = data.description.replace(/<[^>]+>/g, "").trim();

      const formData = new FormData();
      formData.append("name", data.productname);
      formData.append("description", plainText);
      formData.append("category", data.category);
      formData.append("subcategory", data.subcategory);
      formData.append("price", data.productprice);
      formData.append("discountPrice", data.productdiscount);
      formData.append("rating", data.productrating);
      formData.append("review", data.productreviews);
      formData.append("image", data.image[0]); 

      const response = await uploadproduct(formData);
      if(!response?.data?.data){
        ErrorToast(response?.error?.data?.message)
      }else{
        SuccessToast(response?.data?.message)
      }
      
    } catch (error) {
      console.error("Error From Handle Upload", error);
    }finally{
      reset()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleupload)}>
        <div className='flex flex-col gap-y-6'>
          {/* product name section  */}
          <div>
             <Input size="md" label="Product Name" {...register("productname" , { required: true})}/>
             {errors.productname && <span className='text-red-500 text-[16px]'>This product name field is required</span>}
          </div>

          {/* product description section  */}
          <div className='flex flex-col gap-y-2 mb-12'>
            <label htmlFor="description">Description</label>
              <Controller name="description" control={control} rules={{ required: "Description is required",  validate: (value) => { const strippedText = value?.replace(/<(.|\n)*?>/g, "").trim(); return (strippedText && strippedText.length > 0) || "Description is required";},}} render={({ field: { onChange, value } }) => (
                  <ReactQuill theme="snow" value={value || ""} onChange={onChange} className='h-[200px]' /> 
                )}
              />
              {errors.description && (
                <span className="text-red-500 text-[16px] mt-12">
                  {errors.description.message}
                </span>
              )}
          </div>

          {/* Product Price section  */}
          <div>
            <Input size="md" label="Product Price" type='number' {...register("productprice", { required: true })}/>
            {errors.productprice && <span className='text-red-500 text-[16px]'>This product price field is required</span>}
          </div>

          <div className='flex items-start gap-x-3'>

            {/* product image section  */}
            <div class="flex items-center  rounded-[8px] justify-center w-[30%]">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-50 bg-[#E5E7EB] border-2 border-dashed border-gray-400 rounded-[8px] cursor-pointer hover:bg-gray-200">
                  <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
                      <svg class="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
                      <p class="mb-2 text-sm"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                      <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" {...register("image", { required: true })}/>
                  {errors.image && <span className='text-red-500 text-[16px]'>This image field is required</span>}
              </label>
            </div> 

            {/* product discount , subcategory , product price , subcategory , category , product reviews , product rating section  */}
            <div className='w-full flex flex-col gap-y-3'>
                <div className='w-full flex items-start justify-between'>
                  {/* product category & discount section  */}
                    <div className='flex flex-col w-[45%] gap-y-3'>
                      <div>
                        {categorydata?.data?.length > 0 && (
                          <Controller name="category"  control={control}  rules={{ required: "category is required" }}  render={({ field: { onChange, value } }) => (
                                <Select  color="purple"  label="Category"  value={value}  onChange={(val) => onChange(val)} error={!!errors.category}>
                                    {categorydata?.data?.filter((item) => item && item._id).map((item , index)=>(
                                      <Option key={index} value={item._id}>{item.title}</Option>
                                    ))}
      
                                </Select>
                            )}
                        />)
                        }
                          
                        {errors.category && (
                          <span className="text-red-500 text-sm">{errors.category.message}</span>
                        )}
                      </div>
                      <div>
                        <Input size="md" label="Product Discount" type='number'  {...register("productdiscount", { required: true })}/>
                        {errors.productdiscount && <span className='text-red-500 text-[16px]'>This product discount field is required</span>}
                      </div>
                    </div>

                    {/* product subcategory & rating section  */}
                    <div className='flex flex-col w-[45%] gap-y-3'>
                      <div>
                          {subcategorydata?.data?.length > 0 && 
                            (<Controller  name="subcategory"  control={control}  rules={{ required: "subcategory is required" }}  render={({ field: { onChange, value }}) => (
                                    <Select  color="purple"  label="SubCategory"  value={value}  onChange={(val) => onChange(val)} error={!!errors.subcategory}>
                                      {subcategorydata?.data?.filter((item) => item && item._id)?.map((item , index)=>(
                                        <Option key={index} value={item._id}>{item.title}</Option>                          
                                      ))}
                                    </Select>
                                  )}
                            />)
                          }
                              
                          {errors.subcategory && (
                            <span className="text-red-500 text-sm">{errors.subcategory.message}</span>
                          )}
                      </div>
                      <div>
                          <Input size="md" label="Product Rating 0 ~ 5" type='number' {...register("productrating", { required: true })}/>
                          {errors.productrating && <span className='text-red-500 text-[16px]'>This product rating field is required</span>}
                      </div>
                    </div>
                </div>
                {/* product reviews section  */}
                <div>
                   <Input size="md" label="Product Reviews" type='text' {...register("productreviews", { required: true })}/>
                   {errors.productreviews && <span className='text-red-500 text-[16px]'>This Product Reviews field is required</span>}
                </div>
            </div>
          </div>
          <Button type="submit" variant="filled" color='green' loading={false} className='w-[10%]'>
              Upload
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Product
