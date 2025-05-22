
import { counterSelector, useCounterStore } from "./zustand/counter/store"


function Counter() {
  const counter = useCounterStore(counterSelector)
  const actions = useCounterStore((state) => state.actions)
  return (
    <div class="counter">
      <span>{counter}</span>
      <button onClick={actions.increaseCount}>one up</button>
    </div>
  )
}

export default function App() {
  const actions = useCounterStore((state) => state.actions)
  console.log({ actions: actions.resetCount })

  return (
    <div class="main">
      <div class="code">
        <div class="code-container">
          <Counter />
          <button style={{ marginTop: "100px" }} onClick={actions.resetCount}>Reset</button>
        </div>
      </div>
      <a href="https://github.com/drcmda/zustand" class="top-right" children="Github" />
      <a href="https://twitter.com/0xca0a" class="bottom-right" children="Twitter" />
      <span class="header-left">Zustand</span>
    </div>
  )
}
