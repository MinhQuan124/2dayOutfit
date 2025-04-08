function MenuPopperItem({ data }) {
  return (
    <div>
      <button className="h-7 text-xs font-semibold text-textColor cursor-pointer hover:text-slate-600">
        {data.label}
      </button>
    </div>
  );
}

export default MenuPopperItem;
