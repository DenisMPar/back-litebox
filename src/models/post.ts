import { Model, DataTypes, CreationOptional } from "sequelize";
import { sequelizeConection } from "../db/connect";
import { UUID } from "crypto";

export class Post extends Model {
  declare id: CreationOptional<UUID>;
  declare title: string;
  declare content: string;
  declare AuthorId: UUID;
  declare tag: string;
  declare heroImageUrl: string;
  declare related: boolean;
  declare createdAt?: CreationOptional<Date>;
  declare updatedAt?: CreationOptional<Date>;
}

Post.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    AuthorId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heroImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    related: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    modelName: "Post",
  },
);
