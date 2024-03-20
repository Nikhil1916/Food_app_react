const SchimmerCard = (props) => {
  const { count } = props;
  const arr = new Array(count);
  arr.fill(1);
  return (
    <div className="schimmer-cont">
      <div className="schimmer-card"></div>
      {arr?.map((_, i) => {
        return <div key={i} className="schimmer-card"></div>;
      })}
    </div>
  );
};

export default SchimmerCard;
