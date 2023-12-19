import { create } from "zustand";

interface AparmentAmenitiesModalStore {
  isOpen: boolean;
  data: any;
  id: any;
  onOpen: (data: any) => void;
  onClose: () => void;
}

const useAparmentAmenitiesModal = create<AparmentAmenitiesModalStore>(
  (set) => ({
    isOpen: false,
    data: null,
    id: null,
    onOpen: (data: any) => set({ isOpen: true, data: data }),
    onClose: () => set({ isOpen: false }),
  })
);

export default useAparmentAmenitiesModal;
