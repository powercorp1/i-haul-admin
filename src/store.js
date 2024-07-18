import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCardStore = create((set) => ({
  body:[],
  setBody:(body)=>{
    set({body});
  }
}));
