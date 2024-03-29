import { Sequelize, DataTypes, DATE } from "sequelize";
import sequelize from "../../Database/config";
import { UserI } from "../interfaces/User";
// const sequelize = new Sequelize('sqlite::memory:');


const User = sequelize.define<UserI>('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  // Other model options go here
});


export default User;