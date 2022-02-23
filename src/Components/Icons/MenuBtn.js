import React from "react";

const MenuBtn = (props) => {
    return (
        <svg
            width={18}
            height={12}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm0 5a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm1 4a1 1 0 100 2h16a1 1 0 100-2H1z"
                fill="#F2F2FF"
            />
        </svg>
    )
}

export default MenuBtn;
