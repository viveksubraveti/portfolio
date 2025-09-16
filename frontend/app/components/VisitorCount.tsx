"use client";

import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nh0uf66oog.execute-api.us-east-1.amazonaws.com/prod';

export default function VisitorCount() {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const response = await fetch(`${API_URL}/visitor-count`);
        
        if (response.ok) {
          const data = await response.json();
          setCount(data.count);
        } else {
          console.error('API Failed - Status:', response.status);
          setCount(0); // Show 0 if API fails
        }
      } catch (error) {
        console.error('API Error:', error);
        setCount(0); // Show 0 if API fails
      } finally {
        setLoading(false);
      }
    };

    updateVisitorCount();
  }, []);

  if (loading) {
    return (
      <span className='text-sm text-gray-400 dark:text-gray-500'>
        Loading...
      </span>
    );
  }

  return (
    <span className='text-sm text-gray-400 dark:text-gray-500'>
      Visitor #{count.toLocaleString()}
    </span>
  );
}
