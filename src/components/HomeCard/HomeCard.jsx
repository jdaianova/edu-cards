import "./HomeCard.css";

const HomeCard = ({ children, delay }) => {

  return (
    <div className="HomeCard" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

export default HomeCard;
