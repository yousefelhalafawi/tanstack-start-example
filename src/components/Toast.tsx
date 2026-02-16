import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type = "success", onClose, duration = 3000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger entry animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    
    const closeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for exit animation
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, [onClose, duration]);

  const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";
  const Icon = type === "success" ? CheckCircle2 : AlertCircle;

  return (
    <div
      className={`fixed bottom-6 right-6 z-100 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-white transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90"
      } ${bgColor}`}
    >
      <Icon size={20} className="shrink-0" />
      <span className="font-bold text-sm tracking-tight">{message}</span>
      <button 
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-2 p-1 hover:bg-black/10 rounded-lg transition-colors"
      >
        <X size={16} />
      </button>
      
      {/* Animated progress bar to show thread blocking impact */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full overflow-hidden w-full">
         <div 
           className="h-full bg-white transition-all linear"
           style={{ 
             width: isVisible ? '100%' : '0%',
             transitionDuration: `${duration}ms`,
             transitionProperty: 'width'
           }}
         />
      </div>
    </div>
  );
}
