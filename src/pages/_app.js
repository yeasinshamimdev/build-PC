import RootLayout from '@/components/Layouts/RootLayout'
import { LoginForm } from '@/components/UI/LoginForm'
import store from '@/redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
 
  return(
    <Provider store={store}>
      <RootLayout>

      <LoginForm />
        <Component {...pageProps} />
      </RootLayout>
    </Provider> 
  )
}
