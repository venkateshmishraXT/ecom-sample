'use client';
import ProductPurchase from '../../../components/ProductPurchase';
import ProductDetails from '../../../components/ProductDetails';
import React from 'react';

export default function ProductId({ params }:any) {
  return (
    params && <div className="mx-auto max-w-7xl">
        <ProductDetails id={params.id} />
      <ProductPurchase />
    </div>
  )
}
