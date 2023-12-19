import { create } from 'zustand';

interface MaintanceResortModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMaintanceResortModal = create<MaintanceResortModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useMaintanceResortModal;
