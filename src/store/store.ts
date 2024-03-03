import { create } from 'zustand'

export const useStore = create<StoreState>((set) => ({
  toDoList: [],
  addItem: (item: ToDoItem) => set((state: StoreState) => ({ toDoList: [...state.toDoList, item] })),
  updateItem: (toDoItems: ToDoItem[]) => set(() => ({ toDoList: toDoItems })),
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
