import Container from "../components/container";
import Layout from "../components/layout";
import { getApiHealth } from "../lib/api";
import Head from "next/head";

type Props = {
  allPosts: Post[];
};

const Index = (resonseData: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>The Site</title>
        </Head>
        <Container>
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Snack Pack
          </h3>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const responseData = await getApiHealth();

  return {
    props: responseData,
  };
};
