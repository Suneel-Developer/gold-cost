"use client";
import { useState } from "react";
import CreateGroup from "@/components/HomeComponents/CreateGroup/page";
import Groups from "@/components/HomeComponents/Groups/page";
import LeastGroup from "@/components/HomeComponents/LeastGroup/page";
import MemberDonation from "@/components/HomeComponents/MemberDonation/page";
import DashboardLayout from "../../components/DashboardLayout/page";
import CustomDonation from "../../components/HomeComponents/CustomDonation/page";
import Donate from "../../components/HomeComponents/DonatePage/page";
import Main from "./main";

const Dashboard = () => {
  const [createMode, setCreateMode] = useState(false);
  const [showListGroup, setShowListGroup] = useState(false);
  const [showMemberGroup, setShowMemberGroup] = useState(false);
  const [showCustomDonation, setShowCustomDonation] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  const handleEidtMode = () => {
    setCreateMode(true);
    setShowListGroup(false);
    setShowMemberGroup(false);
    setShowCustomDonation(false);
    setShowDonation(false);
  };

  const handleToggleListGroup = () => {
    setShowListGroup(true);
    setCreateMode(false);
    setShowMemberGroup(false);
    setShowCustomDonation(false);
    setShowDonation(false);
  };

  const handleshowMemberGroup = () => {
    setShowMemberGroup(true);
    setShowListGroup(false);
    setCreateMode(false);
    setShowCustomDonation(false);
    setShowDonation(false);
  };

  const handleshowCustomDonation = () => {
    setShowCustomDonation(true);
    setCreateMode(false);
    setShowMemberGroup(false);
    setShowListGroup(false);
    setShowDonation(false);
  };

  const handleshowDonation = () => {
    setShowDonation(true);
    setShowCustomDonation(false);
    setShowMemberGroup(false);
    setShowListGroup(false);
    setCreateMode(false);
  };
  return (
    <DashboardLayout>
      <CreateGroup onHandle={handleEidtMode} />
      
      {!createMode &&
        !showListGroup &&
        !showMemberGroup &&
        !showCustomDonation &&
        !showDonation && <Main onHandle={handleEidtMode} />}
      {createMode && <Groups onHandle={handleToggleListGroup} />}
      {showListGroup && <LeastGroup onHandle={handleshowMemberGroup} />}
      {showMemberGroup && (
        <MemberDonation onHandle={handleshowCustomDonation} />
      )}
      {showCustomDonation && <CustomDonation onHandle={handleshowDonation} />}
      {showDonation && <Donate />}
    </DashboardLayout>
  );
};

export default Dashboard;
