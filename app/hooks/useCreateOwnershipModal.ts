import { create } from 'zustand';

interface CreateOwnershipModalStore {
  isOpen: boolean;
  dataResort: any;
  currentUser: any;
  isSuccess: boolean;
  onOpen: (dataResort: any, currentUser: any) => void;
  onClose: () => void;
  onSuccess: () => void;
  onSuccessReset: () => void;
}

const useCreateOwnershipModal = create<CreateOwnershipModalStore>((set) => ({
  isOpen: false,
  dataResort: null,
  currentUser: null,
  isSuccess: false,
  onOpen: (dataResort: any, currentUser: any) =>
    set({ isOpen: true, dataResort: dataResort, currentUser: currentUser }),
  onClose: () => set({ isOpen: false }),
  onSuccess: () => set({ isSuccess: true }),
  onSuccessReset: () => set({ isSuccess: false }),
}));

export default useCreateOwnershipModal;
