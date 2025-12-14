"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { X, Shield, Heart, AlertCircle, Sparkles } from "lucide-react";
import * as THREE from "three";

interface Condition {
  name: string;
  description: string;
  checkFrequency: string;
}

interface HealthPoint {
  id: string;
  name: string;
  position: [number, number, number];
  conditions: Condition[];
  icon: React.ReactNode;
}

const maleHealthPoints: HealthPoint[] = [
  {
    id: "prostate",
    name: "Prostate Health",
    position: [0, -0.15, 0.35],
    icon: <Shield className="w-4 h-4" />,
    conditions: [
      {
        name: "Prostate Cancer",
        description:
          "1 in 8 men will be diagnosed with prostate cancer. Risk increases significantly after age 50 (45 for Black men or those with family history).",
        checkFrequency: "Annual PSA test (50+, or 45+ with risk factors)",
      },
      {
        name: "Benign Prostatic Hyperplasia (BPH)",
        description:
          "Enlarged prostate affecting over 50% of men over 50. Causes urinary symptoms like frequent urination or weak stream.",
        checkFrequency: "Discuss symptoms at annual checkup",
      },
      {
        name: "Prostatitis",
        description:
          "Inflammation of the prostate causing pelvic pain and urinary issues. Can be acute or chronic.",
        checkFrequency: "Seek care if experiencing symptoms",
      },
    ],
  },
  {
    id: "heart",
    name: "Cardiovascular Health",
    position: [0, 1.0, 0.4],
    icon: <Heart className="w-4 h-4" />,
    conditions: [
      {
        name: "Heart Disease",
        description:
          "Heart disease is responsible for 1 in 4 male deaths. Men develop heart disease 10 years earlier than women on average.",
        checkFrequency:
          "Annual checkup, Blood pressure every visit, Cholesterol every 5 years",
      },
      {
        name: "Arrhythmia",
        description:
          "Irregular heartbeat that can range from harmless to life-threatening. Symptoms include palpitations and dizziness.",
        checkFrequency: "Report palpitations to doctor",
      },
      {
        name: "Hypertension",
        description:
          "High blood pressure is a 'silent killer' with no symptoms. Major risk factor for heart attack and stroke.",
        checkFrequency: "Check blood pressure at every doctor visit",
      },
    ],
  },
  {
    id: "skin",
    name: "Skin Health",
    position: [0.6, 0.5, 0.3],
    icon: <Sparkles className="w-4 h-4" />,
    conditions: [
      {
        name: "Skin Cancer (Melanoma)",
        description:
          "Men are 2x more likely to die from melanoma than women. Check areas exposed to sun: ears, scalp, neck, arms.",
        checkFrequency: "Monthly self-check, Annual dermatologist visit",
      },
      {
        name: "Psoriasis",
        description:
          "Autoimmune condition causing scaly, itchy patches. Can be triggered by stress, infections, or medications.",
        checkFrequency: "Manage flares with dermatologist",
      },
      {
        name: "Eczema",
        description:
          "Inflammatory skin condition common in men who work with irritants. Causes dry, itchy, red patches.",
        checkFrequency: "Moisturize regularly, avoid triggers",
      },
      {
        name: "Actinic Keratosis",
        description:
          "Rough, scaly patches from sun damage. Can be precancerous and should be treated.",
        checkFrequency:
          "Annual skin exam, especially if history of sun exposure",
      },
    ],
  },
  {
    id: "testicles",
    name: "Testicular Health",
    position: [0, -0.5, 0.4],
    icon: <AlertCircle className="w-4 h-4" />,
    conditions: [
      {
        name: "Testicular Cancer",
        description:
          "Most common cancer in young men (15-35). Highly curable when caught early. Monthly self-exams save lives.",
        checkFrequency: "Monthly self-exam",
      },
      {
        name: "Varicocele",
        description:
          "Enlarged veins in the scrotum affecting 15% of men. Can impact fertility but often asymptomatic.",
        checkFrequency: "Check during annual physical",
      },
      {
        name: "Epididymitis",
        description:
          "Inflammation of the tube behind the testicle, often from infection. Causes pain and swelling.",
        checkFrequency: "Seek care if experiencing symptoms",
      },
    ],
  },
  {
    id: "colon",
    name: "Colorectal Health",
    position: [-0.4, 0, 0.3],
    icon: <Shield className="w-4 h-4" />,
    conditions: [
      {
        name: "Colorectal Cancer",
        description:
          "3rd most common cancer in men. Colonoscopy can prevent cancer by removing polyps before they become malignant.",
        checkFrequency: "Colonoscopy at 45, then every 10 years",
      },
      {
        name: "Diverticulitis",
        description:
          "Inflammation of pouches in the colon wall. Common after 40. Symptoms include abdominal pain and fever.",
        checkFrequency: "High-fiber diet for prevention",
      },
      {
        name: "Irritable Bowel Syndrome (IBS)",
        description:
          "Chronic condition causing abdominal pain, bloating, and altered bowel habits. Stress often triggers symptoms.",
        checkFrequency: "Work with gastroenterologist for management",
      },
    ],
  },
  {
    id: "lungs",
    name: "Respiratory Health",
    position: [0.35, 0.9, 0.35],
    icon: <AlertCircle className="w-4 h-4" />,
    conditions: [
      {
        name: "Lung Cancer",
        description:
          "Kills more men than any other cancer. Smoking causes 80% of cases. Low-dose CT scans can detect early.",
        checkFrequency: "Annual low-dose CT (if 50+ and 20+ pack-year history)",
      },
      {
        name: "COPD",
        description:
          "Chronic obstructive pulmonary disease. Progressive and life-limiting. Quitting smoking slows progression.",
        checkFrequency: "Spirometry test if smoker or ex-smoker",
      },
      {
        name: "Sleep Apnea",
        description:
          "Breathing stops repeatedly during sleep. More common in overweight men. Increases heart disease risk.",
        checkFrequency: "Sleep study if snoring or daytime fatigue",
      },
    ],
  },
];

