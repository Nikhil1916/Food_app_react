const SchimmerCard = (props) => {
  const { count } = props;
  const arr = new Array(count);
  arr.fill(1);
  console.log(arr);
  return (
    <div className="schimmer-cont flex flex-wrap gap-[20px] justify-center">
      {arr?.map((_, i) => {
        return <div key={i} className="schimmer-card w-[300px] bg-gray-200 h-[300px] p-3 flex flex-col items-center gap-1"></div>;
      })}
    </div>
  );
};

export default SchimmerCard;
