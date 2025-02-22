import React from 'react'

function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex justify-center h-screen items-center'>
            {children}
        </div>
    )
}

export default layout
