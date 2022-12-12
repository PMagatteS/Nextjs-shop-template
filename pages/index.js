import Head from 'next/head'
import Image from 'next/image'
import Card from '../component/Card'
import Layout from '../component/Layout'



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
    <Layout >
   <div className="items-container">
   {data.map((el, index) => <Card item={el} index={index} key={index} ></Card>)}
   </div>
    </Layout>
   
  )
}
