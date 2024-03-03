'use client'

import { useStore } from '@/store/store'
import { useShallow } from 'zustand/react/shallow'
import { StoreState } from '@/store/store'
import { useState } from 'react'

export default function ClientComponent() {
  const [removeItemIdList, setRemoveItemIdList] = useState<string[]>([])
  const [toDoList, addItem, updateItem] = useStore(
    useShallow((state: StoreState) => [state.toDoList, state.addItem, state.updateItem])
  )
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <div className="w-[300px] overflow-hidden">
        <div className="flex w-[300px] justify-between">
          <input
            value={inputValue}
            type="text"
            style={{ padding: '0.5rem', backgroundColor: 'lightgray' }}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          ></input>
          <button
            onClick={() => {
              addItem({ id: crypto.randomUUID(), name: inputValue, done: false })
            }}
          >
            추가
          </button>
        </div>
        <button
          onClick={() => {
            const newToDoList = toDoList.filter((item) => !removeItemIdList.includes(item.id))
            updateItem(newToDoList)
          }}
        >
          삭제하기
        </button>
        <ul>
          {toDoList.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRemoveItemIdList([...removeItemIdList, item.id])
                    } else {
                      const filteredItems = removeItemIdList.filter((id) => id !== item.id)
                      setRemoveItemIdList(filteredItems)
                    }
                  }}
                ></input>
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
