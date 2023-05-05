import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function Footer({ footer_text: text }) {
  return (
    <div>
      <h4>{text ? text : "Default footer"}</h4>
      <Link href="/">HOME</Link>
    </div>
  );
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [likes, setLikes] = useState(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Perform authentication logic here.
    // For example, make a request to your authentication API.
    try {
      const response = await fetch("/dashboard/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        setError(message);
      } else {
        setError(null);
        // Redirect the user to the home page or a protected route after successful login
        router.push("/");
      }
    } catch (err) {
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <div>
          <Link href="/register">Register</Link>
        </div>
        <div>
          <Link href="/forgot-password">Forgot password?</Link>
        </div>
      </div>
      <Footer footer_text="Footer" />
    </>
  );
}
