import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import axios from "axios";
import { useEffect, useState } from 'react';

const Details=({ data }) =>{
    return (
        <div>
            <Header />
            <Navbar />
            <section>{JSON.stringify(data)}</section>
        </div>
    )
}
export async function getServerSideProps({params}){
    const res= await fetch('http://localhost:3000/api/product/'+params.slug)
    const data= await res.json();
  return {
    props: {
        data:data
    },
  };
}

export default Details;