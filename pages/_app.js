import Header from '@/components/Header';
import '../app/globals.css'; 
import Layout from '../layouts/layout';

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Header/>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
