
export  function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary:
      'bg-white text-purple-700 border border-purple-600 hover:bg-purple-100 focus:ring-purple-500',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className} px-4 py-2`}
      {...props}
    >
      {children}
    </button>
  );
}