import Head from 'next/head'
import Image from 'next/image'
import Card from '../component/Card'
import Layout from '../component/Layout'
import { useStateContext } from '../context/useStateContext'



export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=20");
  const data = await res.json()
  data.map((el) => el.quantity = 1)

  return{
    props:{data}
  }
}

export default function Home({data}) {
  const {searchQuery, category, items, setItems} = useStateContext()
  setItems(data)
  return (
    <Layout home>
   <div className="items-container">
   {items.filter(
              (item) =>
                item.title.includes(searchQuery) &&
                item.category.startsWith(category)
            )
            .map((el, index) => <Card item={el} index={index} key={index} ></Card>)}
   </div>
    </Layout>
   
  )
}
