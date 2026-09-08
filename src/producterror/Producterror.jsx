import { Card } from '@material-tailwind/react'
import React from 'react'

const Producterror = ({retryfunction}) => {
  return (
  <div className="w-full space-y-5">
      {/* Error Card */}
      <Card className="w-full min-h-[420px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center px-5">
          
          {/* Error Icon */}
          <div className="w-20 h-20 rounded-full bg-red-100 
                          flex items-center justify-center mb-5">
            <span className="text-4xl">⚠️</span>
          </div>

          {/* Error Title */}
          <h3 className="text-xl font-semibold text-gray-800">
            Failed to Load Products
          </h3>

          {/* Error Message */}
          <p className="text-gray-500 mt-2 max-w-md">
            We couldn't load the product list right now.
            Please check your internet connection and try again.
          </p>

          {/* Retry Button */}
          <button onClick={retryfunction} className="mt-6 px-6 py-2.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Try Again
          </button>
        </div>
      </Card>
    </div>
  )
}

export default Producterror
