import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Living Document Note */}
        <div className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
          <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
            <span className="font-semibold block mb-1">Living Protocol</span>
            This list is continuously evolved based on new research and
            efficacious data. Individuals should{" "}
            <span className="italic font-semibold">try</span> to follow these
            protocols, keeping in mind that life is short and perfection is the
            enemy of progress.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex gap-4 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
          <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed space-y-2">
            <p className="font-semibold">Disclaimer</p>
            <p>
              I am not a doctor, financial advisor, or health professional. The
              content provided here is for informational purposes only and is
              based on personal research and curation.
            </p>
            <p>
              Always consult with a qualified professional before making
              significant changes to your health regimen or financial strategy.
            </p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} MPROTOCOL.
          </p>
        </div>
      </div>
    </footer>
  );
}
