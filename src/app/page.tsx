import type { Metadata } from 'next'
import BlogContents from '@/Components/BlogContents'
import HeroSection from '@/Components/HeroSection'
import NavBar from '@/Components/NavBar'
import Test from '@/Components/Test'

export const metadata: Metadata = {
  title: 'Home',
  description: 'News-Hompage',
}

const PageHome = () => (
  <main className="flex min-h-screen flex-col items-center">
    <NavBar />
    <HeroSection />
    <BlogContents />
    <Test />
  </main>
)

export default PageHome
