// ReviewModal.tsx
import React from "react";
import { Modal } from "antd";
import Link from "next/link";
import RatingPicker from "../sidebar-search-resort/RatingPicker";
import RatingPickerRview from "./RatingPickerReview";

interface ReviewModalProps {
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
}
const ReviewModal: React.FC<ReviewModalProps> = ({
  visible,
  onCancel,
  onOk,
}) => {
  return (
    <Modal
      className="w-auto h-auto" // Sử dụng class CSS để điều chỉnh kích thước modal
      title="Rating Apartment"
      centered
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      style={{ maxWidth: "100%", maxHeight: "80%" }} // Sử dụng style để thiết lập maxWidth và maxHeight
    >
      <div>
        <div className="w-[650px] mt-10 ">
          <Link href="/detail-resort" className="flex flex-row">
            <img className="w-24 h-24  mr-3" src="/images/resort1.jpg" alt="" />
            <div>
              <div className="text-[20px] text-gray-800">
                Resort Terra Mi-A Nha Trang Province
              </div>
              <div className="text-[15px] text-gray-500">
                {" "}
                19 {"->"} 25/10/2023
              </div>
              <div className="text-[15px] text-gray-500">
                065 Resort Terra Mi-A Khanh Hoa province
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <div>
            <div>Rating star:</div>
          </div>
          <div className=" ">
            <RatingPickerRview />
          </div>
          <div className="mt-5">
            Description:
            <textarea
              className="w-full h-[100px] border border-gray-500 px-3"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
