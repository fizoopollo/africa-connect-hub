import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3, TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Eye,
  Package, ArrowUpRight, ArrowDownRight, Calendar, Download, Filter,
  LayoutDashboard, ShoppingBag, Layers, MessageSquare, Settings, Bell,
  Search, ChevronDown, MoreHorizontal, Globe, Store,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Mock Data ---
const revenueData = [
  { month: "Jul", revenue: 4200, orders: 68 },
  { month: "Aug", revenue: 5800, orders: 92 },
  { month: "Sep", revenue: 4900, orders: 74 },
  { month: "Oct", revenue: 7200, orders: 110 },
  { month: "Nov", revenue: 8900, orders: 138 },
  { month: "Dec", revenue: 12400, orders: 195 },
  { month: "Jan", revenue: 9800, orders: 152 },
  { month: "Feb", revenue: 11200, orders: 170 },
];

const dailySalesData = Array.from({ length: 28 }, (_, i) => ({
  day: `${i + 1}`,
  sales: Math.floor(Math.random() * 600 + 200),
  visitors: Math.floor(Math.random() * 1200 + 400),
}));

const channelData = [
  { name: "Direct", value: 35, color: "hsl(122, 39%, 49%)" },
  { name: "Social Media", value: 28, color: "hsl(36, 100%, 50%)" },
  { name: "Search", value: 22, color: "hsl(46, 100%, 50%)" },
  { name: "Referral", value: 15, color: "hsl(200, 70%, 50%)" },
];

const topProducts = [
  { name: "African Print Maxi Dress", sold: 245, revenue: 12250, growth: 18, image: "👗" },
  { name: "Shea Butter Gift Set", sold: 198, revenue: 5940, growth: 24, image: "🧴" },
  { name: "Handwoven Basket Bag", sold: 156, revenue: 7800, growth: -5, image: "👜" },
  { name: "Ankara Phone Case", sold: 134, revenue: 2010, growth: 42, image: "📱" },
  { name: "Moringa Powder (500g)", sold: 112, revenue: 2240, growth: 8, image: "🌿" },
];

const recentOrders = [
  { id: "#AF-4821", customer: "Amina K.", total: 125.00, status: "completed", date: "2 hours ago" },
  { id: "#AF-4820", customer: "Jean-Pierre M.", total: 89.50, status: "shipped", date: "4 hours ago" },
  { id: "#AF-4819", customer: "Fatima B.", total: 210.00, status: "processing", date: "6 hours ago" },
  { id: "#AF-4818", customer: "Kwame A.", total: 45.00, status: "completed", date: "8 hours ago" },
  { id: "#AF-4817", customer: "Ngozi O.", total: 178.50, status: "pending", date: "12 hours ago" },
];

const conversionFunnel = [
  { stage: "Visitors", count: 12480, pct: 100 },
  { stage: "Product Views", count: 6240, pct: 50 },
  { stage: "Add to Cart", count: 1872, pct: 15 },
  { stage: "Checkout", count: 936, pct: 7.5 },
  { stage: "Purchase", count: 624, pct: 5 },
];

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Overview", href: "/store/analytics" },
  { icon: ShoppingBag, label: "Products", href: "/store/products" },
  { icon: ShoppingCart, label: "Orders", href: "/store/orders" },
  { icon: Users, label: "Customers", href: "/store/customers" },
  { icon: Layers, label: "Store Builder", href: "/store/editor" },
  { icon: BarChart3, label: "Analytics", href: "/store/analytics", active: true },
  { icon: MessageSquare, label: "Messages", href: "/store/messages" },
  { icon: Settings, label: "Settings", href: "/store/settings" },
];

