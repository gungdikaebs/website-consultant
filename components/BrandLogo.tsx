interface BrandLogoProps {
  inverse?: boolean;
}

export default function BrandLogo({ inverse = false }: BrandLogoProps) {
  return (
    <span className="inline-flex shrink-0 items-center gap-3" aria-hidden="true">
      <svg
        className="h-11 w-11 shrink-0"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          rx="14"
          fill="#0B192C"
          stroke={inverse ? '#334155' : '#0B192C'}
          strokeWidth="2"
        />
        {/* An angular 3: three connected levels for the three service pillars. */}
        <path
          d="M16 14H33L41 22V27L36 31L41 35V40L33 48H16V40H30L33 37L29 34H21V27H29L33 24L30 21H16V14Z"
          fill="#FBFBF9"
        />
        <path d="M16 14H33L41 22H31L30 21H16V14Z" fill="#D6A64F" />
        <rect x="45" y="41" width="7" height="7" rx="1.5" fill="#B91C1C" />
      </svg>

      <span className="flex flex-col">
        <span
          className={`text-[27px] font-extrabold leading-none tracking-[-0.055em] ${inverse ? 'text-white' : 'text-[#0B192C]'}`}
        >
          3<span className={inverse ? 'text-[#D6A64F]' : 'text-[#B91C1C]'}>.</span>SEC
        </span>
        <span
          className={`mt-1 text-[8px] font-semibold uppercase leading-[1.4] tracking-[0.16em] ${inverse ? 'text-stone-400' : 'text-stone-500'}`}
        >
          Business, Tax &amp;
          <br />
          Digital Solution
        </span>
      </span>
    </span>
  );
}
