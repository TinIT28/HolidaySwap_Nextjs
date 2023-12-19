import { create } from 'zustand';

interface CreateReviewStore {
  isOpen: boolean;
  availableId: any;
  userId: any;
  bookingId: any;
  isCreated: boolean;
  onCreated: () => void;
  onCreatedReset: () => void;
  onOpen: (availableId: any, userId: any, bookingId: any) => void;
  onClose: () => void;
}

const useCreateReviewModal = create<CreateReviewStore>((set) => ({
  isOpen: false,
  availableId: null,
  userId: null,
  bookingId: null,
  isCreated: false,
  onCreated: () => set({ isCreated: true }),
  onCreatedReset: () => set({ isCreated: false }),
  onOpen: (availableId: any, userId: any, bookingId: any) =>
    set({ isOpen: true, availableId: availableId, userId: userId, bookingId: bookingId }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateReviewModal;
