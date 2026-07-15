type LogoProps = {
    width?: number;
    height?: number;
    className?: string;
  };
  
  export default function Logo({
    width = 96,
    height = 16,
    className,
  }: LogoProps) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 96 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="Logo"
      >
        <rect width="96" height="16" fill="url(#logoPattern)" />
  
        <defs>
          <pattern
            id="logoPattern"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#logoImage"
              transform="scale(0.000342114 0.0021322)"
            />
          </pattern>
  
          <image
            id="logoImage"
            width="2923"
            height="469"
            preserveAspectRatio="none"
            href="data:image/png;base64,..."
          />
        </defs>
      </svg>
    );
  }