import Container from "../components/container";
import Layout from "../components/layout";
import { getApplications } from "../lib/api";
import Head from "next/head";
import { IApplicationResponse } from "../../../shared/interfaces/IApplicationDataSchema";

const Index = (props: { responseData: IApplicationResponse[] }) => {
  const { responseData } = props;
  return (
    <>
      <Layout>
        <Head>
          <title>Demo | Snack Pack</title>
        </Head>
        <Container>
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Snack Pack
          </h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Documentation</th>
              </tr>
            </thead>
            <tbody>
              {responseData.map((i) => {
                return (
                  <>
                    <tr>
                      <td>{i.app_name}</td>
                      <td>{i.app_description}</td>
                      <td><a href={i.app_doc_url} target="_blank" >docs</a></td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const responseData = await getApplications();
  return { props: { responseData } };
};
