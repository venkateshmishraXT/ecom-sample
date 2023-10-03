import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import ProductPurchase from '../components/ProductPurchase'
import ProductDetails from '../components/ProductDetails'

export default function Home() {

  return (
    <div className="mx-auto">
      <Navbar />
      <ProductDetails />
      <ProductPurchase />
      <Footer />
    </div>
  )
}
