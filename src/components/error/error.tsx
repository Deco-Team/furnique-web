import { Button, Image } from '@nextui-org/react'
import NextLink from 'next/link'

const ErrorPage = () => {
  return (
    <div className='min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-96px)] pb-24 flex flex-col items-center justify-center'>
      <Image width={500} height={400} src='/404.svg' alt='error' />
      <h1 className='font-semibold text-3xl pb-4 text-center'>Bạn đã truy cập đúng đường dẫn chứ?</h1>
      <h1 className='font-medium text-xl pb-4 text-center'>Đường dẫn bạn vừa truy cập hiện không còn khả dụng</h1>
      <Button as={NextLink} href='/' className='bg-[var(--primary-orange-color)] text-white px-10 py-3 rounded-full'>
        Quay lại trang chủ
      </Button>
    </div>
  )
}

export default ErrorPage
