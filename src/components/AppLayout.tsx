import { Outlet } from 'react-router-dom';
import { 
  SidebarProvider, 
  SidebarTrigger, 
  SidebarInset 
} from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { AppMenubar } from "./AppMenubar";
import Header from './Header';

export default function AppLayout() {
    return (
        
        <SidebarProvider>
            {/* The new shadcn sidebar component */}
            <AppSidebar />
            
            <SidebarInset>
                <Header />
                {/* Top Bar: This contains the toggle button 
                   and your existing Header component 
                */}
                {/* <header className="flex h-16 shrink-0 items-center gap-2 px-4"> */}
                    <SidebarTrigger className="-ml-1" />
                {/* </header> */}

                {/* Main Content Area: This is where your pages 
                   (Dashboard, Events, etc.) will render 
                */}
                <main className="flex flex-1 flex-col gap-4 p-4">
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}