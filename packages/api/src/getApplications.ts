const testData = {
  app_name: "app name",
  app_description: "app description",
  app_doc_url: "https://app_doc_url.com",
};

export interface IGetApplications {
  app_name: string;
  app_description: string;
  app_doc_url: string;
}

export const getApplications = (): IGetApplications => {
  return testData;
};
