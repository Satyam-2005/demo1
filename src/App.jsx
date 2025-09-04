// App.jsx
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import Background from "./components/Background";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background always present */}
      <Background />

      {loading ? (
        // Step 1: Show loading first
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : !showLogin ? (
        // Step 2: Show Welcome Page after loading
        <WelcomePage onProceed={() => setShowLogin(true)} />
      ) : (
        // Step 3: Show Login Page after clicking Login
        <LoginPage />
      )}
    </div>
    <Footer/>
    </>
  );
}
