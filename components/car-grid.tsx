"use client"

import CarCard from "./car-card"

const cars = [
  { 
    id: 1, 
    name: "GT Pro", 
    price: "$189,000", 
    image: "/red-sports-car-luxury.jpg", 
    specs: "0-60 mph: 2.8s | 650 HP | V8 Twin Turbo | RWD",
    description: "A high-performance supercar built for speed and precision, combining aerodynamic design with a powerful twin-turbo V8 engine."
  },
  { 
    id: 2, 
    name: "Sedan Elite", 
    price: "$85,000", 
    image: "/black-sedan-luxury-car.jpg", 
    specs: "0-60 mph: 5.2s | 350 HP | V6 Engine | AWD",
    description: "A refined luxury sedan offering elegance, smooth handling, and advanced driver-assistance features."
  },
  { 
    id: 3, 
    name: "SUV Commander", 
    price: "$95,000", 
    image: "/white-suv-luxury-vehicle.jpg", 
    specs: "0-60 mph: 5.8s | 400 HP | V8 Engine | AWD",
    description: "A commanding SUV engineered for both power and comfort, ideal for family trips and off-road adventures."
  },
  { 
    id: 4,
    name: "Coupe Velocity",
    price: "$125,000",
    image: "/blue-coupe-sports-car.jpg",
    specs: "0-60 mph: 3.5s | 500 HP | Turbocharged V6 | RWD",
    description: "A sleek and aggressive coupe designed for thrilling acceleration and agile cornering."
  },
  { 
    id: 5, 
    name: "Roadster X", 
    price: "$155,000", 
    image: "/silver-convertible-roadster.jpg", 
    specs: "0-60 mph: 3.2s | 550 HP | V8 Engine | Convertible",
    description: "An open-top roadster offering a perfect blend of luxury, performance, and wind-in-your-hair driving freedom."
  },
  { 
    id: 6, 
    name: "Compact City", 
    price: "$45,000", 
    image: "/green-compact-car-modern.jpg", 
    specs: "0-60 mph: 7.5s | 200 HP | 1.8L Engine | FWD",
    description: "A stylish and efficient compact car made for urban environments with great fuel economy."
  },
  { 
    id: 7,
    name: "Wagon Adventure",
    price: "$72,000",
    image: "/brown-wagon-car-family.jpg",
    specs: "0-60 mph: 6.2s | 280 HP | 2.5L Turbo | AWD",
    description: "A practical wagon offering spacious interiors and all-terrain capability for family adventures."
  },
  { 
    id: 8, 
    name: "Hybrid Eco", 
    price: "$55,000", 
    image: "/gray-hybrid-car-eco-friendly.jpg", 
    specs: "0-60 mph: 8.1s | 180 HP | Hybrid Engine | FWD",
    description: "An environmentally friendly hybrid that balances excellent fuel efficiency with a comfortable driving experience."
  },
  { 
    id: 9, 
    name: "Truck Titan", 
    price: "$78,000", 
    image: "/black-pickup-truck-powerful.jpg", 
    specs: "0-60 mph: 6.8s | 320 HP | V8 Engine | 4x4",
    description: "A tough pickup truck built for performance, power, and heavy-duty work with off-road capability."
  },
  { 
    id: 10, 
    name: "Van Family", 
    price: "$62,000", 
    image: "/white-van-family-vehicle.jpg", 
    specs: "0-60 mph: 7.2s | 250 HP | V6 Engine | FWD",
    description: "A spacious and comfortable van perfect for families, with advanced safety and infotainment features."
  },
  { 
    id: 11,
    name: "Hatchback Pro",
    price: "$48,000",
    image: "/orange-hatchback-sporty.jpg",
    specs: "0-60 mph: 7.0s | 220 HP | 2.0L Turbo | FWD",
    description: "A sporty hatchback combining compact design, versatility, and fun-to-drive performance."
  },
  { 
    id: 12,
    name: "Luxury Limousine",
    price: "$220,000",
    image: "/gold-limousine-luxury.jpg",
    specs: "0-60 mph: 4.5s | 600 HP | V12 Engine | AWD",
    description: "A luxury limousine delivering supreme comfort, elegant design, and powerful performance for elite travelers."
  },
  { 
    id: 13,
    name: "Crossover Urban",
    price: "$68,000",
    image: "/teal-crossover-urban-car.jpg",
    specs: "0-60 mph: 6.5s | 300 HP | 2.0L Turbo | AWD",
    description: "A stylish crossover that combines SUV practicality with compact urban agility."
  },
  { 
    id: 14,
    name: "Performance M",
    price: "$175,000",
    image: "/dark-gray-performance-car.jpg",
    specs: "0-60 mph: 3.0s | 580 HP | V8 Twin Turbo | RWD",
    description: "A high-performance masterpiece designed for driving enthusiasts seeking speed and precision."
  },
  { 
    id: 15,
    name: "Classic Retro",
    price: "$95,000",
    image: "/red-sports-car-luxury.jpg?height=300&width=400",
    specs: "0-60 mph: 5.5s | 380 HP | V6 Engine | RWD",
    description: "A beautifully restored retro model blending nostalgic charm with modern technology."
  },
  { 
    id: 16,
    name: "Electric Future",
    price: "$105,000",
    image: "/teal-crossover-urban-car.jpg?height=300&width=400",
    specs: "0-60 mph: 4.2s | 400 HP | Dual Motor | EV",
    description: "An all-electric car offering cutting-edge battery tech, long range, and instant torque."
  },
  { 
    id: 17,
    name: "Pickup Pro",
    price: "$82,000",
    image: "/brown-wagon-car-family.jpg?height=300&width=400",
    specs: "0-60 mph: 6.9s | 330 HP | V6 Engine | 4x4",
    description: "A powerful pickup designed to deliver excellent towing capacity and off-road reliability."
  },
  { 
    id: 18,
    name: "Minivan Plus",
    price: "$58,000",
    image: "/gold-limousine-luxury.jpg?height=300&width=400",
    specs: "0-60 mph: 7.4s | 260 HP | V6 Engine | FWD",
    description: "A modern minivan built for comfort, practicality, and family-friendly versatility."
  },
  { 
    id: 19,
    name: "Sedan Sport",
    price: "$92,000",
    image: "/black-sedan-luxury-car.jpg?height=300&width=400",
    specs: "0-60 mph: 5.0s | 360 HP | Turbocharged Engine | RWD",
    description: "A sporty sedan offering a perfect mix of performance, luxury, and daily usability."
  },
  { 
    id: 20,
    name: "SUV Luxury",
    price: "$135,000",
    image: "/gray-hybrid-car-eco-friendly.jpg?height=300&width=400",
    specs: "0-60 mph: 5.1s | 450 HP | V8 Engine | AWD",
    description: "A premium SUV with luxurious interiors, cutting-edge safety, and powerful all-terrain performance."
  },
]

export default function CarGrid() {
  return (
    <section id="models" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Collection</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Our Complete Lineup</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From compact city cars to powerful performance machines, discover the perfect vehicle for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
