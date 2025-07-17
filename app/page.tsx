"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { FlipCard } from "@/components/flip-card"
import { FAQAccordion } from "@/components/faq-accordion"
import { Carousel } from "@/components/carousel"
import { FileUpload } from "@/components/file-upload"
import { useScrollSpy } from "../hooks/use-scroll-spy"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"
import { ProductCardSkeleton, CarouselSkeleton } from "@/components/loading-skeleton"
import { FloatingMobileNav } from "@/components/floating-mobile-nav"

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const sectionIds = ["home", "products", "about", "contact", "customOrders"]
  const activeSection = useScrollSpy(sectionIds)



  const faqItems = [
    {
      question: "How to order?",
      answer: `<div class="space-y-6">
        <p class="text-gray-600 mb-6"><strong>Follow these simple steps to place your order:</strong></p>
        
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <span class="text-blue-600 font-bold text-lg">1.</span>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 text-lg">Choose Your Design</h4>
            <p class="text-gray-600 mt-1">Choose your preferred photo strip design or photo for button pins and send it to us through messenger.</p>
          </div>
        </div>
        
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <span class="text-blue-600 font-bold text-lg">2.</span>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 text-lg">Send Your Photos</h4>
            <p class="text-gray-600 mt-1">Send your 3 desired photos for the photo strip keychain or photo for button pins to our email: <strong class="text-sky-500 bg-sky-50 px-2 py-1 rounded">tinytreasuresab@gmail.com</strong> for the better quality of the pictures.</p>
          </div>
        </div>
         
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <span class="text-blue-600 font-bold text-lg">3.</span>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 text-lg">Down Payment</h4>
            <p class="text-gray-600 mt-1">50% down payment via GCash is strictly required to avoid cancellation, and it is nonrefundable.</p>
          </div>
        </div>
         
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <span class="text-blue-600 font-bold text-lg">4.</span>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 text-lg">Lead Time</h4>
            <p class="text-gray-600 mt-1">Please allow 1–2 days lead time for your order to be ready. (We'll send updates as much as we can.)</p>
          </div>
        </div>
        
        <div class="mt-6 p-4 bg-blue-50 rounded-lg">
          <p class="text-gray-600"><strong>P.S.</strong> You may also message us if you'd like to add or remove anything from your strip design.</p>
        </div>
      </div>`,
    },
    {
      question: "What is the turnaround time for custom requests?",
      answer: `<div class="space-y-6">
        <p class="text-gray-600 mb-6"><strong>Custom orders typically follow this process:</strong></p>
        
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <span class="text-blue-600 font-bold text-lg">1.</span>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 text-lg">Design Phase</h4>
            <p class="text-gray-600 mt-1">After placing your order and sending your chosen design inspiration, we'll send you a design preview for approval (usually within a day).</p>
          </div>
        </div>
        
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <span class="text-blue-600 font-bold text-lg">2.</span>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 text-lg">Approval Time</h4>
            <p class="text-gray-600 mt-1">Once you approve the design, we'll begin crafting your item.</p>
          </div>
        </div>
         
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <span class="text-blue-600 font-bold text-lg">3.</span>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 text-lg">Production Time</h4>
            <div class="space-y-3 mt-1">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-gray-600">It takes 1–2 business days (excluding weekends and holidays) to handcraft and prepare your custom product after design approval.</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-gray-600">However, turnaround time may vary depending on the number of items in your order and the volume of other custom orders in our queue. We'll always do our best to keep you updated and deliver as quickly as possible.</p>
              </div>
            </div>
          </div>
        </div>
         
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <span class="text-blue-600 font-bold text-lg">4.</span>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 text-lg">Shipping</h4>
            <div class="space-y-3 mt-1">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-gray-600">For customers <b>within Camarines Norte</b>, orders are available for <b>pickup or local delivery</b> once ready. Just let us know your preferred option!</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-gray-600">For orders <b>outside Camarines Norte</b>, we ship nationwide. Shipping time will depend on your location and the shipping method selected at checkout. A tracking number will be provided once your order is shipped.</p>
              </div>
            </div>
          </div>
        
      </div>`,
    },
    {
      question: "What are your shipping times?",
      answer:
        "We process orders within 1-2 business days within Camarines Norte. Standard shipping takes 3-7 business days within the Philippines. International shipping may take 7-14 business days.",
    },
    {
      question: "Do you offer bulk orders?",
      answer: "Yes! We offer special pricing for bulk orders. Please contact us for more details.",
    },
   
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Pick Up (COP), Cash on Delivery (COD), GCash, and bank transfers.",
    },
    {
      question: "What are your business hours?",
      answer: "Our online store is always open! Customer service is available Monday-Friday, 9am-5pm (PHT).",
    },
  ]

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (window.location.hash === "#products") {
      setTimeout(() => {
        history.replaceState(null, "", "/");
      }, 600); // Wait for scroll to finish
    }
  }, []);

  return (
    <>
      {/* Fixed Full-Screen Animated Blob Background */}
      <div className="fixed-blob-background">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
        <div className="hero-blob hero-blob-4"></div>
        <div className="hero-blob hero-blob-5"></div>
        <div className="hero-blob hero-blob-6"></div>
        <div className="hero-blob hero-blob-7"></div>
        <div className="hero-blob hero-blob-8"></div>
      </div>

      {/* Navigation */}
    <header className="sticky top-0 z-50 px-4 md:px-12 lg:px-16 xl:px-20 pt-4">
        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl">
          <div className="container flex items-center justify-center md:justify-between h-16 px-6 mx-auto">
            <SmoothScrollLink href="#home" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Tiny Treasures"
                width={220}
                height={70}
                className="h-18 w-auto"
                priority
              />
          </SmoothScrollLink>
            <nav className="hidden md:flex items-center space-x-8">
            <SmoothScrollLink
              href="#home"
                className={`text-blue-600 hover:text-blue-800 hover:font-bold transition-all duration-200 ${activeSection === "home" ? "text-blue-800 font-bold" : ""}`}
            >
              Home
            </SmoothScrollLink>
          
            <SmoothScrollLink
              href="#products"
                className={`text-blue-600 hover:text-blue-800 hover:font-bold transition-all duration-200 ${activeSection === "products" ? "text-blue-800 font-bold" : ""}`}
            >
              Products
            </SmoothScrollLink>

            <SmoothScrollLink
              href="#about"
                className={`text-blue-600 hover:text-blue-800 hover:font-bold transition-all duration-200 ${activeSection === "about" ? "text-blue-800 font-bold" : ""}`}
            >
                About Us
            </SmoothScrollLink>

            <SmoothScrollLink
              href="#contact"
                className={`text-blue-600 hover:text-blue-800 hover:font-bold transition-all duration-200 ${activeSection === "contact" ? "text-blue-800 font-bold" : ""}`}
            >
              Contact
            </SmoothScrollLink>
          </nav>
            <div className="hidden md:flex items-center">
              <Link href="/catalog">
                <Button className="bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen relative px-4 md:px-12 lg:px-16 xl:px-20">
      <main>
        {/* Hero Section */}
        <section id="home" className="relative py-12 sm:py-16 lg:py-20 min-h-[600px] flex items-center">
          <div className="container relative px-4 mx-auto md:px-6 hero-content">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 order-1">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 text-center lg:text-left">
                  Crafted With <span className="text-blue-500">Heart,</span> Made for Yours
                </h1>
                <p className="max-w-[600px] text-gray-600 text-base md:text-lg lg:text-xl font-medium text-center lg:text-left mx-auto lg:mx-0">
                  Handcrafted photo products, keychains, pins, and more. Turn your special moments into treasured
                  keepsakes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="https://www.facebook.com/profile.php?id=100089262530024">
                    <Button className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white font-semibold shadow-lg text-lg px-4 lg:px-12 py-4 h-15 lg:min-w-[200px]">Order Now</Button>
                  </Link>
                  <SmoothScrollLink href="#customOrders" className={`text-blue-600 hover:text-blue-800 hover:font-bold transition-all duration-200 ${activeSection === "products" ? "text-blue-800 font-bold" : ""}`}>
                    <Button variant="outline"className="w-full border-3 border-blue-300 text-blue-600 hover:bg-blue-50 bg-white/80 backdrop-blur-sm text-lg px-4 py-4 h-15 lg:min-w-[200px]">
                      Custom Orders
                    </Button>
                  </SmoothScrollLink>
                  
                </div>
              </div>

              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] hero-float order-2 flex items-center justify-center overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src="/heroimage.png"
                  alt="Tiny Treasures Products"
                  fill
                  className="hero-image drop-shadow-2xl object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Mobile Navigation */}
      <FloatingMobileNav activeSection={activeSection} />
    </div>

    {/* Glassmorphism Background Container */}
    <div className="relative z-10 bg-white/30 backdrop-blur-md border-t border-white/20 shadow-lg">
      <div className="px-4 md:px-12 lg:px-16 xl:px-20">
        <main>
        {/* Featured Designs Carousel */}
          <section id="featured" className="py-16 relative z-20">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl text-gray-800">
                Featured Designs
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">Discover our most popular and trending designs</p>
            </div>
            {isLoading ? <CarouselSkeleton /> : <Carousel />}
          </div>
        </section>

        {/* Products Section */}
          <section id="products" className="py-16 relative z-20">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl text-gray-800">
                Our Products
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">Browse our collection of handcrafted items</p>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Winkie Button Pins */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">PINS</span>
                    <Link href="/catalog?product=button-pins">
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    Winkie Button Pins
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cute and expressive button pins featuring adorable winkie designs. Perfect for adding personality to your bags, jackets, or accessories.
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-bold text-blue-600 text-lg md:text-2xl">₱20.00 each</span>
                    <Link href="https://www.facebook.com/profile.php?id=100089262530024">
                      <Button className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                        Order Now
                      </Button>
                    </Link>
                    </div>
                    </div>

                {/* Photostrip Keychain */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">KEYCHAIN</span>
                    <Link href="/catalog?product=keychain">
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    Photostrip Keychain
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Classic photo strip design keychain with your favorite memories. Capture those special moments in a nostalgic photostrip format.
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-bold text-blue-600 text-lg md:text-2xl">₱39.00 each</span>
                    <Link href="https://www.facebook.com/profile.php?id=100089262530024">
                      <Button className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                        Order Now
                      </Button>
                    </Link>
                    </div>
                    </div>

                {/* Coming Soon */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 relative opacity-75">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">COMING SOON</span>
                    <div className="w-5 h-5 text-gray-300">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-500 mb-4 leading-tight">
                    Coming Soon...
                  </h3>
                                     <p className="text-gray-400 leading-relaxed">
                     We&apos;re working on something special for you! Stay tuned for our next amazing product that will add even more magic to your memories.
                   </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-bold text-gray-400 text-lg md:text-2xl">TBA</span>
                    <Button disabled className="bg-gray-300 text-gray-500 px-6 py-2 rounded-lg cursor-not-allowed">
                      TBA
                    </Button>
                    </div>
                    </div>
                    </div>
            </div>

            <div id ="customOrders" className="mt-16 bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-black text-gray-800">Custom Orders</h3>
              <p className="mt-2 text-gray-600">
                Looking for something personalized? We can create custom items just for you!
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    1
                  </div>
                  <p>Send us your photos and design ideas</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    2
                  </div>
                  <p>We&apos;ll provide a message within 24 hours</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    3
                  </div>
                  <p>Turnaround time: 1-2 business days after approval</p>
                </div>
              </div>
              <Link href="https://www.facebook.com/profile.php?id=100089262530024">
                <Button className="mt-6 bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white">Request Custom Order</Button>
              </Link>
            </div>
          </div>
        </section>



        {/* About Section */}
          <section id="about" className="py-16 relative z-20">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl text-gray-800 text-center lg:text-left">
                  About Tiny Treasures
                </h2>
                <p className="text-gray-600 text-center lg:text-left mx-auto lg:mx-0">
                  Tiny Treasures was founded with a simple mission: to help people preserve their precious memories in
                  beautiful, tangible ways. What started as a hobby has grown into a passion for creating high-quality,
                  handcrafted photo products.
                </p>
                <p className="text-gray-600 text-center lg:text-left mx-auto lg:mx-0">
                  Every item we create is made with care and attention to detail. We believe in sustainable practices
                  and use eco-friendly materials whenever possible.
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-800 text-center lg:text-left">Our Values</h3>
                  <ul className="mt-4 space-y-2 flex flex-col items-center lg:items-start">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Handmade with love</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Sustainable materials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Customer satisfaction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Quality over quantity</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/about section.png"
                  alt="About Tiny Treasures"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
          <section id="faq" className="py-16 relative z-20">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl text-gray-800">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Find answers to common questions about our products and services
              </p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
          <section id="contact" className="py-16 relative z-20">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl text-gray-800">
                Get In Touch
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Have questions or want to place a custom order? Reach out to us!
              </p>
            </div>
            <div className="max-w-2xl mx-auto mt-12">
              <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl">
                <h3 className="text-xl font-bold text-center text-gray-800 mb-6">Contact Us</h3>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="attachment" className="text-sm font-medium text-gray-700">
                      Attachments (Optional - Max 5 files, 10MB each)
                    </label>
                    <FileUpload
                      id="attachment"
                      accept="image/*,.pdf,.doc,.docx"
                      maxSize={10}
                      maxFiles={5}
                      onFilesChange={(files) => {
                        // Handle files change if needed
                        console.log("Selected files:", files)
                      }}
                    />
                    <p className="text-xs text-gray-500">Supported formats: Images, PDF, DOC, DOCX</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      </div>
    </div>

      {/* Footer */}
    <footer className="bg-gradient-to-r from-sky-400 to-blue-500 text-white py-12 relative z-20">
        <div className="px-4 md:px-12 lg:px-16 xl:px-20">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left side - Company Info */}
            <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-white">Tiny Treasures</h3>
            <p className="mt-4 text-white/80">
              Thoughtfully crafted keepsakes to capture and <br />
              cherish your most meaningful memories.
            </p>
            <div className="flex items-center justify-center md:justify-start mt-4 space-x-3">
              <span className="text-white font-medium">Follow us:</span>
              <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
                  <span className="sr-only">Instagram</span>
                </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
                  <span className="sr-only">Facebook</span>
                </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                  <TikTokIcon />
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>
          
          {/* Right side - Three columns grouped together */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <SmoothScrollLink href="#home" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </SmoothScrollLink>
                </li>
                <li>
                  <SmoothScrollLink href="#products" className="text-white/80 hover:text-white transition-colors">
                    Products
                  </SmoothScrollLink>
                </li>
                
                <li>
                  <SmoothScrollLink href="#about" className="text-white/80 hover:text-white transition-colors">
                    About
                  </SmoothScrollLink>
                </li>
                <li>
                  <SmoothScrollLink href="#contact" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </SmoothScrollLink>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <SmoothScrollLink href="#products" className="text-white/80 hover:text-white transition-colors">
                    Wikie Button Pins
                  </SmoothScrollLink>
                </li>
                <li>
                  <SmoothScrollLink href="#products" className="text-white/80 hover:text-white transition-colors">
                    Photostrip Keychain
                  </SmoothScrollLink>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <div className="bg-sky-300/60 rounded-full p-2 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/80">tinytreasuresab@gmail.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <div className="bg-sky-300/60 rounded-full p-2 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/80">(+63) 939-620-4233</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <div className="bg-sky-300/60 rounded-full p-2 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/80">Daet, Camarines Norte, Philippines, 4600</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80">
            <p>© 2025 Tiny Treasures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
