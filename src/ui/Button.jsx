import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: `${base} py-3 px-4 md:px-6 md:py-4 `,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    secondary: `${base} text-sm bg-stone-200 hover:bg-stone-300 py-3 px-4 md:px-6 md:py-4`,
    round: `${base} px-2.5 py-1 md:px-3.5 md:py-2 text-sm`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
