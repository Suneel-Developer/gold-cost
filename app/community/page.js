"use client";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout/page";
import AddCommunity from "@/components/CommunityComponents/add-community/page";
import AllCommunityPage from "@/components/CommunityComponents/all-community/page";
import ProductPage from "@/components/CommunityComponents/product/page";
import ProductsPage from "@/components/CommunityComponents/products/page";
import ChatPage from "@/components/CommunityComponents/chat/page";
import AddProduct from "@/components/CommunityComponents/add-product/page";
import SingleProductPage from "@/components/CommunityComponents/single-product/page";
import CommodityExchangePage from "@/components/CommunityComponents/commodity-exchange/page";

const Community = () => {
  const [createMode, setCreateMode] = useState(false);
  const [showallCommunity, setShowallCommunity] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showSeeAllProducts, setShowSeeAllProducts] = useState(false);
  const [showChatPage, setShowChatPage] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showSingleProduct, setShowSingleProduct] = useState(false);
  const [showExchangeCommodity, setShowExchangeCommodity] = useState(false);



  const handleshowAllCommunity = () => {
    setCreateMode(true);
    setShowallCommunity(true);
    setShowProducts(false)
    setShowSingleProduct(false)
    setShowExchangeCommodity(false)
  };

  const handleshowProduct = ()=>{
    setShowProducts(true)
    setCreateMode(false);
    setShowallCommunity(false);
    setShowSingleProduct(false)
    setShowExchangeCommodity(false)
  }

  const handleshowSeeAllProduct = ()=>{
    setShowSeeAllProducts(true)
    setShowProducts(false)
    setCreateMode(false);
    setShowallCommunity(false);
    setShowSingleProduct(false)
    setShowExchangeCommodity(false)
  }
  const handleshowChat = ()=>{
    setShowChatPage(true)
    setShowSeeAllProducts(false)
    setShowProducts(false)
    setCreateMode(false);
    setShowallCommunity(false);
    setShowSingleProduct(false)
    setShowExchangeCommodity(false)
  }

  const handleshowAddProduct = ()=>{
    setShowAddProduct(true)
    setShowChatPage(false)
    setShowSeeAllProducts(false)
    setShowProducts(false)
    setCreateMode(false);
    setShowallCommunity(false);
    setShowSingleProduct(false)
    setShowExchangeCommodity(false)
  }
  const handleSingleProduct = ()=>{
    setShowSingleProduct(true)
    setShowAddProduct(false)
    setShowChatPage(false)
    setShowSeeAllProducts(false)
    setShowProducts(false)
    setCreateMode(false);
    setShowallCommunity(false);
    setShowExchangeCommodity(false)
  }

  const handleExchangeCommodity = ()=>{
    setShowExchangeCommodity(true)
    setShowSingleProduct(false)
    setShowAddProduct(false)
    setShowChatPage(false)
    setShowSeeAllProducts(false)
    setShowProducts(false)
    setCreateMode(false);
    setShowallCommunity(false);
  }

  


  return (
    <DashboardLayout>
      {!createMode && !showallCommunity && !showProducts && !showSeeAllProducts && !showChatPage && !showAddProduct && !showSingleProduct && !showExchangeCommodity && <AddCommunity  onHandle={handleshowAllCommunity} />}
      {showallCommunity && <AllCommunityPage onHandle={handleshowProduct} />}
      {showProducts &&  <ProductPage handleSeeAll={handleshowSeeAllProduct} showChat={handleshowChat} showAddProduct={handleshowAddProduct} />}
      {showSeeAllProducts && <ProductsPage showChat={handleshowChat} showSingleProduct={handleSingleProduct} />}
      {showChatPage && <ChatPage   />}
      {showAddProduct && <AddProduct />}
      {showSingleProduct && <SingleProductPage showChat={handleshowChat} showExchangeCommodity={handleExchangeCommodity} />}
      {showExchangeCommodity && <CommodityExchangePage  />}

    </DashboardLayout>
  );
};

export default Community;
