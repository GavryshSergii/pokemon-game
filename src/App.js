import './App.css';

import Header from './components/Header'
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg2 from './assets/bg2.jpg';

function App() {
    return (
        <>
            <Header
                title='This is title'
                descr='This is Description!'
            />
            <Layout
                title='This is title'
                descr='This is Description!'
                urlBg={bg2}
            />
            <Layout
                title='This is title'
                descr='This is Description!'
                colorBg='red'
            />
            <Layout
                title='This is title'
                descr='This is Description!'
                urlBg={bg2}
            />
            <Footer/>
        </>
    );
}

export default App;
