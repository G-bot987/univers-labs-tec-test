export const Slide = ({ title, excerpt, backgroundImage, cta, isActive }) => {
  return (
    <div>
      <p>{title}</p>
      {isActive ? "i am active" : "sad"}
      <a href={cta.url}>{cta.label}</a>
      <div class="pulsating-circle"></div>
    </div>
  );
};
// useContext to change the background image as a way to pass up state
