// pages/add.js
import React from 'react';
import Link from 'next/link';

const Add = () => {
  return (
    <div>
      <h2>Add Component</h2>
      <ul>
        <li>
          <Link href="/product">
            Product
          </Link>
        </li>
        <li>
          <Link href="/all">
            All
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Add;
