export const Slide = ({
  title,
  excerpt,
  //   backgroundImage,
  cta,
  isActive,
  excerptstyle,
  titlestyle,
  dotstyle,
  dotinact,
}) => {
  return (
    <div>
      <p className={titlestyle}>{title}</p>
      {/* {isActive ? "i am active" : "sad"} */}
      <a href={cta.url} className={cta.labelstyle}>
        {cta.label}
      </a>
      {isActive ? (
        <div className={dotstyle}></div>
      ) : (
        <div className={dotinact}></div>
      )}
      <p className={excerptstyle}>{excerpt} </p>
    </div>
  );
};
// useContext to change the background image as a way to pass up state
