import { create } from "zustand";

interface CreatePlanModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCreatePlanModal = create<CreatePlanModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreatePlanModal;
