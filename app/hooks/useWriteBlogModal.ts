import { create } from 'zustand';

interface AparmentReviewModalStore {
  isOpen: boolean;
  isSuccess: boolean;
  onSuccess: () => void;
  onSuccessReset: () => void;
  onOpen: () => void;
  onClose: () => void;
}

const useWriteBlogModal = create<AparmentReviewModalStore>((set) => ({
  isOpen: false,
  isSuccess: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onSuccess: () => set({ isSuccess: true }),
  onSuccessReset: () => set({ isSuccess: false }),
}));

export default useWriteBlogModal;
