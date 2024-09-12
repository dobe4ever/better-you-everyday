// src/components/screens/LoginSignup.js
import React, { useState } from "react";
import { Button } from "../common/button.jsx";
import { Input } from "../common/input.jsx";
import { Card, CardHeader, CardContent } from "../ui/card.jsx";


const LoginSignupForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); // Call the onLogin function passed as a prop
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader className="text-2xl font-bold text-center">Login / Signup</CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-orange-main hover:bg-orange-700 text-white">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginSignupForm;