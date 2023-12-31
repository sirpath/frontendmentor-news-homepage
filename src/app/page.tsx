import type { Metadata } from 'next'
import BlogContents from '@/Components/BlogContents'
import Footer from '@/Components/Footer'
import HeroSection from '@/Components/HeroSection'
import NavBar from '@/Components/NavBar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'News-Hompage',
}

const PageHome = () => (
  <main className="flex min-h-screen flex-col items-center">
    <NavBar />
    <HeroSection />
    <BlogContents />
    <Footer />
  </main>
)

export default PageHome
