import { SVGProps } from 'react'

export default function Trash(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 0h-5l-1 1H0v2h14V1h-3.5l-1-1zM11 6v10H3V6h8zM1 4h12v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V4z"
            />
        </svg>
    )
}
