'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/header';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleContactClick = () => {
    router.push('/contact-us');
  };

  return (
    <main className='min-h-screen bg-orange-100 '>
      <Header />
      <div className='max-w-4xl mx-auto p-8 flex flex-col items-center'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full flex flex-col items-center'>
          <Image src='/order-confirmation.png' alt='Order Confirmation' width={300} height={300} className='mb-6'/>
          <h1 className='text-4xl font-bold mb-4 text-gray-800'>Thank you for shopping!</h1>
          <div className='text-left w-full'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>What's next?</h2>
            <ul className='list-disc list-inside text-gray-700 mb-6'>
              <li>We will send confirmation of the order and information about its progress by e-mail.</li>
              <li>The order will be processed after your payment is confirmed.</li>
              <li>In case of problems with the payment, you will receive a new link to renew the payment.</li>
              <li>
                Please feel free to{' '}
                <button
                  className='text-blue-600 underline focus:outline-none'
                  onClick={handleContactClick}
                >
                  contact us
                </button>{' '}
                if you have any questions.
              </li>
            </ul>
          </div>
          <button
            className='bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4'
            onClick={handleHomeClick}
          >
            Home
          </button>
        </div>
      </div>
    </main>
  );
}
