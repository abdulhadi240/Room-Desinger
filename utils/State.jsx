// nameStore.js
import {create} from 'zustand';

const useNameStore = create((set) => ({
  name1: 'hello',
  updateName1: (newName) => set({ name1: newName }),

  name2: '',
  updateName2: (newName) => set({ name2: newName }),

  name3: '',
  updateName3: (newName) => set({ name3: newName }),
}));

export default useNameStore;
