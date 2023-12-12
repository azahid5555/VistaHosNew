export default function StatsCount(props) {
  return (
    <div className="casaStatsCount_con">
      <div className="row g-0">
        {props.stats.map((e, key) => (
          <div className="col" key={key}>
            <div className="text-center stat_inner text-white">
              <h3>
                {e.value} <span className="suffix">{e.sufix}</span>
              </h3>
              <p>{e.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
