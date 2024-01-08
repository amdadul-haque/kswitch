import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  link: string,
  className?: string
}


const Button = ({ children, link, className }: ButtonProps) => {
  return (
    <Link href={link}>
      <button className={`uppercase px-10 py-4 rounded-md bg-brand hover:bg-brand-hover transition-all duration-300 ${className}`}>
        {children}
      </button >
    </Link>
  )
}

export default Button