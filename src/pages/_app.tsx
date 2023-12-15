import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient() // здесь могут быть настройки для всего приложения

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </Provider>
}
