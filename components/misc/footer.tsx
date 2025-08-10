import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-5">
        <div className="py-1 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <PreviewLink href="">Statically Generated</PreviewLink> with Next.js.
          </h3>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer
