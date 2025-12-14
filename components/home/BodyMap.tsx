"use client";

import React, { useState } from "react";
import { X, AlertCircle, Heart, Shield, Sparkles } from "lucide-react";

interface HealthPoint {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
  importance: string;
  checkFrequency: string;
  icon: React.ReactNode;
}

const maleHealthPoints: HealthPoint[] = [
  {
    id: "prostate",
    name: "Prostate Health",
    x: 50,
    y: 53,
    description:
      "Prostate cancer is the most common cancer in men. Early detection through PSA testing and digital exams is crucial.",
    importance:
      "1 in 8 men will be diagnosed with prostate cancer. Risk increases significantly after age 50 (45 for Black men or those with family history).",
    checkFrequency: "Annual PSA test (50+, or 45+ with risk factors)",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "heart",
    name: "Cardiovascular Health",
    x: 50,
    y: 32,
    description:
      "Heart disease is responsible for 1 in 4 male deaths. Men develop heart disease 10 years earlier than women on average.",
    importance:
      "Know your numbers: blood pressure, cholesterol, blood sugar. Chest pain, shortness of breath, and arm pain are warning signs.",
    checkFrequency:
      "Annual checkup, Blood pressure every visit, Cholesterol every 5 years",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    id: "skin",
    name: "Skin Health",
    x: 75,
    y: 38,
    description:
      "Men are 2x more likely to die from melanoma than women, partly due to lower rates of self-exams and sunscreen use.",
    importance:
      "Check areas often exposed to sun: ears, scalp (if balding), neck, arms. The ABCDE rule helps identify suspicious moles.",
    checkFrequency: "Monthly self-check, Annual dermatologist visit",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: "testicles",
    name: "Testicular Health",
    x: 50,
    y: 60,
    description:
      "Testicular cancer is the most common cancer in young men (15-35). It's also one of the most curable when caught early.",
    importance:
      "Monthly self-exams can detect lumps, swelling, or changes in size. Any painless lump should be checked immediately.",
    checkFrequency: "Monthly self-exam",
    icon: <AlertCircle className="w-5 h-5" />,
  },
  {
    id: "colon",
    name: "Colorectal Health",
    x: 40,
    y: 48,
    description:
      "Colorectal cancer is the 3rd most common cancer in men. Screening can find and remove precancerous polyps.",
    importance:
      "Colonoscopy can prevent cancer by removing polyps before they become malignant. Don't ignore blood in stool or changes in bowel habits.",
    checkFrequency: "Colonoscopy at 45, then every 10 years",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "lungs",
    name: "Respiratory Health",
    x: 60,
    y: 34,
    description:
      "Lung cancer kills more men than any other cancer. Smoking is responsible for 80% of cases, but never-smokers can also be affected.",
    importance:
      "Low-dose CT scans can detect lung cancer early in high-risk individuals. Quitting smoking at any age reduces risk significantly.",
    checkFrequency: "Annual low-dose CT (if 50+ and 20+ pack-year history)",
    icon: <AlertCircle className="w-5 h-5" />,
  },
];

export default function MaleBodyMap() {
  const [selectedPoint, setSelectedPoint] = useState<HealthPoint | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Body SVG Container */}
      <div className="relative aspect-[1/1.8] bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl overflow-hidden">
        {/* Simplified Male Silhouette */}
        <svg
          viewBox="0 0 100 180"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Body silhouette */}
          <path
            d="M50 10 
               C62 10 67 20 67 25
               C67 30 62 35 58 38
               C65 42 75 48 78 60
               C80 72 78 82 75 92
               C72 102 62 108 55 112
               C55 130 58 155 60 175
               L55 175
               C54 158 52 135 50 125
               C48 135 46 158 45 175
               L40 175
               C42 155 45 130 45 112
               C38 108 28 102 25 92
               C22 82 20 72 22 60
               C25 48 35 42 42 38
               C38 35 33 30 33 25
               C33 20 38 10 50 10"
            fill="url(#maleBodyGradient)"
            className="drop-shadow-lg"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient
              id="maleBodyGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Interactive hotspots */}
        {maleHealthPoints.map((point) => (
          <button
            key={point.id}
            onClick={() => setSelectedPoint(point)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              selectedPoint?.id === point.id
                ? "bg-blue-600 text-white scale-125 shadow-lg shadow-blue-500/50"
                : "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md hover:scale-110 hover:shadow-lg"
            }`}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
            aria-label={point.name}
          >
            <span className="relative flex h-3 w-3">
              {selectedPoint?.id !== point.id && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              )}
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </button>
        ))}
      </div>

      {/* Info Panel */}
      {selectedPoint && (
        <div className="mt-6 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-blue-200 dark:border-blue-800 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-600 dark:text-blue-400">
                {selectedPoint.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedPoint.name}
              </h3>
            </div>
            <button
              onClick={() => setSelectedPoint(null)}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {selectedPoint.description}
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-4">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              <strong>Why It Matters:</strong> {selectedPoint.importance}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Shield className="w-4 h-4" />
            <span>
              <strong>Check Frequency:</strong> {selectedPoint.checkFrequency}
            </span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span>Tap to learn about health checkpoints</span>
        </div>
      </div>
    </div>
  );
}
