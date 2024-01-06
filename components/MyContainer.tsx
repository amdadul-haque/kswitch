import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode,
  className?: string,
}

const MyContainer: FC<Props> = ({ children, className }) => {
  return (
    <div className={`w-full py-10 bg-black-main text-white-main ${className}`}>
      <div className='w-full h-full max-w-screen-xl mx-auto px-3 '>
        {children}
      </div>
    </div>
  )
}

export default MyContainer