const Card = ({ children, classname, onRemove, id }) => {
  return (
    <div onClick={id ? () => onRemove(id) : null} className={`${classname} ${id && "cursor-pointer hover:scale-105 ease-in transition-all"} p-5 border-2 border-[#1d1d1d] rounded-md`}>
      {children}
    </div>
  );
};

export default Card;
