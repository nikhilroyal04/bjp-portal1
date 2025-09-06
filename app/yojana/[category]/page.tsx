"use client"

import { useState } from "react"
import { ArrowLeft, Menu, X, Phone, Mail, MapPin, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useParams } from "next/navigation"
import Image from "next/image"

const categories = {
  sports: { name: "खेल", icon: "🏏" },
  society: { name: "समाज", icon: "🏛️" },
  education: { name: "शिक्षा", icon: "📚" },
  development: { name: "विकास", icon: "🏗️" },
  employment: { name: "रोजगार", icon: "💼" },
  culture: { name: "संस्कृति", icon: "🎭" },
}

const schemeDetails = {
  sports: [
    {
      id: "sports-1",
      name: "खेल प्रोत्साहन योजना",
      description: "युवाओं के लिए खेल सुविधाएं और प्रशिक्षण कार्यक्रम",
      image: "/modern-sports-facility.png",
      shortDesc: "खेल के क्षेत्र में युवाओं को आगे बढ़ाने के लिए विशेष योजना",
    },
    {
      id: "sports-2",
      name: "राष्ट्रीय खेल प्रतिभा खोज",
      description: "प्रतिभाशाली खिलाड़ियों की पहचान और उनका विकास",
      image: "/sports-talent-search.jpg",
      shortDesc: "देश भर से खेल प्रतिभाओं की खोज और उनका संवर्धन",
    },
  ],
  society: [
    {
      id: "society-1",
      name: "समाज कल्याण योजना",
      description: "सामाजिक न्याय और कल्याण के लिए व्यापक कार्यक्रम",
      image: "/social-welfare.jpg",
      shortDesc: "समाज के कमजोर वर्गों के लिए कल्याणकारी योजनाएं",
    },
    {
      id: "society-2",
      name: "महिला सशक्तिकरण",
      description: "महिलाओं के लिए विशेष योजनाएं और सुविधाएं",
      image: "/women-empowerment.png",
      shortDesc: "महिलाओं के आर्थिक और सामाजिक सशक्तिकरण हेतु योजना",
    },
  ],
  education: [
    {
      id: "education-1",
      name: "आदर्श निवासी शालाएँ",
      description: "गुणवत्तापूर्ण शिक्षा व्यवस्था और आवासीय सुविधाएं",
      image: "/residential-school.jpg",
      shortDesc: "उच्च गुणवत्ता की शिक्षा के साथ आवासीय सुविधा",
    },
    {
      id: "education-2",
      name: "आश्रम शालाएँ",
      description: "आदिवासी बच्चों के लिए विशेष शिक्षा व्यवस्था",
      image: "/tribal-education.jpg",
      shortDesc: "आदिवासी समुदाय के बच्चों के लिए विशेष शिक्षा योजना",
    },
    {
      id: "education-3",
      name: "पोस्ट मैट्रिक छात्रवृत्ति",
      description: "उच्च शिक्षा के लिए वित्तीय सहायता और छात्रवृत्ति",
      image: "/scholarship-program.jpg",
      shortDesc: "मैट्रिक के बाद की शिक्षा के लिए छात्रवृत्ति योजना",
    },
  ],
  development: [
    {
      id: "development-1",
      name: "वनबंधु कल्याण योजना",
      description: "आदिवासी समुदाय का समग्र विकास और कल्याण",
      image: "/tribal-development.jpg",
      shortDesc: "वनवासी समुदाय के विकास के लिए विशेष कार्यक्रम",
    },
    {
      id: "development-2",
      name: "ग्रामीण विकास परियोजना",
      description: "गांवों का समग्र विकास और बुनियादी ढांचा",
      image: "/rural-development.png",
      shortDesc: "ग्रामीण क्षेत्रों के विकास के लिए व्यापक योजना",
    },
  ],
  employment: [
    {
      id: "employment-1",
      name: "रोजगार गारंटी योजना",
      description: "ग्रामीण रोजगार के अवसर और आजीविका सुरक्षा",
      image: "/employment-guarantee.jpg",
      shortDesc: "ग्रामीण क्षेत्रों में रोजगार की गारंटी",
    },
    {
      id: "employment-2",
      name: "स्किल डेवलपमेंट प्रोग्राम",
      description: "कौशल विकास और व्यावसायिक प्रशिक्षण कार्यक्रम",
      image: "/skill-development.png",
      shortDesc: "युवाओं के कौशल विकास के लिए प्रशिक्षण कार्यक्रम",
    },
  ],
  culture: [
    {
      id: "culture-1",
      name: "सांस्कृतिक विरासत संरक्षण",
      description: "पारंपरिक कला और संस्कृति का संरक्षण और संवर्धन",
      image: "/cultural-heritage-collage.png",
      shortDesc: "भारतीय संस्कृति और विरासत का संरक्षण",
    },
    {
      id: "culture-2",
      name: "त्योहार प्रोत्साहन योजना",
      description: "पारंपरिक त्योहारों का संवर्धन और प्रोत्साहन",
      image: "/vibrant-festival.png",
      shortDesc: "पारंपरिक त्योहारों को बढ़ावा देने की योजना",
    },
  ],
}

