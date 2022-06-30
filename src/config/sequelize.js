import { Sequelize } from "sequelize";
import { nodeEnv } from "../utils/envConfig.js";

import config from "./config.js";

const dbOption = config[nodeEnv ?? "development"];

export default new Sequelize(dbOption);
