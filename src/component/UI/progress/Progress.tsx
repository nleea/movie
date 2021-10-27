import "./progress.scss";
export const Progress = (props:{popularity:number}) => {
  return (
    <div className="circular">
      <div className="inner"></div>
      <div className="number">{props.popularity}%</div>
      <div className="circle">
        <div className="bar left">
          <div className="progress"></div>
        </div>
        <div className="bar right">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};
