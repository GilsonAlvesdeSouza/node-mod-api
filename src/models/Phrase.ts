import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg";

export interface PhraseInstance extends Model {
  id: number;
  author: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const Phrase = sequelize.define<PhraseInstance>(
  "Phrases",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },

    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  {
    tableName: "phrases",
    timestamps: true,
  }
);
