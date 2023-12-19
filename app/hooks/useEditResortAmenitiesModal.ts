import { create } from 'zustand';

interface EditResortAmenitiesModalStore {
  isOpen: boolean;
  resortAmenities: any;
  amenitiesType: any;
  onOpen: (resortAmenities: any, amenitiesType: any) => void;
  onClose: () => void;
}

const useEditResortAmenitiesModal = create<EditResortAmenitiesModalStore>((set) => ({
  isOpen: false,
  resortAmenities: null,
  amenitiesType: null,
  onOpen: (resortAmenities: any, amenitiesType: any) =>
    set({ isOpen: true, resortAmenities: resortAmenities, amenitiesType: amenitiesType }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditResortAmenitiesModal;
