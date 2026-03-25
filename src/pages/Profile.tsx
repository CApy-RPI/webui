import React from 'react';
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      {/* Container to control width without adding a box/border */}
      <div className="w-full max-w-sm space-y-8">
        
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">Manage your CAPY account details.</p>
        </div>

        <div className="space-y-6">
          {/* Name Field */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Ignacio Garcia Novas" className="border-0 border-b rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-black transition-all" />
          </div>

          {/* Email Field */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="iggy@example.com" className="border-0 border-b rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-black transition-all" />
          </div>

          {/* Class Field */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="class">Class</Label>
            <Input id="class" type="text" placeholder="Computer Science & Philosophy" className="border-0 border-b rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-black transition-all" />
          </div>

          {/* Graduation Date Field */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="grad-date">Graduation Date</Label>
            <Input id="grad-date" type="text" placeholder="May 2026" className="border-0 border-b rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-black transition-all" />
          </div>

          <Button variant="default" className="w-full">
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
}