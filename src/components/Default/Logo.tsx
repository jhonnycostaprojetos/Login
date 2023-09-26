import Image from 'next/image'

export default function Logo() {
  return (
    <div className={`flex items-center justify-center mb-2`}>
      <Image src="/user.png"
        alt="Vercel Logo"
        className={``}
        width={100}
        height={24}
        priority />
    </div>
  )
}