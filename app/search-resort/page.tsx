import React from "react";
import Header from "../components/Header";
import SearchResortSidebar from "../components/sidebar-search-resort/SearchResortSidebar";
import SearchResult from "../components/sidebar-search-resort/SearchResult";
import SearchResortSidebarBottom from "../components/sidebar-search-resort/SearchResortSidebarBottom";
import Footer from "../components/Footer";
import Provider from "../components/Provider";
import getCurrentUser from "../actions/getCurrentUser";

export default async function SearchResort() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Header currentUser={currentUser} />
      <div className="bg-[#F5F5F7] h-[370px] w-full flex items-center justify-center ">
        <div className="text-5xl mt-10">Search Resort</div>
      </div>
      <div className="px-[100px] w-full h-auto bg-white flex flex-row">
        <div className="flex flex-col">
          <SearchResortSidebar />
          <SearchResortSidebarBottom />
        </div>
        <SearchResult />
      </div>
      <Footer />
    </>
  );
}
