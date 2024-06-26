'use client'

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { IProduct } from '@global/interface'
import NextLink from 'next/link'

interface ProductCardProps {
  product: IProduct
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { min, max } = product.variants.reduce(
    (acc, curr) => {
      return {
        min: Math.min(acc.min, curr.price),
        max: Math.max(acc.max, curr.price)
      }
    },
    { min: Infinity, max: -Infinity }
  )

  return (
    <Card
      shadow='sm'
      isBlurred
      as={NextLink}
      href={`/products/${product.slug}`}
      isPressable
      className='w-full bg-gray-100 cursor-pointer'
    >
      <CardBody className='overflow-hidden p-0 relative rounded-large'>
        <Image
          isBlurred
          isZoomed
          removeWrapper
          shadow='md'
          width='100%'
          alt={product.name}
          className='w-full max-w-[280px] object-cover aspect-square'
          src={product.images[0]}
        />
      </CardBody>

      <CardFooter className='p-4 flex justify-between'>
        <div className='flex flex-col items-start max-w-full'>
          <p className='w-full text-xs font-semibold text-gray-400 text-nowrap overflow-hidden text-ellipsis whitespace-nowrap'>
            {product.categories.map((category) => category.name).join(', ')}
          </p>
          <h3 className='w-full font-normal text-base text-nowrap overflow-hidden text-ellipsis whitespace-nowrap'>
            {product.name}
          </h3>
          <p className='w-full text-sm sm:text-base font-semibold text-nowrap overflow-hidden text-ellipsis whitespace-nowrap'>
            {min === max
              ? Intl.NumberFormat('en-DE').format(min) + ' ₫'
              : `${Intl.NumberFormat('en-DE').format(min)} ₫ - ${Intl.NumberFormat('en-DE').format(max)} ₫`}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
