import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=20");
  const data = await res.json()

  return{
    props:{data}
  }
}

export default function Home({data}) {
  return (
   <>
   </>
  )
}