function BodyModel({
  onHotspotClick,
  activeId,
}: {
  onHotspotClick: (point: HealthPoint) => void;
  activeId: string | null;
}) {
  const bodyRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (bodyRef.current) {
      bodyRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={bodyRef}>
      {/* Head */}
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#7abffa" />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.2, 16]} />
        <meshStandardMaterial color="#7abffa" />
      </mesh>

      {/* Torso - broader for male */}
      <mesh position={[0, 0.7, 0]}>
        <capsuleGeometry args={[0.4, 0.8, 16, 32]} />
        <meshStandardMaterial color="#5a9fd4" />
      </mesh>

      {/* Hips - narrower for male */}
      <mesh position={[0, -0.1, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#5a9fd4" />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.2, -0.9, 0]}>
        <capsuleGeometry args={[0.14, 0.8, 16, 32]} />
        <meshStandardMaterial color="#7abffa" />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.2, -0.9, 0]}>
        <capsuleGeometry args={[0.14, 0.8, 16, 32]} />
        <meshStandardMaterial color="#7abffa" />
      </mesh>

      {/* Left Arm - slightly thicker for male */}
      <mesh position={[-0.6, 0.85, 0]} rotation={[0, 0, 0.25]}>
        <capsuleGeometry args={[0.1, 0.6, 16, 32]} />
        <meshStandardMaterial color="#7abffa" />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.6, 0.85, 0]} rotation={[0, 0, -0.25]}>
        <capsuleGeometry args={[0.1, 0.6, 16, 32]} />
        <meshStandardMaterial color="#7abffa" />
      </mesh>

      {/* Health Hotspots */}
      {maleHealthPoints.map((point) => (
        <group key={point.id} position={point.position}>
          <mesh onClick={() => onHotspotClick(point)}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={activeId === point.id ? "#3b82f6" : "#ffffff"}
              emissive={activeId === point.id ? "#3b82f6" : "#06b6d4"}
              emissiveIntensity={activeId === point.id ? 0.8 : 0.4}
            />
          </mesh>
          <Html center distanceFactor={4}>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-transform ${
                activeId === point.id
                  ? "bg-blue-600 text-white scale-125"
                  : "bg-white text-blue-600 hover:scale-110"
              } shadow-lg`}
              onClick={() => onHotspotClick(point)}
            >
              <span className="text-xs">●</span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function MaleBodyMap() {
  const [selectedPoint, setSelectedPoint] = useState<HealthPoint | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 3D Canvas */}
        <div className="relative aspect-square bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl overflow-hidden">
          <Canvas camera={{ position: [0, 0.5, 4], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, 5, 5]} intensity={0.4} />
            <Suspense fallback={null}>
              <BodyModel
                onHotspotClick={setSelectedPoint}
                activeId={selectedPoint?.id ?? null}
              />
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={2.5}
              maxDistance={6}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>

          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-900/80 rounded-lg px-3 py-2">
              🔄 Drag to rotate • Scroll to zoom • Click hotspots for details
            </p>
          </div>
        </div>

        {/* Info Panel */}
        <div className="flex flex-col">
          {selectedPoint ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-blue-200 dark:border-blue-800 animate-in slide-in-from-right-4 duration-300">
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

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {selectedPoint.conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4"
                  >
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      {condition.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {condition.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                      <Shield className="w-3 h-3" />
                      <span>{condition.checkFrequency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center h-full min-h-[300px] text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center mb-4">
                <span className="text-3xl">👆</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Select a Health Point
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                Click on any glowing hotspot on the 3D model to learn about
                health conditions and recommended screenings.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
