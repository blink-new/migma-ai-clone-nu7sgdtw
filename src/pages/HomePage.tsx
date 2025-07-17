import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Sparkles, 
  Figma, 
  Users, 
  ArrowRight, 
  Star, 
  Eye,
  Clock,
  Globe,
  Zap,
  Mail
} from 'lucide-react'

const HomePage = () => {
  const [prompt, setPrompt] = useState('')

  const featuredEmails = [
    {
      id: 1,
      title: "Welcome Email Series",
      description: "Onboarding sequence for SaaS platforms",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      views: 2847,
      length: "3 emails",
      tags: ["PRO", "Autoslow"],
      rating: 4.9
    },
    {
      id: 2,
      title: "E-commerce Newsletter",
      description: "Product showcase with dynamic content",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      views: 1923,
      length: "1 email",
      tags: ["Localization"],
      rating: 4.8
    },
    {
      id: 3,
      title: "Event Invitation",
      description: "Professional conference invitation template",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      views: 3156,
      length: "2 emails",
      tags: ["PRO"],
      rating: 4.7
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Migma.ai</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/community" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Community
                </Link>
                <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Dashboard
                </Link>
                <Link to="/editor" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Editor
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                EWOR Backed
              </Badge>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Email Design Platform
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Create stunning emails with
            <span className="text-primary"> AI magic</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Transform your ideas into professional email designs in seconds. 
            Import from Figma, browse community templates, or start from a simple prompt.
          </p>

          {/* AI Prompt Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                placeholder="Describe your email design... (e.g., 'Create a welcome email for a fitness app')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="h-14 text-lg pr-32 border-2 border-gray-200 focus:border-primary"
              />
              <Button 
                className="absolute right-2 top-2 h-10"
                disabled={!prompt.trim()}
              >
                Generate
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="w-full sm:w-auto">
              <Figma className="w-5 h-5 mr-2" />
              Import from Figma
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Users className="w-5 h-5 mr-2" />
              Browse Community
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to create amazing emails
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From AI-powered generation to community collaboration, we've got all the tools you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Generation</h3>
              <p className="text-gray-600">
                Transform simple prompts into professional email designs with advanced AI technology.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Figma className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Figma Integration</h3>
              <p className="text-gray-600">
                Import your existing Figma designs and convert them into responsive email templates.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Localization</h3>
              <p className="text-gray-600">
                Create emails in multiple languages with built-in localization support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Community Gallery
              </h2>
              <p className="text-lg text-gray-600">
                Discover and get inspired by email designs from our community
              </p>
            </div>
            <Link to="/community">
              <Button variant="outline">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredEmails.map((email) => (
              <Card key={email.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={email.thumbnail} 
                    alt={email.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
                      {email.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {email.rating}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {email.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {email.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {email.length}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {email.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant={tag === 'PRO' ? 'default' : 'secondary'}
                        className={tag === 'PRO' ? 'bg-primary' : ''}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to create your first AI email?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of designers and marketers who trust Migma.ai for their email campaigns.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Start Creating for Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Migma.ai</span>
              </div>
              <p className="text-gray-400">
                AI-powered email design platform for modern teams.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link to="/editor" className="hover:text-white transition-colors">Editor</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Migma.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage