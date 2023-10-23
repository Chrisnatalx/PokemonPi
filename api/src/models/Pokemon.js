const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('pokemon', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		life: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		attack: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		defence: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		speed: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		height: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		weight: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
	});
};
