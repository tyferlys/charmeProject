import '@/styles/globals.css'
import Layout from "@/pages/component/layout/Layout";
import {Provider} from "react-redux";
import {store} from "@/state/store";

export default function App({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <Layout>
              <Component {...pageProps}/>
          </Layout>
      </Provider>
  )
}
