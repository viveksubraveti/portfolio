// Centralized configuration for all external links and references
export const LINKS = {
  // Personal Links
  email: "mailto:viveksubraveti@gmail.com",
  resume: "https://drive.google.com/file/d/1cHYB5tLkmf8X24KVw75GykezH4xwBnwC/view?usp=sharing",
  
  // Social Media
  github: "https://github.com/viveksubraveti",
  linkedin: "https://www.linkedin.com/in/viveksubraveti/",
  
  // Certifications
  certifications: {
    terraform: "https://www.credly.com/badges/6fb9f186-725a-42be-a6bb-72675d7e4429",
    cka: "https://www.credly.com/badges/250dbc3e-90c9-4e2e-9423-93be334b3b4f",
    kcna: "https://www.credly.com/badges/d90d212f-09ad-4aeb-b712-3de74c8e2230",
    ckad: "https://www.credly.com/badges/643d1e9d-d2e3-4330-9ce2-3f1ef3998906",
    saa: "https://www.credly.com/badges/e72143bc-06fd-4391-9048-5f50d7ca952f",
    awsAi: "https://www.credly.com/badges/1378ae3c-ae6b-4cce-9889-9ba625da5663",
    awsCloud: "https://www.credly.com/badges/4a1bbee5-cb68-4641-8ed0-edd6ac2e7fd8",
  },
  
  // API Endpoints
  api: {
    visitorCount: process.env.NEXT_PUBLIC_API_URL || "https://nh0uf66oog.execute-api.us-east-1.amazonaws.com/prod",
  },
  
  // Website URLs
  website: {
    main: "https://www.viveksubraveti.com",
    domain: "viveksubraveti.com",
  },
} as const;

// Navigation sections for smooth scrolling
export const NAVIGATION_SECTIONS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
] as const;