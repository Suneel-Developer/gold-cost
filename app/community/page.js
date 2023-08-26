// pages/community/page.js
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout/page';
import ProductPage from '@/components/product/page';
import AddCommunity from '@/components/add-community/page';
import AllCommunityPage from '@/components/all-community/page';
import ProductsPage from '@/components/products/page';
import SingleProductPage from '@/components/single-product/page';
import AddProduct from '@/components/add-product/page';
import ChatPage from '@/components/chat/page';
import CommodityExchangePage from '@/components/commodity-exchange/page';

const Page = () => {
  return (
    <DashboardLayout>
      {/* <AddCommunity /> */}
      {/* <AllCommunityPage /> */}
      {/* <ProductPage /> */}
      {/* <ProductsPage /> */}
      {/* <SingleProductPage /> */}
      {/* <AddProduct /> */}
      {/* <ChatPage /> */}
      <CommodityExchangePage />
    </DashboardLayout>
  );
};

export default Page;
