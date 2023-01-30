import { useEffect } from "react";
import { useRouter } from "next/router";

const Errorpage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return <div>Errorpage</div>;
};

export default Errorpage;
