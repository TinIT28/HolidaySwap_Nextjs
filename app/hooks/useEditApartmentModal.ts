import { create } from 'zustand';

interface AparmentReviewModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditApartmentModal = create<AparmentReviewModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditApartmentModal;
