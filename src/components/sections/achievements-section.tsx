
"use client";

import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Award, Star, Home, Percent } from 'lucide-react'; // Example icons
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AchievementStat {
  value: number;
  label: string;
  suffix?: string;
  icon?: LucideIcon; // Optional icon for each stat
}

const achievementsData: AchievementStat[] = [
  { value: 315, label: 'Five-Star Google Reviews', suffix: '+', icon: Star },
  { value: 45, label: 'Industry Awards', suffix: '+', icon: Award },
  { value: 4500, label: 'Property Purchased', suffix: '+', icon: Home },
  { value: 96, label: 'Purchase Rate', suffix: '%', icon: Percent },
];

interface AnimatedNumberProps {
  targetValue: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ targetValue, duration = 2000, suffix = '', className }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const DURATION_IN_MS = duration; // Total duration for the animation
  const FRAMES_PER_SECOND = 60;
  const TOTAL_FRAMES = Math.round((DURATION_IN_MS / 1000) * FRAMES_PER_SECOND);
  const INCREMENT = targetValue / TOTAL_FRAMES;

  useEffect(() => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(INCREMENT * frame, targetValue);
      setCurrentValue(Math.ceil(progress)); // Use ceil to ensure it reaches the target

      if (frame === TOTAL_FRAMES) {
        clearInterval(counter);
        setCurrentValue(targetValue); // Ensure final value is exact
      }
    }, DURATION_IN_MS / TOTAL_FRAMES);

    return () => clearInterval(counter);
  }, [targetValue, INCREMENT, TOTAL_FRAMES, DURATION_IN_MS]);

  return (
    <span className={cn("font-headline text-4xl md:text-5xl font-bold text-primary", className)}>
      {currentValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef}> {/* Removed py and bg-secondary */}
      <div className="container mx-auto px-6">
        <Card className="p-6 md:p-10 bg-card shadow-xl rounded-xl"> {/* Changed to shadow-xl */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {achievementsData.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                {stat.icon && <stat.icon className="h-8 w-8 text-accent mb-3" />}
                {isVisible ? (
                  <AnimatedNumber targetValue={stat.value} suffix={stat.suffix} />
                ) : (
                  <span className="font-headline text-4xl md:text-5xl font-bold text-primary">
                    0{stat.suffix}
                  </span>
                )}
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
