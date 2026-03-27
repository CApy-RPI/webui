import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        location: "",
        description: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Event Data:", formData);
        //  save the event
        navigate("/events");
    };

    return (
        <div className="flex flex-col gap-4 p-4 max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Event</CardTitle>
                    <CardDescription>Fill out the details below to create your event.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Event Name
                            </label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Summer Music Festival"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="date" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Date
                            </label>
                            <Input
                                id="date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="location" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Location
                            </label>
                            <Input
                                id="location"
                                name="location"
                                placeholder="Central Park, NY"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="description" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                placeholder="A brief description of the event..."
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" type="button" onClick={() => navigate("/events")}>
                            Cancel
                        </Button>
                        <Button type="submit">Create Event</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
