import { DataTypes } from 'sequelize';
import { Column, Model } from 'sequelize-typescript';
import { Table } from 'sequelize-typescript';
import { sequelize } from '../database/postgres';
interface PersonAttributes {
  name: string;
}


@Table
export class Person extends Model<PersonAttributes, PersonAttributes> {
  @Column
  declare name: string;
}

Person.init({ name: { type: DataTypes.STRING } }, {tableName: 'person', sequelize})
