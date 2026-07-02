import './PlankButton.css';

export default function PlankButton({ children, onClick, width = 368, height = 142 }) {
  const fontSize = Math.round(width / 368 * 27);

  const onEnter = (e) => e.currentTarget.classList.add('is-hover');
  const onLeave = (e) => e.currentTarget.classList.remove('is-hover', 'is-press');
  const onDown  = (e) => { e.currentTarget.classList.add('is-press'); e.currentTarget.classList.remove('is-hover'); };
  const onUp    = (e) => { e.currentTarget.classList.remove('is-press'); e.currentTarget.classList.add('is-hover'); };

  return (
    <button
      className="plankbtn"
      style={{ width, height }}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
    >
      <svg viewBox="0 0 440 170" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <use href="#plankArt" />
        <use href="#bouquet" transform="translate(48,84)" />
        <use href="#bouquet" transform="translate(392,84) scale(-1,1)" />
      </svg>
      <span className="plankbtn-lbl" style={{ fontSize }}>{children}</span>
    </button>
  );
}
