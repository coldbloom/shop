import Image from 'next/image'
import { Inter } from 'next/font/google'
import {increment, decrement} from "@/store/features/counter/ counterSlice";
import {useSelector, useDispatch} from "react-redux";
import {IRootState} from "@/store";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const count = useSelector((state: IRootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className='bg-amber-400'>Main</h1>
      <h1 className='text-2xl'>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </main>
  )
}
