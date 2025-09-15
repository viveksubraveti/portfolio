"use client";

import { useState, useEffect } from "react";

export default function VisitorCount() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("visitorCount") || "0");
    const newCount = currentCount + 1;
    localStorage.setItem("visitorCount", newCount.toString());
    setCount(newCount);
  }, []);

  return (
    <span className='text-sm text-gray-400 dark:text-gray-500'>
      Visitor #{count.toLocaleString()}
    </span>
  );
}
