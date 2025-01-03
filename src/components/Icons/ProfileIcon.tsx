export const ProfileIcon = (): React.JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <g filter="url(#filter0_i_2482_24798)">
        <circle cx="20" cy="20" r="20" fill="#4C6FFF"></circle>
      </g>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M20 10c2.761 0 5 2.21 5 4.935 0 2.726-2.239 4.936-5 4.936s-5-2.21-5-4.935C15 12.21 17.24 10 20 10zM29 28.82c-4.97 4.907-13.03 4.907-18 0a4.722 4.722 0 011.188-1.708 4.783 4.783 0 013.229-1.253h9.168c1.198 0 2.35.448 3.227 1.253.52.474.926 1.058 1.188 1.708z"
        clipRule="evenodd"
      ></path>
      <defs>
        <filter
          id="filter0_i_2482_24798"
          width="40"
          height="45.091"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="5.091"></feOffset>
          <feGaussianBlur stdDeviation="2.545"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect1_innerShadow_2482_24798"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}
