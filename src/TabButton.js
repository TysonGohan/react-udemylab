const TabButton = ({ children, onClick }) => {
  return (
    <li>
      <button className="active" onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export { TabButton };
