import React, { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100">
        <section className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Discover The Best Destinations In The World
              </h1>
              <button
                onClick={() => {
                  const isLoggedIn =
                    localStorage.getItem('loggedIn') === 'true';
                  if (isLoggedIn) {
                    navigate('/FormPage');
                  } else {
                    navigate('/Login');
                  }
                }}
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-400	transform transition-transform duration-300 hover:scale-105"
              >
                Get Start
              </button>{' '}
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 ">
              <div className="relative">
                <img
                  src="https://scth.scene7.com/is/image/scth/albujairi-terrace-in-diriyah:crop-660x337?defaultImage=albujairi-terrace-in-diriyah."
                  alt="Destination 1"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105
"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded text-gray-800 font-semibold">
                  100+ Destinations
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://scth.scene7.com/is/image/scth/naila-art-gallery-in-riyadh:crop-660x337?defaultImage=naila-art-gallery-in-riyadh "
                  alt="Destination 2"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105
"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded text-gray-800 font-semibold">
                  100% Beautiful
                </div>
              </div>{' '}
              <div className="relative">
                <img
                  src="https://halayallaimages-new.s3.me-south-1.amazonaws.com/images/venues/provider_venue_661e62672372f."
                  alt="Destination 2"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105
"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded text-gray-800 font-semibold">
                  100% Natural
                </div>
              </div>
              {/* <div className="relative">
                <img
                  src="https://halayallaimages-new.s3.me-south-1.amazonaws.com/images/venues/provider_venue_661e62672372f."
                  alt="Destination 3"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 h-full"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded text-gray-800 font-semibold">
                  100% Beautiful
                </div>
              </div> */}
              <div className="relative">
                <img
                  src="https://media.licdn.com/dms/image/D4D12AQEFhtA_M-MVFA/article-cover_image-shrink_720_1280/0/1689832461204?e=2147483647&v=beta&t=aEEbOcPpb387qrO46EmuKU5x0LZ_2-vW7DreLxRtOec"
                  alt="Destination 2"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105
"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded text-gray-800 font-semibold">
                  Iconic
                </div>
              </div>
              {/* <div className="relative">
                <img
                  src="https://scth.scene7.com/is/image/scth/visit-maraya-in-alula-1:crop-460x620?defaultImage=visit-maraya-in-alula-1"
                  alt="Destination 4"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div> */}
            </div>
          </div>
        </section>
      </div>

      {/* Section Recommend  */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 p-7">
              <img
                src="https://scth.scene7.com/is/image/scth/about-taif_hero_banner_desktop-2:crop-1920x1080?defaultImage=about-taif_hero_banner_desktop-2&wid=1920&hei=1080"
                alt="Destination 1"
                className="w-48 h-48 rounded-2xl	 object-cover shadow-md transform transition-transform duration-300 hover:scale-105"
              />
              <img
                src="https://scth.scene7.com/is/image/scth/about-alula_hero_banner_desktop-2:crop-1920x1080?defaultImage=about-alula_hero_banner_desktop-2&wid=1920&hei=1080"
                alt="Destination 2"
                className="w-48 h-48 rounded-2xl	object-cover shadow-md transform transition-transform duration-300 hover:scale-105 "
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8 lg:text-left">
              {/* <h2 className="text-xl font-semibold text-gray-900">About</h2> */}
              <h1 className="text-4xl font-bold  text-gray-900">
                Most Visites destinations{' '}
              </h1>
              <p className="mt-4 text-gray-600 ">
                Let's make your dream destinations here. We provide many
                destinations, and we offer the best places to visit every month.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">60M+</h3>
                  <p className="text-gray-600">Tourist</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                  <p className="text-gray-600">Destinations</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">5000+</h3>
                  <p className="text-gray-600">Activites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Feuter! */}
      <div className="bg-gray-100">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-orange-500 text-lg font-semibold">
              What We Give
            </h2>
            <h3 className="text-4xl font-bold text-gray-800">
              Best Features For You
            </h3>
            <p className="text-gray-600 mt-4">
              We will provide the best features for those of you who want to
              travel comfortably .
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105
"
            >
              <div className="text-orange-500 mb-4 ">
                <svg
                  xmlns=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeWidth="2"
                    d="M3 10h12M9 21V3M9 3l3.5 6.5L17 3v18"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                Personalized Trip Creation
              </h4>
              {/* <p className="text-gray-600 mt-2">We have provided several choices of destinations and very cheap traveling packages.</p> */}
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105
"
            >
              <div className="text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path strokeWidth="2" d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                Downloadable Itineraries
              </h4>
              {/* <p className="text-gray-600 mt-2">We provide an experienced tour guide and promise to help you and understand the places.</p> */}
            </div>
            {/* <!-- Feature 3 --> */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105
"
            >
              <div className="text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeWidth="2"
                    d="M3 7h18M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2M5 7v14a2 2 0 002 2h10a2 2 0 002-2V7"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                Integrated Map View
              </h4>
              {/* <p className="text-gray-600 mt-2">We will also make it easier for users to book tickets or hotels in the place you want.</p> */}
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
            <p className="text-gray-600 mt-4">
              We are committed to providing the best travel experiences for our
              customers, combining technology and expertise to deliver
              exceptional services.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="https://scth.scene7.com/is/image/scth/visit-maraya-in-alula-1:crop-460x620?defaultImage=visit-maraya-in-alula-1 "
                alt="About Us"
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 "
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 2024, our mission has always been to make travel
                planning as seamless and enjoyable as possible. With a team of
                dedicated professionals and cutting-edge technology, we strive
                to create unforgettable travel experiences for our clients.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-4">
                We envision a world where travel is accessible to everyone,
                where planning a trip is as exciting as the journey itself. We
                are continually innovating to bring the best services to our
                customers, ensuring every trip is a memorable one.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Team
              </h3>
              <p className="text-gray-600">
                Our team of experts is passionate about travel and technology.
                We work tirelessly to understand your needs and provide
                personalized travel plans that exceed your expectations.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
