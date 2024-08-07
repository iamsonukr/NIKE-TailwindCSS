import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { images } from "../assets/images"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container py-10 ">
      {/* section 1 */}
      <div className="flex-1">
        <h1 className='mt-10 font-palanquin text-4xl max-sm:[72px]  font-bold inline-block'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>We Provice you</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Super Quality  </span> Shoes
        </h1>
        <p className='text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm' >Discover stylish Nike arrivals, quality comfort, and innovation for your active life. Ensure premium confort and </p>
   
        <Button label="Shop now" iconURL={arrowRight} />
        


      </div>

      {/* section 2 */}
      <div className="flex-1 flex justify-center items-center">
        <img src={images.shoe8} alt="shoe" width={570} height={522} />
      </div>

    </section>
  )
}

export default SuperQuality