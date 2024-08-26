import { Model, DataTypes, CreationOptional } from "sequelize";
import { sequelizeConection } from "../db/connect";

import { UUID } from "crypto";
export class Author extends Model {
  declare id: CreationOptional<UUID>;
  declare name: string;
  declare profileImageUrl: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}
Author.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImageUrl: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: sequelizeConection,
    modelName: "Author",
  },
);
