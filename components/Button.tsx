'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  disabled = false
}: ButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50"
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}
