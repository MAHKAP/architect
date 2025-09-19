import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
//import { FaHome, FaDraftingCompass, FaProjectDiagram } from "react-icons/fa";

import { FaBuilding, FaDraftingCompass, FaProjectDiagram } from "react-icons/fa";
//import ContactForm from "./ContactForm";
import Counters from "./Counters";
import CountUp from "react-countup";

const testimonials = [
  { text: "Excellent structural design services, delivered on time with great professionalism.", author: "Mr. Sharma" },
  { text: "Innovative architects who turned our dream home into reality.", author: "Mrs. Patel" },
  { text: "Outstanding work quality and timely delivery!", author: "Mr. Paranjape" },
  { text: "Professional and very creative team. All the best!", author: "Mr. Kulkarni" },
  { text: "Reliable consultants with excellent project supervision.", author: "Mr. Naik" },
];

const projects = [
  { image: "/architect/projects/project1.jpg", title: "Luxury Villa" },
  { image: "/architect/projects/project2.jpg", title: "Shopping Complex" },
  { image: "/architect/projects/project3.jpg", title: "Corporate Office" },
  { image: "/architect/projects/project4.jpg", title: "Highway Construction" },
  { image: "/architect/projects/project5.jpg", title: "Apartment Tower" },
];

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section
  id="home"
  className="relative h-[90vh] flex items-center justify-center text-center"
>
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/architect/Hero2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Hero Content */}
  <div className="relative z-10 text-white px-6">
    <h2 className="text-4xl md:text-6xl font-bold mb-4">
      Building Strong Foundations with Innovation
    </h2>
    <p className="text-lg md:text-xl mb-6">
      Trusted RCC Consultants & Architects with 15+ Years of Excellence
    </p>

    <Button component={RouterLink}
                              to="/contact"
                              variant="contained"
                              color="secondary"
                              size="large"
                            >
                              Get Consultation
              </Button>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:flex items-center gap-10">
          <img
            src="/architect/About.jpeg"
            alt="About Us"
            className="rounded-lg shadow-md md:w-1/2"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">About Us</h3>
            <p className="text-gray-700 mb-4">
              We are a team of expert RCC consultants and architects,
              delivering reliable structural designs and innovative solutions
              for residential, commercial, and industrial projects.
            </p>
            <p className="text-gray-700">
              With over 200 successful projects, we focus on quality,
              durability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-10">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <FaBuilding className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Structural Design</h4>
              <p>Safe and reliable RCC structural design for long-lasting strength.</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <FaDraftingCompass className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Architectural Planning</h4>
              <p>Creative, functional, and aesthetic architectural designs.</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <FaProjectDiagram className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Project Supervision</h4>
              <p>On-site supervision ensuring quality & timely project completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Counters Section */}
       <Counters />
      
      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-10">Project Gallery</h3>

          <Slider
            infinite={true}
            autoplay={true}
            autoplaySpeed={0}      // continuous scroll
            speed={3000}           // controls smoothness
            cssEase="linear"       // linear motion
            slidesToShow={4}       // 4 images in row
            slidesToScroll={1}
            arrows={false}         // no arrows for gallery
            pauseOnHover={true}
            responsive={[
              { breakpoint: 1280, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]}
          >
            {projects.map((p, i) => (
              <div key={i} className="px-3">
                <div className="rounded-lg shadow-md overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-64 object-cover"
                  />
                  <h4 className="mt-2 font-semibold text-gray-800">{p.title}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-10">Testimonials</h3>

          <Slider
            dots={true}
            infinite={true}
            autoplay={true}
            autoplaySpeed={3000}
            slidesToShow={3}   // 3 in a row
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
              },
              {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
              }
            ]}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="px-4">
                <div className="bg-white shadow-md rounded-lg p-6 mx-2">
                  <p className="italic">“{t.text}”</p>
                  <h5 className="mt-4 font-semibold">– {t.author}</h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>


      {/* Call to Action */}
      <section id="contact" className="py-16 bg-gray-900 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Let’s Build Your Dream Project</h3>
        <a
          href="#contactform"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default LandingPage;
