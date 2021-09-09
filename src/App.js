import './App.css';

import Header from './components/Header'
import Layout from "./components/Layout";
import Footer from "./components/Footer";

//import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
//import bg3 from './assets/bg3.jpg';

function App() {
    return (
        <>
            <Header
                title='This is title'
                descr='This is Description!'
            />
            <Layout urlBg={bg2}/>
            <Layout colorBg='red'/>
            <Layout urlBg={bg2}/>
            <Footer/>
        </>
    );
}

export default App;
