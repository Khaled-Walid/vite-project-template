import create from 'zustand';

export interface Store {
  firstValue: string;
  secondValue: string;
  updateInput: (key: string, value: string) => void;
}

export const useFormStore = create<Store>((set) => ({
  firstValue: 'First Value',
  secondValue: 'Second Value',
  updateInput: (key, value) => {
    console.log('updateInput', key, value);
    set((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  },
}));
