import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Card } from '../../components/card';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to continue your learning journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="student@inspireacademy.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={Mail}
            required
          />

          <Input
            id="password"
            label="Password"
            rightLabel={
              <a href="#forgot" className="forgot-link">Forgot password?</a>
            }
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={Lock}
            rightIcon={showPassword ? Eye : EyeOff}
            onRightIconClick={() => setShowPassword(!showPassword)}
            required
          />

          <Button type="submit" variant="primary" className="full-width">
            <span>Sign In</span>
            <ArrowRight size={18} />
          </Button>
        </form>

        <div className="login-footer">
          Don't have an account? <a href="#signup" className="signup-link">Sign up</a>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;