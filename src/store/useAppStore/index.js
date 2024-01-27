// import axios from "axios";
import { create } from "zustand";
// import { API_ENDPOINT } from "../../api/Api";

// const uploadedUsers = useUserStore.getState().uploadedUsers;

export const useAppStore = create((set, get) => ({
  posts: [],
  uploadedUsers: [],
}));
