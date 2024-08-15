import { create } from "zustand";

const useModalStore = create((set) => ({
  isClicked: false,
  click: () => set({ isClicked: true }),
  unClicked: () => set({ isClicked: false }),
}));

export default useModalStore;
