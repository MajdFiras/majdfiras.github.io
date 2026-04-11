interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

const sizeMap = {
  sm: { box: 'w-10 h-10', fontSize: '24', dotR: '2.5', dotCx: '30', dotCy: '35' },
  md: { box: 'w-14 h-14', fontSize: '32', dotR: '3.5', dotCx: '38', dotCy: '35' },
  lg: { box: 'w-20 h-20', fontSize: '40', dotR: '4',   dotCx: '46', dotCy: '35' },
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', onClick }) => {
  const s = sizeMap[size]

  return (
    <div
      className={`cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <svg
        className={`${s.box} transition-transform duration-300 group-hover:scale-105`}
        viewBox="0 0 54 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter M */}
        <text
          x="6"
          y="36"
          fontFamily="'Josefin Sans', sans-serif"
          fontSize={s.fontSize}
          fontWeight="bold"
          fill="#000000"
        >
          M
        </text>

        {/* Accent dot — bottom-right of M */}
        <circle
          cx={s.dotCx}
          cy={s.dotCy}
          r={s.dotR}
          fill="#000000"
          className="group-hover:scale-125 transition-transform duration-300"
          style={{ transformOrigin: `${s.dotCx}px ${s.dotCy}px` }}
        />
      </svg>

      {/* Hover underline */}
      <div className="w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 mt-1" />
    </div>
  )
}

export default Logo
