"use client"

import { useState, useRef } from "react"
import { Phone, Mail, MapPin, Volume2, VolumeX } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "sports", name: "खेल", icon: "🏏" },
  { id: "society", name: "समाज", icon: "🏛️" },
  { id: "education", name: "शिक्षा", icon: "📚" },
  { id: "development", name: "विकास", icon: "🏗️" },
  { id: "employment", name: "रोजगार", icon: "💼" },
  { id: "culture", name: "संस्कृति", icon: "🎭" },
]

export default function PoliticalPortal() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleCategoryClick = (categoryId: string) => {
    window.location.href = `/yojana/${categoryId}`
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Video Banner */}
      <section className="relative h-[80vh] bg-gradient-to-r from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <video
          ref={videoRef}
          src="/video.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/thumb.jpg"
        >
          <source
            src="/video.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Unmute Button */}
        <div className="absolute top-4 right-4">
          <Button
            size="sm"
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-4xl text-red-500 font-bold font-playfair mb-2">सबका साथ, सबका विकास</h2>
          <p className="text-xl text-red-500 opacity-90">राष्ट्र निर्माण में आपका योगदान</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col">
          {/* Categories Section */}
          <div className="w-full">
            <h2 className="text-3xl font-bold font-playfair text-foreground mb-8 text-center">श्रेणियाँ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-border hover:border-primary/50"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold font-playfair text-foreground mb-2">{category.name}</h3>
                    <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold font-playfair mb-4">राजनीतिक पोर्टल</h3>
              <p className="text-sm opacity-90 mb-4">सेवा, सुशासन और गरीब कल्याण के लिए समर्पित</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xs">📘</span>
                </div>
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xs">🐦</span>
                </div>
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xs">📺</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">मुख्य लिंक</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-accent transition-colors">
                    मुख्य पृष्ठ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    योजनाएं
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    समाचार
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    गैलरी
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">सेवाएं</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    ऑनलाइन आवेदन
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    शिकायत निवारण
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    डाउनलोड
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">संपर्क जानकारी</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 11 2334 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@politicalportal.gov.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>नई दिल्ली, भारत</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 राजनीतिक पोर्टल। सभी अधिकार सुरक्षित।</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
