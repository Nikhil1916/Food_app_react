import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Sorry Page Not Found</h1>
      <h2>{err?.data}</h2>
    </div>
  );
};

export default Error;
