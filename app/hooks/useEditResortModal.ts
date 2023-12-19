import { create } from "zustand";

interface LoginModalStore {
  isOpen: boolean;
  data: any;
  onOpen: (data: any) => void;
  onClose: () => void;
}

const useEidtResortModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  data: null,
  onOpen: (data: any) => set({ isOpen: true, data: data }),
  onClose: () => set({ isOpen: false }),
}));

export default useEidtResortModal;
