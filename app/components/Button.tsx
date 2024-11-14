type ButtonProps = {
  children: React.ReactNode,
  className?: string,
  href?: string,
  onClick?: CallableFunction,
}

export default function Button({ children, className, href, onClick } : ButtonProps) {
  const classes = `flex gap-2 px-3 py-2 bg-orange-500 rounded-full hover:translate-x-1 hover:-translate-y-1 transition-all shadow hover:shadow-lg dark:shadow-orange-500 hover:dark:shadow-orange-500 ${className ? className : null}`;

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={() => {onClick && onClick();}}>
      {children}
    </button>
  );
}
