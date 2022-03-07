import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">{children}</div>
    </div>
  );
}
