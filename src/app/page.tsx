import Image from 'next/image'
import Header from '@/components/Header'
import CallToAction from '@/components/CallToAction'
import Media from '@/components/Media'
import JoinUs from '@/components/JoinUs'
import Footer from '@/components/Footer'

export default function Home() {

  const content = (
    <div className=''>
      <Header />
      <CallToAction />
      <Media />
      <JoinUs />
      <Footer />
    </div>
  )

  return content
}
