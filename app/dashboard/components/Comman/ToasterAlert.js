'use client';
import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XMarkIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const ToasterAlert = ({ message = "Successfully saved!", description = "File saved. Click here to view.", type = "success", show, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const typeIcon = {
    success: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
    error: <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />,
    info: <ExclamationTriangleIcon className="h-6 w-6 text-blue-500" />,
  };

  if (!visible) return null;

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-[9999]"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end transition-all duration-300">
        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 animate-slide-up">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">{typeIcon[type]}</div>

              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-semibold text-gray-900">{message}</p>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              </div>

              <div className="ml-4 flex flex-shrink-0">
                <button
                  onClick={() => {
                    setVisible(false);
                    onClose && onClose();
                  }}
                  type="button"
                  className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple slide animation */}
      <style jsx>{`
        @keyframes slide-up {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ToasterAlert;
