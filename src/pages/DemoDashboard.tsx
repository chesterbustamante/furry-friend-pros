import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, Eye, MousePointer, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const DemoDashboard = () => {
  // Mock demo data
  const trafficData = [
    { month: "Jan", visitors: 12400 },
    { month: "Feb", visitors: 15200 },
    { month: "Mar", visitors: 18900 },
    { month: "Apr", visitors: 21500 },
    { month: "May", visitors: 24800 },
    { month: "Jun", visitors: 28300 },
  ];

  const affiliateData = [
    { week: "Week 1", clicks: 520, conversions: 45 },
    { week: "Week 2", clicks: 680, conversions: 58 },
    { week: "Week 3", clicks: 750, conversions: 67 },
    { week: "Week 4", clicks: 890, conversions: 82 },
  ];

  const stats = [
    {
      title: "Total Visitors",
      value: "121,300",
      change: "+23.5%",
      icon: Eye,
      trend: "up",
    },
    {
      title: "Affiliate Clicks",
      value: "2,840",
      change: "+18.2%",
      icon: MousePointer,
      trend: "up",
    },
    {
      title: "Conversions",
      value: "252",
      change: "+12.8%",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Est. Revenue",
      value: "$3,780",
      change: "+25.4%",
      icon: DollarSign,
      trend: "up",
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-4 py-12">
          {/* Demo Banner */}
          <div className="mb-8 p-6 bg-accent/20 border-2 border-accent rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    DEMO DATA
                  </Badge>
                </div>
                <h2 className="font-heading text-2xl font-bold mb-2">
                  Analytics Dashboard Demo
                </h2>
                <p className="text-muted-foreground">
                  This is a preview with sample data. Sign up to track your real metrics!
                </p>
              </div>
              <Link to="/auth">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  Get This Template
                </Button>
              </Link>
            </div>
          </div>

          <h1 className="font-heading text-4xl font-bold mb-8">Dashboard Overview</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">{stat.change}</span> from last month
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="visitors" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Affiliate Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={affiliateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="clicks" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="conversions" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DemoDashboard;
