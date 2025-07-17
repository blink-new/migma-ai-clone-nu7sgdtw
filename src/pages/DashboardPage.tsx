import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import { 
  ArrowLeft, 
  Plus, 
  Search,
  Mail,
  Eye,
  Edit,
  Trash2,
  Calendar,
  TrendingUp,
  Users,
  BarChart3,
  Sparkles,
  Figma,
  Download,
  Share
} from 'lucide-react'

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const stats = [
    {
      title: "Total Emails",
      value: "24",
      change: "+12%",
      icon: Mail,
      color: "text-blue-600"
    },
    {
      title: "Total Views",
      value: "8,547",
      change: "+23%",
      icon: Eye,
      color: "text-green-600"
    },
    {
      title: "Avg. Open Rate",
      value: "68.4%",
      change: "+5.2%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Active Templates",
      value: "12",
      change: "+3",
      icon: BarChart3,
      color: "text-orange-600"
    }
  ]

  const recentEmails = [
    {
      id: 1,
      title: "Welcome Series - Onboarding",
      description: "Multi-step welcome email for new users",
      status: "Published",
      views: 1247,
      openRate: "72.3%",
      lastModified: "2 hours ago",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Product Launch Newsletter",
      description: "Announcing our latest feature update",
      status: "Draft",
      views: 0,
      openRate: "0%",
      lastModified: "1 day ago",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Monthly Newsletter",
      description: "Company updates and industry insights",
      status: "Scheduled",
      views: 0,
      openRate: "0%",
      lastModified: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Cart Abandonment Recovery",
      description: "Automated email for abandoned carts",
      status: "Published",
      views: 892,
      openRate: "45.2%",
      lastModified: "1 week ago",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Draft':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

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
                <Link to="/community" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Community
                </Link>
                <Link to="/dashboard" className="text-primary font-medium">
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Manage your email campaigns and templates</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/editor">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Email
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Generate with AI</h3>
              <p className="text-sm text-gray-600 mb-4">Create emails from simple prompts</p>
              <Button className="w-full">
                Start Creating
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Figma className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Import from Figma</h3>
              <p className="text-sm text-gray-600 mb-4">Convert Figma designs to emails</p>
              <Button variant="outline" className="w-full">
                Import Design
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Browse Community</h3>
              <p className="text-sm text-gray-600 mb-4">Get inspired by community templates</p>
              <Link to="/community">
                <Button variant="outline" className="w-full">
                  Explore Gallery
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Emails */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Emails</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search emails..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEmails.map((email) => (
                <div key={email.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={email.thumbnail} 
                      alt={email.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">{email.title}</h3>
                      <Badge variant="secondary" className={getStatusColor(email.status)}>
                        {email.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{email.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {email.views.toLocaleString()} views
                      </span>
                      <span>Open rate: {email.openRate}</span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {email.lastModified}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Button variant="outline">
                Load More Emails
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardPage