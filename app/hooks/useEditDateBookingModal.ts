import { create } from 'zustand';

interface EditDateBookingStore {
  isOpen: boolean;
  dateRange: any;
  isSave: boolean;
  dateRangeSave: any;
  dateRangeDefaultSave: any;
  handleDateRangePicker: any;
  onSave: () => void;
  onDateRangeSave: (dateRange: any) => void;
  onDateRageDefaultSave: (dateRange: any) => void;
  onHandleDateRangePicker: (handleChange: any) => void;
  onSaveReset: () => void;
  onOpen: (dateRange: any) => void;
  onClose: () => void;
}

const useEditDateBookingModal = create<EditDateBookingStore>((set) => ({
  isOpen: false,
  dateRange: null,
  isSave: false,
  handleDateRangePicker: null,
  dateRangeSave: null,
  dateRangeDefaultSave: null,
  onDateRangeSave: (dateRange: any) => set({ dateRangeSave: dateRange}),
  onDateRageDefaultSave: (dateRange: any) => set({ dateRangeDefaultSave: dateRange }),
  onHandleDateRangePicker: (handleChange: any) => set({ handleDateRangePicker: handleChange }),
  onOpen: (dateRange: any) => set({ isOpen: true, dateRange: dateRange }),
  onClose: () => set({ isOpen: false }),
  onSave: () => set({ isSave: true }),
  onSaveReset: () => set({ isSave: false }),
}));

export default useEditDateBookingModal;
