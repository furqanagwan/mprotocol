"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle, Zap } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Free Protocol Guide</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Get Your 7-Day Protocol Starter Kit
            </h2>

            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Join thousands of men optimizing their existence. Get our curated
              guide with the essential protocols for health, wealth, and
              aesthetics.
            </p>

            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap"
                >
                  Get Free Guide
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
                <CheckCircle className="w-6 h-6 text-white" />
                <p className="text-white font-semibold">
                  Check your inbox! Your guide is on the way.
                </p>
              </div>
            )}

            <p className="text-white/60 text-sm mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
