import { create } from 'zustand';

interface EditGuestBookingStore {
  isOpen: boolean;
  totalGuest: any;
  apartmentAllowGuest: any;
  isSave: boolean;
  onSave: () => void;
  onSaveReset: () => void;
  onOpen: (totalGuest: any, apartmentAllowGuest: any) => void;
  onClose: () => void;
}

const useEditGuestBookingModal = create<EditGuestBookingStore>((set) => ({
  isOpen: false,
  totalGuest: null,
  apartmentAllowGuest: null,
  isSave: false,
  onOpen: (totalGuest: any, apartmentAllowGuest: any) =>
    set({
      isOpen: true,
      totalGuest: totalGuest,
      apartmentAllowGuest: apartmentAllowGuest,
    }),
  onClose: () => set({ isOpen: false }),
  onSave: () => set({ isSave: true }),
  onSaveReset: () => set({ isSave: false }),
}));

export default useEditGuestBookingModal;
