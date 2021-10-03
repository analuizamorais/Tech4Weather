import React from 'react';
import Navbar from '../components/Navbar'
import Search from '../components/Search';
//import Footer from '../components/Footer'
import Api from '../services/api'

export default function App() {
    return (
        <>
            <Navbar />
            <Search />
            <Api />
        </>
    );
}