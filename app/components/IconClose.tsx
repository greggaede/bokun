type IconCloseProps = {
  color: string,
}

export default function IconClose({ color } : IconCloseProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 17.5L17.5 6.5"
        className={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 6.5L17.5 17.5"
        className={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
