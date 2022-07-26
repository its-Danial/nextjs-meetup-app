function Card(props) {
  return (
    <div className="drop-shadow-xl dark:shadow-slate-900 bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden">
      {props.children}
    </div>
  );
}

export default Card;
