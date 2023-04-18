import '@/styles/globals.css'
import Layout from "@/pages/component/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps}/>
      </Layout>
  )
}
