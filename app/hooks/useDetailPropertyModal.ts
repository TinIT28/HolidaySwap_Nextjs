import { create } from "zustand";

interface DetailPropertyModalStore {
  isOpen: boolean;
  data: any;
  id: any;
  onOpen: (data: any, id: any) => void;
  onClose: () => void;
}

const useDetailPropertyModal = create<DetailPropertyModalStore>((set) => ({
  isOpen: false,
  data: null,
  id: null,
  onOpen: (data: any, id: any) => set({ isOpen: true, data: data, id: id }),
  onClose: () => set({ isOpen: false }),
}));

export default useDetailPropertyModal;
