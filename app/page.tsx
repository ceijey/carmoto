import Header from "../components/header"
import FeaturedCar from "../components/featured-car"
import CarGrid from "../components/car-grid"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FeaturedCar />
      <CarGrid />
      <Footer />
    </main>
  )
}
