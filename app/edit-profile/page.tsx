import React from "react";
import EditProfileComponent from "../components/profile/EditProfileComponent";
import Footer from "../components/Footer";

export default function EditProfile() {
  return (
    <div>
      <div className="flex flex-row items-center gap-10 py-20 px-20">
        <div>SideBar</div>
        <div>
          <EditProfileComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
