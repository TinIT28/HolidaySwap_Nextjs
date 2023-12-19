import { create } from 'zustand';

interface EditPointModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditPointModal = create<EditPointModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditPointModal;
