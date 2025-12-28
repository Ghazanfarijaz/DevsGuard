import Link from 'next/link';

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  icon,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#0c456b] text-white hover:bg-[#235784] rounded-md px-6 py-3',
    secondary:
      'bg-white text-[#0c456b] border-2 border-[#0e4366] hover:bg-[#f8f8f8] rounded-[25px] px-9 py-5 shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)]',
    accent:
      'bg-[#78d5ea] text-[#0c456b] hover:bg-[#5fc5d8] rounded-[20px] px-6 py-3 font-medium',
    cta: 'bg-[#235784] border border-[#0c456b] text-white hover:bg-[#1a4568] rounded-[100px] px-8 py-4 text-xl',
    ghost:
      'bg-[rgba(8,75,187,0.11)] text-[#084bbb] hover:bg-[rgba(8,75,187,0.2)] rounded-md px-6 py-3',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

