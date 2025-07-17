import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  ArrowLeft, 
  Search, 
  Filter,
  Star,
  Eye,
  Clock,
  Mail
} from 'lucide-react'

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const communityEmails = [
    {
      id: 1,
      title: "Welcome Email Series",
      description: "Onboarding sequence for SaaS platforms",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      views: 2847,
      length: "3 emails",
      tags: ["PRO", "Autoslow"],
      rating: 4.9,
      author: "Sarah Chen"
    },
    {
      id: 2,
      title: "E-commerce Newsletter",
      description: "Product showcase with dynamic content",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      views: 1923,
      length: "1 email",
      tags: ["Localization"],
      rating: 4.8,
      author: "Mike Johnson"
    },
    {
      id: 3,
      title: "Event Invitation",
      description: "Professional conference invitation template",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      views: 3156,
      length: "2 emails",
      tags: ["PRO"],
      rating: 4.7,
      author: "Emma Wilson"
    },
    {
      id: 4,
      title: "Product Launch Campaign",
      description: "Multi-step launch sequence with CTAs",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      views: 1654,
      length: "4 emails",
      tags: ["PRO", "Localization"],
      rating: 4.6,
      author: "David Kim"
    },
    {
      id: 5,
      title: "Newsletter Template",
      description: "Clean and modern newsletter design",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      views: 2341,
      length: "1 email",
      tags: ["Autoslow"],
      rating: 4.5,
      author: "Lisa Park"
    },
    {
      id: 6,
      title: "Abandoned Cart Recovery",
      description: "E-commerce cart recovery email series",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      views: 1876,
      length: "3 emails",
      tags: ["PRO"],
      rating: 4.8,
      author: "Alex Rodriguez"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
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
                <Link to="/community" className="text-primary font-medium">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Gallery</h1>
            <p className="text-gray-600">Discover and get inspired by email designs from our community</p>
          </div>
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search email templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Email Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityEmails.map((email) => (
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
                
                <p className="text-gray-600 text-sm mb-3">
                  {email.description}
                </p>
                
                <p className="text-xs text-gray-500 mb-4">
                  by {email.author}
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

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Templates
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage