const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 ? <h1>Empty food list</h1> : null}</>;
};

export default ErrorMessage;
