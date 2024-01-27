import { Component } from "react";
import { create } from "zustand";

export const useModalStore = create((set, get) => ({
  isCreatePostModalOpen: false,
  setIsCreatePostModalOpen: (bool) => set({ isCreatePostModalOpen: bool }),
  children: <Component />,
}));
