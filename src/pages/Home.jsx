import { Link } from "react-router-dom";
import PageNav from "../component/PageNav";
import AppNav from "../component/AppNav";

function Home() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">WorldWise</h1>
      <Link to="/app">Go To App</Link>
    </div>
  );
}

export default Home;
