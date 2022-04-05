import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../../ui/Button";

const Auth: NextPage = () => {
  const router = useRouter();
  return (
    <Container>
      <h1>Auth page</h1>
      <p>Lorem ipsum dolor sit.</p>
      <Button>Default</Button>
      <button onClick={() => router.push("/")}>Go to home fuck you</button>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
