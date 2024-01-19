import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();


  return (
    <div>
      <div className="flex gap-6">
        <button className="border-2 rounded-md px-2 py-3 border-green-500 " onClick={() => dispatch(increment())}>
          Increment
        </button>
        <div>{count}</div>
        <button className="border-2 rounded-md px-2 py-3 border-red-500 " onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="border-2 rounded-md px-2 py-3 border-blue-500"
        >
          Increment by value
        </button>
      </div>
    </div>
  );
}

export default App;
