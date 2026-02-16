import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  description?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  suffix?: string;
  accent?: boolean;
}