import { create } from 'zustand';

interface EditPropertyTypeModalStore {
  isOpen: boolean;
  propertyType: any;
  onOpen: (propertyType: any) => void;
  onClose: () => void;
  isSuccess: boolean;
  onEditSuccess: () => void;
  onEditReset: () => void;
}
interface IPropertyType {
  id: number;
  propertyTypeName: string;
  propertyTypeDescription: string;
  deleted: boolean;
}
const useEditPropertyTypeModal = create<EditPropertyTypeModalStore>((set) => ({
  isOpen: false,
  propertyType: null,
  onOpen: (propertyType: any) => set({ isOpen: true, propertyType: propertyType }),
  onClose: () => set({ isOpen: false }),
  isSuccess: false,
  onEditSuccess: () => set({ isSuccess: true }),
  onEditReset: () => set({ isSuccess: false }),
}));

export default useEditPropertyTypeModal;
