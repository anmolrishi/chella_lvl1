import React, { useState } from 'react';
import {
  Phone,
  Settings,
  TestTube,
  BarChart,
  Menu,
  Cpu,
  ArrowRight,
  MessageSquare,
  Calendar,
  Clock,
} from 'lucide-react';
import Auth from './Auth';

export default function LandingPage() {
  const [showAuth, setShowAuth] = useState(false);

  const handleGetStarted = () => {
    setShowAuth(true);
  };

  const handleBackToLanding = () => {
    setShowAuth(false);
  };

  if (showAuth) {
    return <Auth onBackToLanding={handleBackToLanding} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center">
          <Phone className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">
            FoodieBot
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#get-started"
          >
            Get Started
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                    FoodieBot: Your AI-Powered Restaurant Assistant
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                    Revolutionize your restaurant's customer service with
                    FoodieBot. Handle orders, answer queries, and provide
                    real-time support via phone calls.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button
                    className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 disabled:opacity-50"
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[300px] h-[300px] bg-blue-100 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Phone className="h-24 w-24 text-blue-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <MessageSquare className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">
                  Natural Language Processing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Understand and respond to customer queries in natural
                  language.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <Calendar className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">
                  Reservation Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Effortlessly handle bookings and manage your restaurant's
                  capacity.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <Clock className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">24/7 Availability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Provide round-the-clock assistance to your customers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <BarChart className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">Caller Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gain insights from call recordings, data analytics, and
                  sentiment analysis.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <Menu className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">Menu Embedding</h3>
                <p className="text-gray-600 leading-relaxed">
                  Easy access to real-time menus and updates for callers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <Cpu className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">AI-Powered Assistance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leverage advanced AI to provide intelligent and context-aware
                  responses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
              How FoodieBot Works
            </h2>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">1. Onboarding</h3>
                <p className="text-gray-600 leading-relaxed">
                  Set up your restaurant's profile, including menu items,
                  operating hours, and seating capacity.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2. Customization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalize your FoodieBot with a unique name, welcome
                  message, and interaction style.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">3. Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Thoroughly test your bot in a sandbox environment to ensure it
                  meets your standards.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">4. Deployment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Once satisfied, deploy FoodieBot to start handling customer
                  calls and inquiries.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  5. Continuous Improvement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Use analytics and insights to refine and improve your bot's
                  performance over time.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">6. Scale with Ease</h3>
                <p className="text-gray-600 leading-relaxed">
                  As your business grows, FoodieBot scales effortlessly to meet
                  increasing demand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="get-started"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                Join the restaurants already using FoodieBot to improve their
                customer service and streamline operations.
              </p>
              <button
                onClick={handleGetStarted}
                className="px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-sm text-gray-500">
          © 2024 FoodieBot. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-sm hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
        </nav>
      </footer>
    </div>
  );
}
