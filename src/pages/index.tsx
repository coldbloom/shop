import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main
          className={`flex min-h-screen flex-col items-center justify-between p-24 w-full ${inter.className}`}
      >
        <h1 className='bg-amber-400'>Main</h1>
        <p>Тег определяет параграф или текстовый абзац. Элемент является блочным, а значит его содержимое всегда
          начинается с новой строки и занимает всю доступную ширину. Следующие один за другим абзацы разделяются между
          собой отбивкой, величину которой можно задавать при помощи CSS свойства margin. Для перевода строки внутри
          абзаца используется тег</p>
        <p>Тег определяет параграф или текстовый абзац. Элемент является блочным, а значит его содержимое всегда
          начинается с новой строки и занимает всю доступную ширину. Следующие один за другим абзацы разделяются между
          собой отбивкой, величину которой можно задавать при помощи CSS свойства margin. Для перевода строки внутри
          абзаца используется тег</p>
        <p>Тег определяет параграф или текстовый абзац. Элемент является блочным, а значит его содержимое всегда
          начинается с новой строки и занимает всю доступную ширину. Следующие один за другим абзацы разделяются между
          собой отбивкой, величину которой можно задавать при помощи CSS свойства margin. Для перевода строки внутри
          абзаца используется тег</p>
        <p>Тег определяет параграф или текстовый абзац. Элемент является блочным, а значит его содержимое всегда
          начинается с новой строки и занимает всю доступную ширину. Следующие один за другим абзацы разделяются между
          собой отбивкой, величину которой можно задавать при помощи CSS свойства margin. Для перевода строки внутри
          абзаца используется тег</p>
        <p>Тег определяет параграф или текстовый абзац. Элемент является блочным, а значит его содержимое всегда
          начинается с новой строки и занимает всю доступную ширину. Следующие один за другим абзацы разделяются между
          собой отбивкой, величину которой можно задавать при помощи CSS свойства margin. Для перевода строки внутри
          абзаца используется тег</p>
        <p>Тег определяет параграф или текстовый абзац. Элемент является блочным, а значит его содержимое всегда
          начинается с новой строки и занимает всю доступную ширину. Следующие один за другим абзацы разделяются между
          собой отбивкой, величину которой можно задавать при помощи CSS свойства margin. Для перевода строки внутри
          абзаца используется тег</p>
      </main>
  )
}
