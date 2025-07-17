import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Switch } from '../components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Badge } from '../components/ui/badge'
import { 
  ArrowLeft, 
  Mail,
  User,
  Bell,
  Shield,
  CreditCard,
  Palette,
  Globe,
  Download,
  Trash2,
  Camera,
  Check,
  Crown,
  Zap
} from 'lucide-react'

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    marketingEmails: false,
    securityAlerts: true,
    weeklyDigest: true
  })

  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    company: 'Acme Corp',
    role: 'Marketing Manager'
  })

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: [
        '5 email templates',
        'Basic AI generation',
        'Community access',
        'Standard support'
      ],
      current: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: [
        'Unlimited templates',
        'Advanced AI features',
        'Figma integration',
        'Priority support',
        'Custom branding',
        'Analytics dashboard'
      ],
      current: true,
      popular: true
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        'SSO integration'
      ],
      current: false
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>
          <Link to="/dashboard">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <a href="#profile" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <User className="w-5 h-5 mr-3 text-gray-500" />
                    <span className="font-medium">Profile</span>
                  </a>
                  <a href="#notifications" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Bell className="w-5 h-5 mr-3 text-gray-500" />
                    <span className="font-medium">Notifications</span>
                  </a>
                  <a href="#security" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Shield className="w-5 h-5 mr-3 text-gray-500" />
                    <span className="font-medium">Security</span>
                  </a>
                  <a href="#billing" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <CreditCard className="w-5 h-5 mr-3 text-gray-500" />
                    <span className="font-medium">Billing</span>
                  </a>
                  <a href="#preferences" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Palette className="w-5 h-5 mr-3 text-gray-500" />
                    <span className="font-medium">Preferences</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Avatar Section */}
                    <div className="flex items-center space-x-6">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <Button variant="outline" size="sm">
                          <Camera className="w-4 h-4 mr-2" />
                          Change Photo
                        </Button>
                        <p className="text-sm text-gray-500 mt-2">
                          JPG, GIF or PNG. 1MB max.
                        </p>
                      </div>
                    </div>

                    {/* Profile Form */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profile.firstName}
                          onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profile.lastName}
                          onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={profile.company}
                          onChange={(e) => setProfile({...profile, company: e.target.value})}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="role">Role</Label>
                        <Input
                          id="role"
                          value={profile.role}
                          onChange={(e) => setProfile({...profile, role: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="emailUpdates">Email Updates</Label>
                          <p className="text-sm text-gray-500">Get notified about important updates</p>
                        </div>
                        <Switch
                          id="emailUpdates"
                          checked={notifications.emailUpdates}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, emailUpdates: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="marketingEmails">Marketing Emails</Label>
                          <p className="text-sm text-gray-500">Receive tips, tutorials, and product updates</p>
                        </div>
                        <Switch
                          id="marketingEmails"
                          checked={notifications.marketingEmails}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, marketingEmails: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="securityAlerts">Security Alerts</Label>
                          <p className="text-sm text-gray-500">Get notified about security-related activities</p>
                        </div>
                        <Switch
                          id="securityAlerts"
                          checked={notifications.securityAlerts}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, securityAlerts: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="weeklyDigest">Weekly Digest</Label>
                          <p className="text-sm text-gray-500">Weekly summary of your activity</p>
                        </div>
                        <Switch
                          id="weeklyDigest"
                          checked={notifications.weeklyDigest}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, weeklyDigest: checked})
                          }
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Save Preferences</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>Update Password</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Two-Factor Authentication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Two-factor authentication</p>
                          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                        <Button variant="outline">Enable 2FA</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Active Sessions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">Current Session</p>
                            <p className="text-sm text-gray-500">Chrome on macOS • San Francisco, CA</p>
                          </div>
                          <Badge variant="secondary">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">Mobile App</p>
                            <p className="text-sm text-gray-500">iOS App • Last active 2 hours ago</p>
                          </div>
                          <Button variant="outline" size="sm">Revoke</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="billing">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between p-6 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Crown className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">Pro Plan</h3>
                            <p className="text-gray-600">$29/month • Billed monthly</p>
                          </div>
                        </div>
                        <Button variant="outline">Manage Plan</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Available Plans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        {plans.map((plan, index) => (
                          <div
                            key={index}
                            className={`relative p-6 border rounded-lg ${
                              plan.current ? 'border-primary bg-primary/5' : 'border-gray-200'
                            }`}
                          >
                            {plan.popular && (
                              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                                Most Popular
                              </Badge>
                            )}
                            <div className="text-center mb-6">
                              <h3 className="text-lg font-semibold">{plan.name}</h3>
                              <div className="mt-2">
                                <span className="text-3xl font-bold">{plan.price}</span>
                                <span className="text-gray-500">{plan.period}</span>
                              </div>
                            </div>
                            <ul className="space-y-3 mb-6">
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm">
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button 
                              className="w-full" 
                              variant={plan.current ? "secondary" : "default"}
                              disabled={plan.current}
                            >
                              {plan.current ? 'Current Plan' : 'Upgrade'}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Billing History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">Pro Plan - January 2024</p>
                            <p className="text-sm text-gray-500">Paid on Jan 1, 2024</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="font-medium">$29.00</span>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">Pro Plan - December 2023</p>
                            <p className="text-sm text-gray-500">Paid on Dec 1, 2023</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="font-medium">$29.00</span>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="preferences">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Language</Label>
                          <p className="text-sm text-gray-500">Choose your preferred language</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-gray-500" />
                          <span>English (US)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Timezone</Label>
                          <p className="text-sm text-gray-500">Used for scheduling and timestamps</p>
                        </div>
                        <span>Pacific Time (PT)</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Theme</Label>
                          <p className="text-sm text-gray-500">Choose your interface theme</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Palette className="w-4 h-4 text-gray-500" />
                          <span>Light</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Data & Privacy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Analytics</Label>
                          <p className="text-sm text-gray-500">Help us improve by sharing usage data</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Personalization</Label>
                          <p className="text-sm text-gray-500">Personalize your experience based on usage</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="pt-4 border-t">
                        <Button variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete Account
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage