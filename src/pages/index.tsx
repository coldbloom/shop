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
      className={`flex min-h-screen flex-col items-center justify-between p-24 w-full ${inter.className}`}
    >
      <h1 className='bg-amber-400'>Main</h1>
      <h1 className='text-2xl'>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>Тег определяет параграф или текстовый абзац. Элемент является блочным, а значит его содержимое всегда начинается с новой строки и занимает всю доступную ширину. Следующие один за другим абзацы разделяются между собой отбивкой, величину которой можно задавать при помощи CSS свойства margin. Для перевода строки внутри абзаца используется тег</p>
      <p>Тег определяет параграф или текстовый абзац. Элемент является блочным, а значит его содержимое всегда начинается с новой строки и занимает всю доступную ширину. Следующие один за другим абзацы разделяются между собой отбивкой, величину которой можно задавать при помощи CSS свойства margin. Для перевода строки внутри абзаца используется тег</p>
      <p>Тег определяет параграф или текстовый абзац. Элемент является блочным, а значит его содержимое всегда начинается с новой строки и занимает всю доступную ширину. Следующие один за другим абзацы разделяются между собой отбивкой, величину которой можно задавать при помощи CSS свойства margin. Для перевода строки внутри абзаца используется тег</p>
    </main>
  )
}
