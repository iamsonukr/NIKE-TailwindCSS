import Nav from './components/Nav'
import Hero from './sections/Hero'
import {CustomerReviews, Footer, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality,} from './sections/index'


const App = () => {

  return (
    <div className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding-x py-10">
        <SpecialOffer/>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 wp+-full">
        <Subscribe/>
      </section>
      <section className="bg-black padding-t pb-8">
        <Footer/>
      </section>
    </div>
  )
}

export default App