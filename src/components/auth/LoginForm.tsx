
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type LoginFormProps = {
  onSuccess: (token: string) => void;
};

const API_URL = "http://localhost:3000";

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      onSuccess(data.token);
      
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Invalid email or password.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-base font-normal">
          Email Address <span className="text-red-500">*</span>
        </label>
        <Input
          type="email"
          placeholder="Enter the email"
          className="bg-[#f5f8fa]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-base font-normal">
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter the Password"
            className="bg-[#f5f8fa] pr-20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#006666] text-sm font-medium"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        <div className="flex justify-end">
          <a
            href="#"
            className="text-[#006666] text-sm hover:underline mt-2"
          >
            Forgot password?
          </a>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#006666] hover:bg-[#005555] text-white"
      >
        Sign In
      </Button>
    </form>
  );
};
