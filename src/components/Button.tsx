import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center rounded bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700"
    >
      {children}
    </button>
  )
}
