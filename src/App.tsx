import './App.css'
import { useCounterStore } from './store'
import { useEffect } from 'react'

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count:", count);
}

const App = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />
}

const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount();
  }, [count]);

  return (
    <div>
      Count: {count}
      <div className="button-container">
        <button onClick={incrementAsync}>IncrementAsync</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App
