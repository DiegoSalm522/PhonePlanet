import { features } from "../constants/features"

const About = () => {
  return (
    <div className="py-4 mx-8 items-center">
      <h2 className="text-3xl font-semibold text-center pb-8 md:text-4xl lg:text-5xl">
        About Us
      </h2>
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <p className="text-base md:text-lg leading-relaxed mb-4">
          At <span className="text-cyan-600 font-bold">PhonePlanet</span>, we are your trusted destination for finding the best smartphones on the market. Since 2025, we have been dedicated to connecting people with the most advanced mobile technology.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Our mission is to make cutting-edge technology accessible to everyone, offering an exceptional shopping experience, competitive prices, and unmatched customer service.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-cyan-600"
          >
            <div className="text-cyan-600 mb-4 flex justify-center mx-auto">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About