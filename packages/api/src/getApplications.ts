import { Sequelize } from "sequelize";
import appConfig from "../../../appConfig.json";

import { EEnvironments, EDbCredentials } from "../../shared/enums/EEnvironments";
import { IAppConfigItem } from "../../shared/interfaces/IAppConfig";
import { IApplicationResponse } from "../../shared/interfaces/IApplicationDataSchema";

const connectToDb = async ()  => {
  const NODE_ENV: EEnvironments = (process.env.NODE_ENV ||
    EEnvironments.DEV) as EEnvironments;
  const config: IAppConfigItem = appConfig[NODE_ENV];

  const USERNAME = process.env[EDbCredentials.DB_USERNAME];
  const PASSWORD = process.env[EDbCredentials.DB_PASSWORD];

  if (!(USERNAME && PASSWORD)) {
    console.log("no username or password found");
    return false;
  }

  const sequelize = new Sequelize(config.dbName, USERNAME, PASSWORD, {
    host: config.dbHost,
    dialect: "postgres",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // do some stuff
    const [results, metadata] = await sequelize.query(`
    SELECT * FROM public.applications
    ORDER BY id ASC
    `);

    return results;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export const getApplications = async (): Promise<IApplicationResponse[] | undefined> => {
  const applicationData = await connectToDb();
  return applicationData as IApplicationResponse[];
};
