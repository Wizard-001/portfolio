"use client";
import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstContent={
          <img
            src="https://assets.aceternity.com/code-problem.png"
            alt="first content"
            className="object-cover object-left-top w-full h-full"
          />
        }
        secondContent={
          <img
            src="https://assets.aceternity.com/code-solution.png"
            alt="second content"
            className="object-cover object-left-top w-full h-full"
          />
        }
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
