import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";

const Item = sequelize.define("Item", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// Relasi: user memiliki banyak item
User.hasMany(Item, { foreignKey: "userId" });
Item.belongsTo(User, { foreignKey: "userId" });

export default Item;
