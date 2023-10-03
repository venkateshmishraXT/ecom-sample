import ProductPurchase from '../components/ProductPurchase'
import ProductDetails from '../components/ProductDetails'

export default function Home() {
  return (
    <div className="mx-auto">
      <ProductDetails />
      <ProductPurchase />
    </div>
  )
}
