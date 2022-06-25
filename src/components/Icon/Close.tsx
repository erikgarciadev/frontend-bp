import React from 'react'
export default function Close(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            {...props}
            color="red"
        >
            <path d="M17.75 2.013L15.988.25 9 7.237 2.013.25.25 2.013 7.237 9 .25 15.988l1.763 1.762L9 10.762l6.988 6.988 1.762-1.762L10.762 9l6.988-6.987z" />
        </svg>
    )
}
