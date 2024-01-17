import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "@/store";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import MainLayout from "@/components/layout/templates"

const queryClient = new QueryClient() // здесь могут быть настройки для всего приложения

export default function App({Component, pageProps}: AppProps) {
    const Layout = (Component as any).layout || MainLayout
    return <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    </Provider>
}
