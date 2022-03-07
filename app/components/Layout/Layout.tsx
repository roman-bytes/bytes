import React  from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {children}
    </main>
  );
}
