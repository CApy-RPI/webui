import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
  SidebarGroupLabel
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"
import { LayoutDashboard, Calendar, Bell, User, Home } from "lucide-react"

// This replaces your manual links from Sidebar.tsx
const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Events", url: "/events", icon: Calendar },
  { title: "Notifications", url: "/notifications", icon: Bell },
]

const lowerItems = [
  { title: "My Profile", url: "/profile", icon: User },
  { title: "Home", url: "/", icon: Home },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      {/* HEADER
      <SidebarHeader className="h-16 flex items-center px-4 border-b">
        <span className="font-bold">CAPY UI</span>
      </SidebarHeader> */}
      {/* CONTENT */}
      <SidebarContent>
        {/* Upper section for Dashboard, Events, and Notifications */}
        <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => ( 
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      {/* Footer section for Profile and Home */}
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {lowerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      
      
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}