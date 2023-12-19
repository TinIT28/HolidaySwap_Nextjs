import { create } from 'zustand';

interface DeactiveResortModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDeactiveResortModal = create<DeactiveResortModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDeactiveResortModal;
