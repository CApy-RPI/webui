//Menubar components

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

// Dialog box for "sign in" pop up
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Chrome, Mail } from "lucide-react";

export function AppMenubar() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center gap-4">
            {/* Standard Navigation */}
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger 
                        className="cursor-pointer" 
                        onClick={() => navigate('/profile')}
                    >
                        Profile
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>

            {/* Registration Popup */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Register</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create an account</DialogTitle>
                        <DialogDescription>
                            Choose your preferred provider to sign in to CAPY.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Button className="w-full flex gap-2" variant="outline">
                            <Chrome className="h-4 w-4" />
                            Sign in with Google
                        </Button>
                        <Button className="w-full flex gap-2" variant="outline">
                            <Mail className="h-4 w-4" />
                            Sign in with Outlook
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}