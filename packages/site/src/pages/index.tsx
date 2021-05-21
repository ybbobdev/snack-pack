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
          {responseData.length ? (
            <>
              <div className="flex flex-col">
                <div className="section py-20">
                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                    Snack Pack
                  </h3>
                  <p className="pt-10 lg:text-left text-2xl">
                    Table below lists the apps and frameworks that are used to
                    make this application. Data in the table is all sourced from
                    the database. Checkout out the{" "}
                    <a
                      className="text-blue-400 no-underline hover:underline"
                      href="https://github.com/ybbobdev/snack-pack#snack-pack"
                    >
                      README.md
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Description
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Read the docs</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {responseData.map((i) => {
                            return (
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="text-sm font-medium text-gray-900">
                                      {i.app_name}
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-500">
                                    {i.app_description}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="text-sm text-gray-900">
                                    <a
                                      className="text-blue-400 no-underline hover:underline"
                                      href={i.app_doc_url}
                                    >
                                      docs
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-sm text-gray-500">No results from the DB.</div>
          )}
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
