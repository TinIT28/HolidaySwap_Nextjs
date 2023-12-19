'use client';
import React from 'react';
import ModalBaseDetail from './ModalBaseDetail';
import useEditApartmentModal from '@/app/hooks/useEditApartmentModal';
import ModalBaseEdit from './ModalBaseEdit';

const ModalEditApartment = () => {
  const EditApartmentModal = useEditApartmentModal();

  const bodyContent = (
    <div className="w-full flex flex-col justify-between ">
      <div className="flex flex-col gap-1">
        <div>Property name</div>
        <input className="rounded-md w-[50%]" type="text" />
      </div>
      <div className="mt-3">
        <div>public time</div>
      </div>

      <div className="flex flex-col items-end justify-end  mt-10">
        <button className="px-5 py-3 rounded-md bg-common text-white bottom-0 mt-16 ">
          Update
        </button>
      </div>
    </div>
  );

  return (
    <ModalBaseEdit
      body={bodyContent}
      isOpen={EditApartmentModal.isOpen}
      onClose={EditApartmentModal.onClose}
    />
  );
};

export default ModalEditApartment;
