import React from 'react';

type ButtonProps = {
    url: string;
  children: string;
}

export default function Button({ url, children }: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={async () => {
        console.log('this is clicked');
        // const { shortUrl } = await createLink(url);
        console.log('shortUrl', shortUrl);
      }}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-romanBlack hover:bg-romanYellow hover:text-romanBlack focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </button>
  );
}
