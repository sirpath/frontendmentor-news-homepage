import { Inter } from 'next/font/google'

const fontPrimary = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-primary',
})

const useFonts = [fontPrimary]

/* #####################
 * Magic
 ####################### */
const fontClass = useFonts.map((font) => (
  font.variable
)).join(' ')

export default fontClass
