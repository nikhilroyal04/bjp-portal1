"use client"

import { useState } from "react"
import { ArrowLeft, Menu, X, Phone, Mail, MapPin, Download, ExternalLink, Calendar, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useParams } from "next/navigation"
import Image from "next/image"

const schemeData = {
  "sports-1": {
    name: "खेल प्रोत्साहन योजना",
    category: "खेल",
    image: "/modern-sports-facility.png",
    description: "युवाओं के लिए खेल सुविधाएं और प्रशिक्षण कार्यक्रम",
    fullDescription:
      "यह योजना देश के युवाओं में खेल की भावना को बढ़ावा देने और उन्हें अंतर्राष्ट्रीय स्तर पर प्रतिस्पर्धा के लिए तैयार करने हेतु शुरू की गई है। इसके अंतर्गत आधुनिक खेल सुविधाओं का निर्माण, प्रशिक्षकों की व्यवस्था और खिलाड़ियों को वित्तीय सहायता प्रदान की जाती है।",
    objectives: [
      "युवाओं में खेल के प्रति रुचि बढ़ाना",
      "आधुनिक खेल सुविधाओं का विकास",
      "प्रतिभाशाली खिलाड़ियों को प्रोत्साहन",
      "अंतर्राष्ट्रीय स्तर पर भारत का प्रतिनिधित्व",
    ],
    benefits: [
      "निःशुल्क कोचिंग और प्रशिक्षण",
      "खेल उपकरण की व्यवस्था",
      "मासिक छात्रवृत्ति ₹5,000",
      "राष्ट्रीय और अंतर्राष्ट्रीय प्रतियोगिताओं में भागीदारी",
    ],
    eligibility: ["आयु 14-25 वर्ष", "भारतीय नागरिक", "खेल में रुचि और प्रतिभा", "शारीरिक और मानसिक रूप से स्वस्थ"],
    documents: ["आधार कार्ड", "जन्म प्रमाण पत्र", "निवास प्रमाण पत्र", "खेल प्रमाण पत्र", "मेडिकल सर्टिफिकेट"],
    applicationProcess: [
      "ऑनलाइन पंजीकरण करें",
      "आवश्यक दस्तावेज अपलोड करें",
      "खेल परीक्षा में भाग लें",
      "चयन की प्रतीक्षा करें",
      "प्रशिक्षण शुरू करें",
    ],
    budget: "₹500 करोड़ (वार्षिक)",
    beneficiaries: "50,000 युवा (प्रतिवर्ष)",
    launchDate: "15 अगस्त 2023",
  },
  "sports-2": {
    name: "राष्ट्रीय खेल प्रतिभा खोज",
    category: "खेल",
    image: "/sports-talent-search.jpg",
    description: "प्रतिभाशाली खिलाड़ियों की पहचान और उनका विकास",
    fullDescription:
      "राष्ट्रीय खेल प्रतिभा खोज योजना का उद्देश्य देश भर से खेल प्रतिभाओं की खोज करना और उन्हें विश्वस्तरीय खिलाड़ी बनाने के लिए विशेष प्रशिक्षण प्रदान करना है। यह योजना ग्रामीण और शहरी दोनों क्षेत्रों में संचालित की जाती है।",
    objectives: [
      "छुपी हुई खेल प्रतिभाओं की खोज",
      "ग्रामीण क्षेत्रों में खेल का विकास",
      "वैज्ञानिक प्रशिक्षण पद्धति का उपयोग",
      "ओलंपिक खेलों के लिए तैयारी",
    ],
    benefits: ["प्रतिभा की पहचान और चयन", "विशेष प्रशिक्षण शिविर", "पोषण और आहार की व्यवस्था", "करियर गाइडेंस और काउंसलिंग"],
    eligibility: ["आयु 12-18 वर्ष", "किसी भी खेल में प्रतिभा", "स्कूली शिक्षा जारी हो", "माता-पिता की सहमति"],
    documents: ["स्कूल प्रमाण पत्र", "आधार कार्ड", "खेल उपलब्धि प्रमाण पत्र", "माता-पिता की सहमति पत्र", "फोटो और हस्ताक्षर"],
    applicationProcess: [
      "जिला स्तरीय ट्रायल में भाग लें",
      "राज्य स्तरीय चयन",
      "राष्ट्रीय स्तर पर अंतिम चयन",
      "प्रशिक्षण केंद्र में दाखिला",
      "नियमित मूल्यांकन",
    ],
    budget: "₹300 करोड़ (वार्षिक)",
    beneficiaries: "25,000 युवा (प्रतिवर्ष)",
    launchDate: "26 जनवरी 2024",
  },
  // Add more scheme data for other categories...
}

export default function DetailPage() {
  const params = useParams()
  const schemeId = params.scheme as string
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scheme = schemeData[schemeId as keyof typeof schemeData]

  const handleBackClick = () => {
    window.history.back()
  }

  if (!scheme) {
    return <div>Scheme not found</div>
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
              <a href="/" className="hover:text-accent transition-colors">
                मुख्य पृष्ठ
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                योजनाएं
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                समाचार
              </a>
              <a href="#" className="hover:text-accent transition-colors">
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
                <a href="/" className="hover:text-accent transition-colors py-2">
                  मुख्य पृष्ठ
                </a>
                <a href="#" className="hover:text-accent transition-colors py-2">
                  योजनाएं
                </a>
                <a href="#" className="hover:text-accent transition-colors py-2">
                  समाचार
                </a>
                <a href="#" className="hover:text-accent transition-colors py-2">
                  संपर्क
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <img src={scheme.image || "/placeholder.svg"} alt={scheme.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-primary text-primary-foreground">{scheme.category}</Badge>
              <h1 className="text-4xl font-bold font-playfair text-white mb-4">{scheme.name}</h1>
              <p className="text-xl text-white/90">{scheme.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">योजना विवरण</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{scheme.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Objectives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  उद्देश्य
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {scheme.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>लाभ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {scheme.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-accent/10 rounded-lg">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle>आवेदन प्रक्रिया</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheme.applicationProcess.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>त्वरित जानकारी</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">शुरुआत</p>
                    <p className="font-semibold">{scheme.launchDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">लाभार्थी</p>
                    <p className="font-semibold">{scheme.beneficiaries}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 text-primary">₹</span>
                  <div>
                    <p className="text-sm text-muted-foreground">बजट</p>
                    <p className="font-semibold">{scheme.budget}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle>पात्रता</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {scheme.eligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">•</span>
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle>आवश्यक दस्तावेज</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {scheme.documents.map((document, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">📄</span>
                      <span>{document}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                ऑनलाइन आवेदन करें
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                फॉर्म डाउनलोड करें
              </Button>
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
