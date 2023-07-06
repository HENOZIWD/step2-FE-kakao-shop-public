interface IXButtonProps {
  name?: string;
  show?: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function XButton({
  name,
  show = true,
  handleClick,
}: IXButtonProps) {
  return (
    <button
      className={`${show ? 'visible' : 'invisible'}`}
      name={name}
      type="button"
      onClick={handleClick}
    >
      {/* License: MIT. Made by Primer: https://github.com/primer/octicons */}
      <svg width="1.25rem" height="1.25rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z" fill="#172554" />
      </svg>
    </button>
  );
}