import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            setLoading(true);
            const res = await axios.post(`https://sample-website-backend.vercel.app/api/admin/login`, formData);
            console.log(res);
            if (res.data) {
                console.log("login page", res.data)
                navigate('/features');
                toast.success(res.data.message);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className='relative w-full h-scre flex flex-col to-muted/20en md:h-[760px] bg-sky-100 overflow-hidden'>
            <div className='min-h-screen flex flex-col to-muted/20'>
                <div className='flex-1 flex items-center justify-center p-4'>
                    <div className='w-full max-w-md space-y-6'>
                        <div className='text-center space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tight text-sky-600'>Login into your account</h1>
                        </div>
                        <Card className="w-full max-w-sm m-auto">
                            <CardHeader className='space-y-1'>
                                <CardTitle className='text-2xl text-center text-sky-600 font-bold'>Login</CardTitle>
                                <CardDescription>
                                    Login into your account
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            required onChange={handleChange}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className='flex items-center justify-between'>
                                            <Label htmlFor="password">Password</Label>

                                        </div>
                                        <div className="relative">
                                            <Input id="password" type={showPassword ? "text" : "password"} required onChange={handleChange} name="password" value={formData.password} placeholder="Enter your password" />
                                            <Button variant="ghost"
                                                className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                                                onClick={() => setShowPassword(!showPassword)}
                                                disabled={loading}
                                            >
                                                {
                                                    showPassword ? <EyeOff className='w-4 h-4 text-gray-600' /> : <Eye className='w-4 h-4 text-gray-600' />
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-400" onClick={handleSubmit} disabled={loading} required>
                                    {
                                        loading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                <span>Logging account...</span>
                                            </>) : "Login"
                                    }
                                </Button>
                                <p className="text-muted-foreground text-sm text-center">
                                    Don't have an account?{" "}
                                    <Link to="/signup" className="text-sky-600 hover:underline">Sign Up</Link>
                                </p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login