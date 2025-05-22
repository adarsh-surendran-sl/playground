import { create } from "zustand"
import { initialState } from "./initialState"
import { actions, increaseCount } from "./actions"
import { immer } from "zustand/middleware/immer"
import { devtools, persist } from "zustand/middleware"




export const useCounterStore = create(
  devtools(
    immer(
      // persist(
      (set) => ({
        ...initialState,
        // actions: {
        //   increaseCount: () => set((state) => ({ count: state.count + 1 }))
        // }
        actions: actions(set)
      }),
      {
        name: "count"
      }
      // )
    )
  )

)

export const counterSelector = (state) => state.count
export const counterActionsSelector = (state) => state.actions