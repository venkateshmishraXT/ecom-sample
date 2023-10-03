'use client';
import ProductPurchase from '../../../components/ProductPurchase';
import ProductDetails from '../../../components/ProductDetails';

export default function ProductId({ params }:any) {
  console.log(params,'params')
  return (
    params && <div className="mx-auto">
        <ProductDetails id={params.id} />
      <ProductPurchase />
    </div>
  )
}
