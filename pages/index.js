import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../component/Card'
import { useStateContext } from '../context/useStateContext'


export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=2");
  const data = await res.json()
  data.map((el) => el.quantity = 1)

  return{
    props:{data}
  }
}

export default function Home({data}) {

  return (
   <div className="items-container">
   {data.map((el, index) => <Card item={el} index={index} key={index} ></Card>)}
   </div>
   
  )
}
