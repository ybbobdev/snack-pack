import { EEnvironments } from "../enums/EEnvironments";

export type IAppConfigItem = {
        api: string;
        dbHost: string;
        dbName: string;
        dialect: string;
}

export type IAppConfig = {
    [id in EEnvironments]: IAppConfigItem;
};
