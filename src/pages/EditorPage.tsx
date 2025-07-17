import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  ArrowLeft, 
  Mail,
  Sparkles,
  Figma,
  Save,
  Send,
  Eye,
  Smartphone,
  Monitor,
  Palette,
  Type,
  Image,
  Link as LinkIcon,
  Settings,
  Download,
  Share,
  Undo,
  Redo,
  Copy,
  Trash2
} from 'lucide-react'

const EditorPage = () => {
  const [emailTitle, setEmailTitle] = useState('Welcome Email')
  const [emailSubject, setEmailSubject] = useState('Welcome to our platform!')
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [aiPrompt, setAiPrompt] = useState('')

  const templateBlocks = [
    {
      id: 'header',
      type: 'Header',
      icon: Type,
      description: 'Logo and navigation'
    },
    {
      id: 'hero',
      type: 'Hero Section',
      icon: Image,
      description: 'Main banner with CTA'
    },
    {
      id: 'text',
      type: 'Text Block',
      icon: Type,
      description: 'Paragraph content'
    },
    {
      id: 'image',
      type: 'Image',
      icon: Image,
      description: 'Single image block'
    },
    {
      id: 'button',
      type: 'Button',
      icon: LinkIcon,
      description: 'Call-to-action button'
    },
    {
      id: 'footer',
      type: 'Footer',
      icon: Type,
      description: 'Contact info and links'
    }
  ]

  const colorPalettes = [
    { name: 'Brand Primary', colors: ['#6366F1', '#4F46E5', '#4338CA'] },
    { name: 'Warm', colors: ['#F59E0B', '#EF4444', '#EC4899'] },
    { name: 'Cool', colors: ['#06B6D4', '#3B82F6', '#8B5CF6'] },
    { name: 'Neutral', colors: ['#6B7280', '#374151', '#111827'] }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
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
                <Link to="/editor" className="text-primary font-medium">
                  Editor
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Undo className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Redo className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button size="sm">
                <Send className="w-4 h-4 mr-2" />
                Send Test
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar - Tools */}
        <div className="w-80 bg-white border-r overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Email Editor</h2>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
            </div>

            <Tabs defaultValue="design" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="ai">AI</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="design" className="space-y-6">
                {/* Email Info */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Email Title
                    </label>
                    <Input
                      value={emailTitle}
                      onChange={(e) => setEmailTitle(e.target.value)}
                      placeholder="Enter email title"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Subject Line
                    </label>
                    <Input
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      placeholder="Enter subject line"
                    />
                  </div>
                </div>

                {/* Template Blocks */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Add Blocks</h3>
                  <div className="space-y-2">
                    {templateBlocks.map((block) => (
                      <div
                        key={block.id}
                        className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center mr-3">
                          <block.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{block.type}</p>
                          <p className="text-xs text-gray-500">{block.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Palettes */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Color Palettes</h3>
                  <div className="space-y-3">
                    {colorPalettes.map((palette, index) => (
                      <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <p className="text-sm font-medium text-gray-900 mb-2">{palette.name}</p>
                        <div className="flex space-x-2">
                          {palette.colors.map((color, colorIndex) => (
                            <div
                              key={colorIndex}
                              className="w-6 h-6 rounded border"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ai" className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">AI Assistant</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Describe your email
                      </label>
                      <Textarea
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="e.g., Create a welcome email for a fitness app with a modern design and call-to-action button"
                        rows={4}
                      />
                    </div>
                    <Button className="w-full">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate with AI
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Import Options</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Figma className="w-4 h-4 mr-2" />
                      Import from Figma
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Copy className="w-4 h-4 mr-2" />
                      Import from URL
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">AI Suggestions</h3>
                  <div className="space-y-2">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">💡 Try adding a hero image to increase engagement</p>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">✨ Consider A/B testing your subject line</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Email Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        From Name
                      </label>
                      <Input placeholder="Your Company" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        From Email
                      </label>
                      <Input placeholder="hello@yourcompany.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Reply To
                      </label>
                      <Input placeholder="support@yourcompany.com" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Export Options</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Download HTML
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Share className="w-4 h-4 mr-2" />
                      Share Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Email
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Editor Toolbar */}
          <div className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-lg font-semibold text-gray-900">{emailTitle}</h1>
                <Badge variant="secondary">Draft</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant={previewMode === 'desktop' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setPreviewMode('desktop')}
                  >
                    <Monitor className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={previewMode === 'mobile' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setPreviewMode('mobile')}
                  >
                    <Smartphone className="w-4 h-4" />
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 bg-gray-100 p-6 overflow-auto">
            <div className="max-w-4xl mx-auto">
              <div 
                className={`bg-white shadow-lg mx-auto transition-all duration-300 ${
                  previewMode === 'mobile' ? 'max-w-sm' : 'max-w-2xl'
                }`}
              >
                {/* Email Preview */}
                <div className="border-b bg-gray-50 px-6 py-4">
                  <div className="text-sm text-gray-600">
                    <div className="flex justify-between items-center mb-2">
                      <span>From: hello@yourcompany.com</span>
                      <span>To: user@example.com</span>
                    </div>
                    <div className="font-medium text-gray-900">
                      Subject: {emailSubject}
                    </div>
                  </div>
                </div>

                {/* Email Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Your Company</h1>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Welcome to our platform!
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      We're excited to have you on board. Let's get you started with your journey.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Get Started
                    </Button>
                  </div>

                  {/* Content Section */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What's next?
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Complete your profile setup
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Explore our features and tools
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Join our community forum
                      </li>
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="text-center text-sm text-gray-500 border-t pt-6">
                    <p className="mb-2">
                      © 2024 Your Company. All rights reserved.
                    </p>
                    <p>
                      <a href="#" className="text-primary hover:underline">Unsubscribe</a> | 
                      <a href="#" className="text-primary hover:underline ml-2">Privacy Policy</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorPage