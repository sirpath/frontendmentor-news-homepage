import Image from 'next/image'
import Link from 'next/link'

type HeroDetail = {
  subject: string
  detail: string
}

const detailHero: Array<HeroDetail> = [{
  subject: 'Hydrogen VS Electric Cars',
  detail: 'Will hydrogen-fueled cars ever catch up to EVs?',
},
{
  subject: 'The Downsides of AI Artistry',
  detail: 'What are the possible adverse effects of on-demand AI image generation?',
},
{
  subject: 'Is VC Funding Drying Up?',
  detail: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
},
]

const HeroSection = () => (
  <div className="w-full max-w-7xl px-5 py-6 md:flex md:gap-4">
    <div className="">
      <div>
        <Image className="md:hidden" width={686} height={600} src="./images/image-web-3-mobile.jpg" alt="bg-hero-mobile" />
        <Image className="hidden md:block" width={1460} height={600} src="./images/image-web-3-desktop.jpg" alt="bg-hero-desktop" />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="pt-5 text-5xl font-bold text-very-dark-blue lg:w-1/2 lg:text-6xl">
          The Bright Future of Web 3.0?
        </div>
        <div className="h-full pt-5 text-hcolor md:flex md:flex-col md:content-between lg:w-1/2">
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
          But is it really fulfilling its promise?
          <div className="pt-5 md:align-bottom">
            <button className="bg-soft-red px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white duration-200 hover:bg-soft-red/80" type="button">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 bg-very-dark-blue p-5 md:mt-0 md:w-full">
      <h1 className="pb-6 text-3xl font-semibold text-soft-orange md:text-4xl">New</h1>
      {detailHero.map(({ subject, detail }) => (
        <div key={subject} className="pb-5 text-hcolor md:self-center">
          <Link href="/" className="font-semibold text-white hover:text-soft-orange">{subject}</Link>
          <p className="pb-6 pt-2 text-primary/70">{detail}</p>
          <hr />
        </div>
      ))}
    </div>
  </div>
)

export default HeroSection
