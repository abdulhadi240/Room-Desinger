'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import useNameStore from '../utils/State';

export const ThemeTypes = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { updateName3 } = useNameStore();

  const handleItemClick = (name) => {
    updateName3(name)
    setSelectedItem(name);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <Link href={'/Upload'}><div>
        <div
          key={index}
          className={`relative cursor-pointer ${item.name === selectedItem ? 'border border-blue-500' : ''}`}
          onClick={() => handleItemClick(item.name)}
        >
          <Image src={item.url} alt={item.name} height={300} width={300} />
        </div>
        <div>
            <h1>
                {item.name}
            </h1>
        </div>
        </div>
        </Link>
        
      
      ))}
    </div>
  );
};

