import RootLayout from '@/components/Layouts/RootLayout';
import LoginForm from '@/components/UI/LoginForm';
import store from '@/redux/store';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SessionProvider } from "next-auth/react";
import { useEffect } from 'react';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps: {session, ...pageProps} }) {

  useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    return () => {
      AOS.refresh();
    };
  }, []);
 
  return(
    <SessionProvider session={session}>
      <Provider store={store}>
        <RootLayout>
        <LoginForm />
          <Component {...pageProps} />
        </RootLayout>
      </Provider> 
    </SessionProvider>
  )
}
