"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, Home, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NotFoundPage() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4'>
      <div>
        {/* 404 Graphics */}
        <div className='relative mb-6'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-9xl font-extrabold text-gray-200'>404</div>
          </div>
          <div className='relative z-10 flex justify-center py-6 mb-2'>
            <div className='relative w-36 h-36'>
              <div className='absolute w-full h-full rounded-full bg-blue-100 animate-pulse'></div>
              <Image
                src='/images/logo.svg'
                alt='Company Logo'
                width={80}
                height={80}
                priority
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              />
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className='w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl'>
          {/* Card Header */}
          <div className='bg-gradient-to-r from-gray-800 to-gray-200 p-5 text-white'>
            <h1 className='text-3xl font-bold'>Page Not Found</h1>
            <p className='mt-1 text-gray-100'>We couldn&apos;t find the page you were looking for</p>
          </div>

          {/* Card Body */}
          <div className='p-6'>
            <div className='mb-6 text-gray-600'>
              <p className='mb-4'>
                The page you requested might have been removed, renamed, or is temporarily unavailable.
              </p>

              <div className='flex items-center py-3 px-4 bg-gray-50 rounded-lg border border-gray-200 mb-5'>
                <Search size={18} className='text-gray-400 mr-2' />
                <div className='h-5 w-full bg-gray-200 rounded animate-pulse'></div>
              </div>

              <div className='flex flex-col space-y-3'>
                <Button
                  onClick={() => router.back()}
                  variant='outline'
                  className='flex items-center justify-center gap-2 py-2 transition-all hover:translate-x-1'
                >
                  <ChevronLeft size={16} />
                  Go Back
                </Button>

                <Button onClick={() => router.push("/")} className='flex items-center justify-center gap-2 py-2'>
                  <Home size={16} />
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
