import React from 'react'
export default function Pencil(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.369.29l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83-3.75-3.75 1.83-1.83c.19-.19.44-.29.7-.29.26 0 .51.09.71.29zM.999 14.25V18h3.75l11.06-11.06-3.75-3.75L.999 14.25zM3.919 16h-.92v-.92l9.06-9.06.92.92L3.919 16z"
            />
        </svg>
    )
}
