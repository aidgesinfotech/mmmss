const Svg = ({ size = 24, children, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...rest}>
    {children}
  </svg>
);

const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.6 };

export const MenuIcon = () => (
  <Svg fill="#333">
    <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
  </Svg>
);

export const BackIcon = () => (
  <Svg fill="#666">
    <path d="M15.4 4.6 14 3.2 5.2 12l8.8 8.8 1.4-1.4L8 12z" />
  </Svg>
);

export const HeartIcon = () => (
  <Svg>
    <path
      d="M22 9.2c0 3.7-1.9 7.2-9.7 12.4a.6.6 0 0 1-.6 0C3.9 16.4 2 12.9 2 9.2S4.6 3.7 7.3 3.7c3.2-.1 4.6 3.6 4.7 3.8.1-.2 1.5-3.9 4.7-3.8 2.7 0 5.3 1.8 5.3 5.5Z"
      fill="#ED3843"
    />
  </Svg>
);

export const CartIcon = () => (
  <Svg>
    <path d="M6 5.2h15.1c.5 0 .9.5.9 1l-.8 7.4c-.1.6-.5 1.1-1.1 1.1l-12 .5L6 5.2Z" fill="#C53EAD" />
    <circle cx="11.8" cy="20" r="1.3" fill="#9F2089" />
    <circle cx="16.8" cy="20" r="1.3" fill="#9F2089" />
    <path d="m2.7 4.2 3 1.4 2.6 12.1c.1.6.6 1 1.2 1h9.6" stroke="#9F2089" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const SearchIcon = () => (
  <Svg size={20} fill="none" stroke="#999" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Svg>
);

export const HomeIcon = () => (
  <Svg {...line}>
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
  </Svg>
);

export const CategoryIcon = () => (
  <Svg {...line}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </Svg>
);

export const OrdersIcon = () => (
  <Svg {...line}>
    <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
    <path d="m3 8 9 5 9-5M12 13v8" />
  </Svg>
);

export const HelpIcon = () => (
  <Svg {...line}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14" />
    <circle cx="12" cy="17" r=".6" fill="currentColor" />
  </Svg>
);

export const AccountIcon = () => (
  <Svg {...line}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
  </Svg>
);

export const ClockIcon = () => (
  <Svg size={16} fill="none" stroke="#9f2089" strokeWidth="2.2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const LocationIcon = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" aria-hidden="true">
    <path d="M10 0C4.5 0 0 4.3 0 9.7 0 16.5 10 24 10 24s10-7.5 10-14.3C20 4.3 15.5 0 10 0Z" fill="#4a7cf7" />
    <circle cx="10" cy="9.5" r="3.6" fill="#fff" />
    <ellipse cx="10" cy="22.6" rx="5" ry="1.4" fill="#4a7cf7" opacity=".35" />
  </svg>
);

export const TickIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m4 12.5 5 5L20 6.5" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShieldIcon = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
    <path d="M9 0 1 3v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V3L9 0Z" fill="#a9c1f5" />
    <path d="m5.2 10 2.6 2.6 5-5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 9 6 6 6-6" stroke="#555" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BombIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="10" cy="14" r="7.5" fill="#2f2f36" />
    <ellipse cx="7.3" cy="11.2" rx="2" ry="1.3" fill="#5c5c66" transform="rotate(-35 7.3 11.2)" />
    <rect x="12.6" y="5.6" width="3.6" height="3.2" rx=".8" fill="#2f2f36" transform="rotate(40 14.4 7.2)" />
    <path d="M16 6c.6-2 2.2-3 3.8-2.4" stroke="#e8912d" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <path d="m20.6 1.6.4 1.3 1.3.4-1.3.4-.4 1.3-.4-1.3-1.3-.4 1.3-.4z" fill="#ffb300" />
  </svg>
);

export const BoltIcon = () => (
  <svg width="16" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" fill="#E11900" />
  </svg>
);

export const StarIcon = () => (
  <Svg size={11} fill="#fff">
    <path d="m12 2 3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7L12 2Z" />
  </Svg>
);

export const TrashIcon = () => (
  <Svg size={18} fill="none" stroke="#999" strokeWidth="2">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
  </Svg>
);

export const CloseIcon = () => (
  <Svg size={22} fill="none" stroke="#333" strokeWidth="2">
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const PlayIcon = () => (
  <Svg size={18} fill="#fff">
    <path d="M6 4v16l14-8z" />
  </Svg>
);

export const EmptyCartIcon = () => (
  <Svg size={110} fill="none" stroke="#ccc" strokeWidth="1.2">
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M1 2h3l2.7 12.4a2 2 0 0 0 2 1.6h9.6a2 2 0 0 0 2-1.6L22 6H5" />
  </Svg>
);

export const WishIcon = ({ filled = false }) => (
  <Svg size={20} fill={filled ? "#ED3843" : "none"} stroke={filled ? "#ED3843" : "#333"} strokeWidth="1.8">
    <path d="M20.8 8.6c0 3.4-2.9 6.6-8.8 11.2-5.9-4.6-8.8-7.8-8.8-11.2 0-2.7 2-4.8 4.6-4.8 1.8 0 3.3 1 4.2 2.6.9-1.6 2.4-2.6 4.2-2.6 2.6 0 4.6 2.1 4.6 4.8Z" />
  </Svg>
);

export const ShareIcon = () => (
  <Svg size={20} fill="none" stroke="#333" strokeWidth="1.8">
    <circle cx="18" cy="5" r="2.5" />
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="19" r="2.5" />
    <path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" />
  </Svg>
);

export const ThumbIcon = () => (
  <Svg size={18} fill="currentColor">
    <path d="M2 21h4V9H2v12Zm20-11a2 2 0 0 0-2-2h-6.3l1-4.6v-.3c0-.4-.2-.8-.4-1.1L13.2 1 6.6 7.6c-.4.4-.6.9-.6 1.4v10a2 2 0 0 0 2 2h9c.8 0 1.5-.5 1.8-1.2l3-7.1c.1-.2.2-.5.2-.7v-2Z" />
  </Svg>
);

export const UserIcon = () => (
  <Svg size={16} fill="#b9c6e6">
    <circle cx="12" cy="8" r="4.2" />
    <path d="M3.5 21c0-4.4 3.8-7.2 8.5-7.2s8.5 2.8 8.5 7.2Z" />
  </Svg>
);

export const TrustedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#9f2089" />
    <path d="M7 16V8l5 5 5-5v8" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckIcon = () => (
  <Svg size={64} fill="none">
    <circle cx="12" cy="12" r="11" fill="#038D63" />
    <path d="m7 12.5 3.2 3.2L17 9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);
