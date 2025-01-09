import { Outlet } from "react-router";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import { useEffect, useState } from "react";
import Loading from "./components/common/Loading";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation like fetching data
    setTimeout(() => {
      // Simulate an error condition
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }


  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
