export function MemojiBackground(props: React.SVGProps<SVGSVGElement>) {
    const {width= '72vh', height= '55vh', fill = "#101116" } = props;
    return (

        <svg width={width} height={height} viewBox="0 0 626 645" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_83_66)">
                <path d="M485.872 535.221C552.65 464.158 502.435 497.173 562.185 332.667C621.935 168.16 472.85 50.9004 352.561 29.9078C232.273 8.91514 202.585 69.1916 136.397 131.855C86.5318 189.876 20.7766 238.746 65.562 355.545C92.364 425.445 169.768 506.018 246.835 526.679C323.902 547.34 419.094 606.284 485.872 535.221Z" fill={fill} />
            </g>
            <defs>
                <filter id="filter0_d_83_66" x="0.660889" y="0.652588" width="625.143" height="643.627" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    {/* <feOffset dy="25" /> */}
                    <feGaussianBlur stdDeviation="25" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_83_66" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_83_66" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}


