'use client';
import React, { useEffect } from 'react';
import useNameStore from 'utils/State';

const Name = () => {
  const { name1 } = useNameStore();

  useEffect(() => {
    console.log(name1);
  }, [name1]);

  return (
    <div>{name1} checking</div>
  );
}

export default Name;
