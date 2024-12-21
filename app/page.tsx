import Image from 'next/image'
import { MapPin, Utensils, Umbrella, Bus, Hotel, Download, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Boumerdas Smart City</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#destinations" className="hover:underline">Destinations</a></li>
              <li><a href="#transport" className="hover:underline">Transport</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Discover the Beauty of Boumerdas, Algeria</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your all-in-one travel companion for exploring Boumerdas. Book accommodations, discover hidden gems, 
              and navigate the city like a local. From pristine beaches to historical sites, let us guide you through 
              the best of what Boumerdas has to offer.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-12">App Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Hotel className="w-12 h-12 text-blue-500" />}
                image="/placeholder.svg?height=200&width=300"
                title="Easy Booking"
                description="Find and book the perfect accommodation in Boumerdas with just a few taps. Choose from a wide range of hotels, hostels, and vacation rentals."
              />
              <FeatureCard 
                icon={<MapPin className="w-12 h-12 text-blue-500" />}
                image="/placeholder.svg?height=200&width=300"
                title="Explore Attractions"
                description="Discover Boumerdas' hidden gems, from beautiful beaches to historical landmarks. Get insider tips and recommendations from locals."
              />
              <FeatureCard 
                icon={<Bus className="w-12 h-12 text-blue-500" />}
                image="/placeholder.svg?height=200&width=300"
                title="Transportation Guide"
                description="Navigate Boumerdas like a pro with our comprehensive transportation guide. Find the best bus routes and travel options to your destinations."
              />
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section id="destinations" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DestinationCard 
                image="https://interieur.gov.dz/images/Boumerds01.jpg"
                title="Boumerdas Beach"
                type="Beach"
                rating={4.5}
              />
              <DestinationCard 
                image="https://live.staticflickr.com/4308/35952639076_8c28e7dd01_b.jpg"
                title="La Casbah Dellys"
                type="Nature"
                rating={4.8}
              />
              <DestinationCard 
                image="https://viedeslivres.com/wp-content/uploads/2021/05/Boumerdes.jpg"
                title="Ruines"
                type="Histoire"
                rating={4.3}
              />
                <DestinationCard 
                image="https://boumerdes.city/wp-content/uploads/2024/04/Monument-aux-Martyrs-Place-5-Juillet-Boumerdes-400x250.jpg"
                title="Centre ville"
                type="tourism"
                rating={4.0}
              />
            </div>
          </div>
        </section>

        {/* Transportation Section */}
        <section id="transport" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Getting Around</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Popular Bus Routes</h3>
              <ul className="space-y-4">
                <li className="flex items-center p-2 bg-gray-100 rounded">
                  <Bus className="w-6 h-6 mr-3 text-blue-500" />
                  <div>
                    <p className="font-semibold">Boumerdas City Center to Boumerdas Beach</p>
                    <p className="text-sm text-gray-600">Frequent departures, scenic coastal route</p>
                  </div>
                </li>
                <li className="flex items-center p-2 bg-gray-100 rounded">
                  <Bus className="w-6 h-6 mr-3 text-blue-500" />
                  <div>
                    <p className="font-semibold">Boumerdas to Algiers</p>
                    <p className="text-sm text-gray-600">Regular service to the capital city</p>
                  </div>
                </li>
                <li className="flex items-center p-2 bg-gray-100 rounded">
                  <Bus className="w-6 h-6 mr-3 text-blue-500" />
                  <div>
                    <p className="font-semibold">Boumerdas to Tizi Ouzou</p>
                    <p className="text-sm text-gray-600">Explore the beautiful Kabylie region</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Boumerdas?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Download our app now and unlock the best of Boumerdas. Whether you're a local or a tourist, 
              our app will enhance your experience and help you discover the magic of this beautiful Algerian city.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Boumerdas Travel App. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <a href="#" className="hover:text-blue-400">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, image, title, description }:{icon:any,image:any,title:any,description:any}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="flex justify-center mb-4">{icon}</div>
{/*       <Image src={image} alt={title} width={300} height={200} className="w-full h-40 object-cover rounded-md mb-4" /> */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  )
}

function DestinationCard({ image, title, type, rating }:{image:any,title:any,type:any,rating:any}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <Image src={image} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 flex items-center mb-2">
          {type === 'Beach' ? (
            <Umbrella className="w-5 h-5 mr-2 text-blue-500" />
          ) : (
            <MapPin className="w-5 h-5 mr-2 text-green-500" />
          )}
          {type}
        </p>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