export default function YojanaPage() {
  const params = useParams()
  const category = params.category as string
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const categoryData = categories[category as keyof typeof categories]
  const schemes = schemeDetails[category as keyof typeof schemeDetails] || []

  const handleVideoToggle = () => {
    const video = document.querySelector("video") as HTMLVideoElement
    if (video) {
      if (isVideoPlaying) {
        video.pause()
        setIsVideoPlaying(false)
      } else {
        video.play()
        setIsVideoPlaying(true)
      }
    }
  }

  const handleSchemeClick = (schemeId: string) => {
    window.location.href = `/detail/${schemeId}`
  }

  const handleBackClick = () => {
    window.location.href = "/"
  }

  if (!categoryData) {
    return <div>Category not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBackClick}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="w-20 rounded-full h-20 bg-primary-foreground rounded-full flex items-center justify-center">
                <Image src="/logo.jpg" alt="logo" width={88} height={88} />
              </div>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-accent transition-colors text-white">
                मुख्य पृष्ठ
              </a>
              <a href="#" className="hover:text-accent transition-colors text-white">
                योजनाएं
              </a>
              <a href="#" className="hover:text-accent transition-colors text-white">
                समाचार
              </a>
              <a href="#" className="hover:text-accent transition-colors text-white">
                संपर्क
              </a>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
              <div className="flex flex-col space-y-2 pt-4">
                <a href="/" className="hover:text-accent transition-colors py-2 text-white">
                  मुख्य पृष्ठ
                </a>
                <a href="#" className="hover:text-accent transition-colors py-2 text-white">
                  योजनाएं
                </a>
                <a href="#" className="hover:text-accent transition-colors py-2 text-white">
                  समाचार
                </a>
                <a href="#" className="hover:text-accent transition-colors py-2 text-white">
                  संपर्क
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Video Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          poster="/placeholder.svg?key=2ntg5"
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>

        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="text-6xl mb-6 animate-bounce text-white">{categoryData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6 text-balance text-white">
              {categoryData.name} योजनाएं
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty max-w-3xl mx-auto text-white/90">
              {categoryData.name} के क्षेत्र में सरकारी योजनाओं की संपूर्ण जानकारी
            </p>

            {/* Play Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleVideoToggle}
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {isVideoPlaying ? (
                  <>
                    <Pause className="w-6 h-6 mr-2" />
                    वीडियो रोकें
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6 mr-2" />
                    वीडियो चलाएं
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/30 rounded-full animate-pulse z-20"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-white/50 rounded-full animate-pulse z-20"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/30 rounded-full animate-bounce z-20"></div>
      </section>

      {/* Schemes Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-4">{categoryData.name} की मुख्य योजनाएं</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            नीचे दी गई योजनाओं पर क्लिक करके विस्तृत जानकारी प्राप्त करें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((scheme) => (
            <Card
              key={scheme.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-border hover:border-primary/50 overflow-hidden"
              onClick={() => handleSchemeClick(scheme.id)}
            >
              <div className="relative">
                <img src={scheme.image || "/placeholder.svg"} alt={scheme.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg font-playfair mb-1 drop-shadow-2xl shadow-black">
                    {scheme.name}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{scheme.shortDesc}</p>
                <Button className="w-full">विस्तार से देखें</Button>
              </CardContent>
            </Card>
          ))}
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
