const TabContent = ({ title, description, code }) => {
  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>{code}</pre>
    </div>
  );
};

export { TabContent };
