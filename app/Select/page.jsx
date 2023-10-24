'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import useNameStore from 'utils/State';
import Link from 'next/link';

const data = [
  {
    names: 'Interior',
    url: '/Interior',
    src: 'https://www.contractorbhai.com/wp-content/uploads/2017/12/Benefits-Modern-Minimal-Interior-Design-Contractorbhai.jpg',
  },
  {
    names: 'Exterior',
    url: '/Exterior',
    src: 'https://www.build-review.com/wp-content/uploads/2022/12/AdobeStock_521077579.jpg',
  },
];

const Page = () => {
  const { updateName1, name1 } = useNameStore();
  const [selected, setSelected] = useState('');

  const handleClick = (dataName) => {
    setSelected(dataName);
    updateName1(dataName);
    console.log(name1);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-64 gap-28">
        {data.map((data, index) => (
          <Link href={data.url}><div
            className="transition-all cursor-pointer hover:scale-125"
            onClick={() => handleClick(data.names)}
            key={index}
          >
            <Image src={data.src} width={700} height={700} alt="Interior" />
            <div>
              <h1>{data.names} Designs</h1>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