function StatCard({ title, value, change, changeType, icon: Icon, prefix = "" }: {
  title: string; value: string; change: string; changeType: "up" | "down";
  icon: React.ElementType; prefix?: string;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Card className="relative overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold tracking-tight">{prefix}{value}</p>
              <div className={cn("flex items-center gap-1 text-xs font-medium",
                changeType === "up" ? "text-primary" : "text-destructive"
              )}>
                {changeType === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {change} vs last month
              </div>
            </div>
            <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center",
              changeType === "up" ? "bg-primary/10" : "bg-destructive/10"
            )}>
              <Icon className={cn("h-6 w-6", changeType === "up" ? "text-primary" : "text-destructive")} />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const statusColors: Record<string, string> = {
  completed: "bg-primary/10 text-primary border-primary/20",
  shipped: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  processing: "bg-secondary/10 text-secondary border-secondary/20",
  pending: "bg-muted text-muted-foreground border-border",
};

export default function StoreAnalytics() {
  const [dateRange, setDateRange] = useState("30d");
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-card">
        <div className="p-5 border-b border-border">
          <Link to="/afrify" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-orange-gradient flex items-center justify-center">
              <Store className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <span className="text-sm font-bold text-foreground">My Afrify Store</span>
              <p className="text-xs text-muted-foreground">afrify.shop/amina</p>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                link.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">A</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Amina K.</p>
              <p className="text-xs text-muted-foreground truncate">Growth Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 h-14">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-bold text-foreground">Analytics</h1>
              <nav className="hidden sm:flex items-center text-sm text-muted-foreground">
                <span>Dashboard</span>
                <ChevronDown className="h-3 w-3 mx-1 rotate-[-90deg]" />
                <span className="text-foreground font-medium">Analytics</span>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Bell className="h-4 w-4" /></Button>
              <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
                <Download className="h-3.5 w-3.5" /> Export
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
            {/* Date range selector */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Store Performance</h2>
                <p className="text-sm text-muted-foreground">Track your sales, traffic, and customer insights</p>
              </div>
              <div className="flex items-center gap-2">
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="w-36">
                    <Calendar className="h-3.5 w-3.5 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 90 days</SelectItem>
                    <SelectItem value="12m">Last 12 months</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon"><Filter className="h-3.5 w-3.5" /></Button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Total Revenue" value="11,200" change="+14.2%" changeType="up" icon={DollarSign} prefix="$" />
              <StatCard title="Orders" value="170" change="+11.8%" changeType="up" icon={ShoppingCart} />
              <StatCard title="Visitors" value="12,480" change="+22.5%" changeType="up" icon={Eye} />
              <StatCard title="Conversion" value="5.0%" change="-0.3%" changeType="down" icon={TrendingUp} />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">Revenue & Orders</CardTitle>
                      <CardDescription>Monthly performance overview</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(122, 39%, 49%)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="hsl(122, 39%, 49%)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 10%, 90%)" />
                        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(0, 0%, 40%)" }} />
                        <YAxis tick={{ fontSize: 12, fill: "hsl(0, 0%, 40%)" }} />
                        <Tooltip
                          contentStyle={{
                            background: "hsl(0, 0%, 100%)", border: "1px solid hsl(40, 10%, 90%)",
                            borderRadius: "8px", fontSize: "12px",
                          }}
                        />
                        <Area type="monotone" dataKey="revenue" stroke="hsl(122, 39%, 49%)" fill="url(#revenueGrad)" strokeWidth={2} />
                        <Line type="monotone" dataKey="orders" stroke="hsl(36, 100%, 50%)" strokeWidth={2} dot={false} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Traffic Sources */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Traffic Sources</CardTitle>
                  <CardDescription>Where your visitors come from</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={channelData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" strokeWidth={2} stroke="hsl(0, 0%, 100%)">
                          {channelData.map((entry, i) => (
                            <Cell key={i} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ background: "hsl(0, 0%, 100%)", border: "1px solid hsl(40, 10%, 90%)", borderRadius: "8px", fontSize: "12px" }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2">
                    {channelData.map((ch) => (
                      <div key={ch.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ch.color }} />
                          <span className="text-muted-foreground">{ch.name}</span>
                        </div>
                        <span className="font-medium text-foreground">{ch.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Daily Sales + Conversion Funnel */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <Card className="lg:col-span-3">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Daily Sales</CardTitle>
                  <CardDescription>Sales volume over the past 28 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dailySalesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 10%, 90%)" />
                        <XAxis dataKey="day" tick={{ fontSize: 10, fill: "hsl(0, 0%, 40%)" }} />
                        <YAxis tick={{ fontSize: 10, fill: "hsl(0, 0%, 40%)" }} />
                        <Tooltip contentStyle={{ background: "hsl(0, 0%, 100%)", border: "1px solid hsl(40, 10%, 90%)", borderRadius: "8px", fontSize: "12px" }} />
                        <Bar dataKey="sales" fill="hsl(122, 39%, 49%)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Conversion Funnel */}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Conversion Funnel</CardTitle>
                  <CardDescription>Visitor journey breakdown</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {conversionFunnel.map((stage, i) => (
                    <div key={stage.stage} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{stage.stage}</span>
                        <span className="font-mono font-medium text-foreground text-xs">{stage.count.toLocaleString()} ({stage.pct}%)</span>
                      </div>
                      <Progress
                        value={stage.pct}
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Bottom section: Top Products + Recent Orders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Products */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">Top Products</CardTitle>
                      <CardDescription>Best performing items this month</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product, i) => (
                      <div key={product.name} className="flex items-center gap-3">
                        <div className="text-2xl w-10 h-10 rounded-lg bg-muted flex items-center justify-center">{product.image}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.sold} sold · ${product.revenue.toLocaleString()}</p>
                        </div>
                        <div className={cn("text-xs font-medium flex items-center gap-0.5",
                          product.growth > 0 ? "text-primary" : "text-destructive"
                        )}>
                          {product.growth > 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                          {Math.abs(product.growth)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">Recent Orders</CardTitle>
                      <CardDescription>Latest transactions</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs">Order</TableHead>
                        <TableHead className="text-xs">Customer</TableHead>
                        <TableHead className="text-xs">Total</TableHead>
                        <TableHead className="text-xs">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-mono text-xs font-medium">{order.id}</TableCell>
                          <TableCell className="text-sm">{order.customer}</TableCell>
                          <TableCell className="text-sm font-medium">${order.total.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={cn("text-xs capitalize", statusColors[order.status])}>
                              {order.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
