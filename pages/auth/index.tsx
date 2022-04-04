import type { NextPage } from "next";
import { useRouter } from "next/router";

const Auth: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Auth page</h1>
      <p>Lorem ipsum dolor sit.</p>
      <button onClick={() => router.push("/")}>Go to home fuck you</button>
    </div>
  );
};

export default Auth;
