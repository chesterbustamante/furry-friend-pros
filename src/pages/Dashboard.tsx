import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductManagement from "@/components/ProductManagement";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, Eye, MousePointer, DollarSign } from "lucide-react";

const Dashboard = () => {
  // Mock analytics data
  const trafficData = [
    { month: "Jan", visitors: 12400 },
    { month: "Feb", visitors: 15300 },
    { month: "Mar", visitors: 18700 },
    { month: "Apr", visitors: 22100 },
    { month: "May", visitors: 26800 },
  ];

  const affiliateData = [
    { month: "Jan", clicks: 850, sales: 42 },
    { month: "Feb", clicks: 1120, sales: 58 },
    { month: "Mar", clicks: 1450, sales: 73 },
    { month: "Apr", clicks: 1680, sales: 89 },
    { month: "May", clicks: 2100, sales: 107 },
  ];

  const stats = [
    { title: "Monthly Visitors", value: "26,800", change: "+21.3%", icon: Eye, color: "text-primary" },
    { title: "Affiliate Clicks", value: "2,100", change: "+25.0%", icon: MousePointer, color: "text-secondary" },
    { title: "Conversions", value: "107", change: "+20.2%", icon: TrendingUp, color: "text-accent" },
    { title: "Est. Revenue", value: "$2,847", change: "+18.5%", icon: DollarSign, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your site and products</p>
        </div>

        <Tabs defaultValue="analytics" className="w-full mb-8">
          <TabsList>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-8 mt-6">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-muted rounded-full flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl font-heading font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Traffic Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Traffic</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="visitors" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Affiliate Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Affiliate Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={affiliateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="clicks" fill="hsl(var(--secondary))" />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Content */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "10 Essential Dog Training Commands", views: 8420, clicks: 342, revenue: "$486" },
                { title: "Best Pet Toys of 2025", views: 7230, clicks: 289, revenue: "$412" },
                { title: "Complete Cat Grooming Guide", views: 6180, clicks: 251, revenue: "$357" },
                { title: "Puppy Nutrition Guide", views: 5840, clicks: 227, revenue: "$324" },
              ].map((article, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex-1">
                    <p className="font-semibold mb-1">{article.title}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{article.views.toLocaleString()} views</span>
                      <span>{article.clicks} clicks</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{article.revenue}</p>
                    <p className="text-xs text-muted-foreground">est. earnings</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <ProductManagement />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
