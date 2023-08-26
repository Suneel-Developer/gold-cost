"use client"
// pages/community/page.js
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout/page';
import AddCommunityPage from './add';
import AllCommunityPage from './all';
import ProductPage from './product';
// Import other components similarly

const CommunityPage = () => {
  const [activeComponent, setActiveComponent] = useState('add'); // Initial active component

  let componentContent;

  switch (activeComponent) {
    case 'add':
      componentContent = <AddCommunityPage />;
      break;
    case 'all':
      componentContent = <AllCommunityPage />;
      break;
    case 'product':
      componentContent = <ProductPage />;
      break;
    // Add other cases for your components
    default:
      componentContent = null;
  }

  return (
    <DashboardLayout>
      {componentContent}
    </DashboardLayout>
  );
};

export default CommunityPage;
