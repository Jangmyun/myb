import { create } from "zustand";

const useModalStore = create((set) => ({
  isClicked: false,
  click: () => set({ isClicked: true }),
  unClicked: () => set({ isClicked: false }),
}));

const useHeaderUserStore = create((set) => ({
  isClicked: false,
  click: () => set({ isClicked: true }),
  unClick: () => set({ isClicked: false }),
}));

export { useHeaderUserStore, useModalStore };
