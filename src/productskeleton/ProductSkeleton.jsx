import React from 'react'
import { Card } from '@material-tailwind/react'

const ProductSkeleton = () => {
  return (
    <div className="w-full space-y-5">
      {/* Table */}
      <Card className="h-[420px] w-full overflow-y-scroll">
        <table className="w-full min-w-max table-auto text-center">
          {/* Table Heading Skeleton */}
          <thead className="sticky top-0 z-10">
            <tr>
              {[
                "Name",
                "Description",
                "Price",
                "Image",
                "Category",
                "Subcategory",
                "Action",
              ].map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <div className="h-4 w-20 mx-auto rounded bg-gray-300 animate-pulse" />
                </th>
              ))}
            </tr>
          </thead>

          {/* Product Rows Skeleton */}
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <tr key={item}>
                {/* Name */}
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="h-4 w-24 mx-auto rounded bg-gray-200 animate-pulse" />
                </td>

                {/* Description */}
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="h-4 w-40 mx-auto rounded bg-gray-200 animate-pulse" />
                </td>

                {/* Price */}
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="h-4 w-16 mx-auto rounded bg-gray-200 animate-pulse" />
                </td>

                {/* Image */}
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-10 h-10 mx-auto rounded-md bg-gray-200 animate-pulse" />
                </td>

                {/* Category */}
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="h-4 w-24 mx-auto rounded bg-gray-200 animate-pulse" />
                </td>

                {/* Subcategory */}
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="h-4 w-28 mx-auto rounded bg-gray-200 animate-pulse" />
                </td>

                {/* Actions */}
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center justify-center gap-x-3">
                    <div className="h-10 w-20 rounded-lg bg-gray-200 animate-pulse" />
                    <div className="h-10 w-20 rounded-lg bg-gray-200 animate-pulse" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default ProductSkeleton
