import Image from 'next/image'

type DataBlog = {
  image: string
  no: string
  subject: string
  detail: string

}

const dataBlog: Array<DataBlog> = [
  {
    image: '/images/image-retro-pcs.jpg',
    no: '01',
    subject: 'Reviving Retro PCs',
    detail: 'What happens when old PCs are given modern upgrades?',
  },
  {
    image: '/images/image-top-laptops.jpg',
    no: '02',
    subject: 'Top 10 Laptops of 2022',
    detail: 'Our best picks for various needs and budgets.',
  },
  {
    image: '/images/image-gaming-growth.jpg',
    no: '03',
    subject: 'The Growth of Gaming',
    detail: 'How the pandemic has sparked fresh opportunities.',
  },

]

const BlogContents = () => (

  <section className="flex flex-col gap-8 px-5 py-14">
    {dataBlog.map(({ image, detail, no, subject }) => (
      <div key={no} className="flex">
        <div className="h-full w-full max-w-[110px]">
          <Image className="object-cover" width={200} height={254} src={image} alt="retro computer" />
        </div>
        <div className="pl-5">
          <div className="text-3xl font-semibold text-secondary">{no}</div>
          <h3 className="py-3 text-xl font-semibold text-very-dark-blue">{subject}</h3>
          <p className="text-hcolor">{detail}</p>
        </div>
      </div>
    ))}

  </section>
)

export default BlogContents
