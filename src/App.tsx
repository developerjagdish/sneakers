import React, { useState, useEffect } from 'react';
import { 
  Search, 
  User, 
  ShoppingCart, 
  Heart, 
  ChevronRight, 
  Star, 
  Instagram, 
  Facebook, 
  Twitter,
  Send,
  Sparkles,
  Zap,
  Timer,
  Package,
  Shield,
  ArrowRight,
  Clock,
  Trophy,
  Truck
} from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 h-8 w-8 bg-cyan-400/20 rounded-full blur-xl"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Sneaker Haven
              </span>
            </div>
            
            <nav className="hidden lg:flex space-x-12">
              {['Home', 'Shop', 'New Arrivals', 'Collections', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="relative group py-2"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-8">
              <div className="relative group">
                <Search className="h-6 w-6 text-gray-300 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
              <div className="relative group">
                <User className="h-6 w-6 text-gray-300 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
              <div className="relative group">
                <ShoppingCart className="h-6 w-6 text-gray-300 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
              <div className="relative group">
                <Heart className="h-6 w-6 text-gray-300 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=2000"
            alt="Hero sneakers" 
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjAgMGEyMCwyMCAwIDEsMCA0MCwwYTIwLDIwIDAgMSwwIC00MCwwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-3">
              <h2 className="text-cyan-400 text-lg font-medium tracking-wider">NEXT GENERATION FOOTWEAR</h2>
              <h1 className="text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Future of
                </span>
                <br />
                <span className="relative">
                  Footwear
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">Experience the next generation of sneakers with our cutting-edge collection, where style meets innovation.</p>
            </div>
            
            <div className="flex space-x-4">
              <button className="group relative px-6 py-3 bg-transparent overflow-hidden rounded-full">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 border border-cyan-400 rounded-full group-hover:scale-105 transition-transform duration-300"></span>
                <span className="relative text-base font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                  Explore Collection
                </span>
              </button>
              <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full overflow-hidden">
                <span className="relative text-base font-semibold text-black">
                  Shop Now
                </span>
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-20"></span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { icon: Zap, label: 'Lightning Fast Delivery', value: '24h' },
                { icon: Shield, label: 'Secure Payment', value: '100%' },
                { icon: Package, label: 'Free Returns', value: '30 Days' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-xl blur-xl group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-cyan-400 mb-3" />
                    <div className="text-xl font-bold text-white mb-1">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 space-y-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
        </div>
      </section>

      {/* Latest Drops Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                  Latest Drops
                </span>
              </h2>
              <p className="text-gray-400">Don't miss out on the newest releases</p>
            </div>
            <button className="group flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
              <span>View All</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=500",
                name: "Nike Air Pulse",
                price: "199.99",
                timer: "2d 15h"
              },
              {
                img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=500",
                name: "Adidas Neo Flux",
                price: "179.99",
                timer: "1d 8h"
              },
              {
                img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=500",
                name: "Puma RS-X",
                price: "159.99",
                timer: "16h"
              },
              {
                img: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=500",
                name: "Nike Zoom X",
                price: "189.99",
                timer: "3d 12h"
              }
            ].map((product, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-xl overflow-hidden border border-white/10">
                  <div className="relative">
                    <img 
                      src={product.img}
                      alt={product.name}
                      className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-white">{product.timer}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-black/40 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-cyan-400">${product.price}</span>
                      <button className="text-sm text-white/80 hover:text-white transition-colors">
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Why Choose Us
              </span>
            </h2>
            <p className="text-gray-400">Experience the future of footwear shopping with our cutting-edge features and services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Premium Quality",
                description: "Only the finest materials and craftsmanship make it to our collection"
              },
              {
                icon: Truck,
                title: "Global Shipping",
                description: "Fast and reliable shipping to any corner of the world"
              },
              {
                icon: Shield,
                title: "Secure Shopping",
                description: "Your security is our priority with encrypted transactions"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjAgMGEyMCwyMCAwIDEsMCA0MCwwYTIwLDIwIDAgMSwwIC00MCwwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Trending Now
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500",
                name: "Nike Air Max Quantum",
                price: "299.99"
              },
              {
                img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=500",
                name: "Adidas Cyber Boost",
                price: "249.99"
              },
              {
                img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500",
                name: "Puma Neo Wave",
                price: "189.99"
              }
            ].map((product, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 p-6 border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
                  <div className="relative mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={product.img}
                      alt={product.name}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-cyan-400 fill-cyan-400" />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                        ${product.price}
                      </span>
                      <button className="relative overflow-hidden px-6 py-3 rounded-full group/btn">
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 group-hover/btn:opacity-100 transition-opacity"></span>
                        <span className="relative text-cyan-400 group-hover/btn:text-white transition-colors">
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Browse Categories
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Running',
                image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500'
              },
              {
                name: 'Lifestyle',
                image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500'
              },
              {
                name: 'Limited',
                image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500'
              },
              {
                name: 'Sports',
                image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?auto=format&fit=crop&w=500'
              }
            ].map((category) => (
              <div key={category.name} className="group relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <div className="aspect-square">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center transform group-hover:-translate-y-2 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{category.name}</span>
                      <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto group-hover:w-full transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Join the Future
              </span>
            </h2>
            <p className="text-xl mb-12 text-gray-300">Subscribe for exclusive drops, special offers, and early access to the latest releases.</p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-l-full bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="px-8 py-4 rounded-r-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Sneaker Haven
              </h3>
              <p className="text-gray-400">Pioneering the future of footwear technology and style.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-cyan-400">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                {['About Us', 'Contact', 'FAQs', 'Shipping'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-cyan-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-cyan-400">Connect</h4>
              <div className="flex space-x-6">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" />
                <Facebook className="h-6 w-6 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-cyan-400">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-4 py-2 rounded-r bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90 transition-opacity">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sneaker Haven. All rights reserved.</p>
            <p>Design and developed by <a href="https://devjagdish.tech" target="_blank" rel="noopener noreferrer">devjagdish.tech</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;