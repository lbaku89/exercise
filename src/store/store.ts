import { create } from 'zustand'

export const useStore = create<StoreState>((set) => ({
  toDoList: [],
  addItem: (item: ToDoItem) => set((state: StoreState) => ({ toDoList: [...state.toDoList, item] })),
  updateItem: (toDoItems: ToDoItem[]) => set(() => ({ toDoList: toDoItems })),

  //   const newToDoList =

  //   toDoList: state.toDoList.filter((_, i) => i !== index) })),
  // bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}))

export type StoreState = {
  toDoList: ToDoItem[]
  addItem: (item: ToDoItem) => void
  updateItem: (toDoItems: ToDoItem[]) => void
}

type ToDoItem = {
  id: string
  name: string
  done: boolean
}
