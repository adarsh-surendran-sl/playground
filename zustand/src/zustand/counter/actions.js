
export const increaseCount = (state) => ({ count: state.count + 1 })
export const resetCount = (state) => ({ count: 0 })


export const actions = (set) => {
    return {
        increaseCount: () => set(increaseCount),
        resetCount: () => set(resetCount)
    }
}