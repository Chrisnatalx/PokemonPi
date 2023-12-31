const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Pokemon',
		{
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
			hp: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			attack: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			defence: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			speed: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			height: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			weight: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);
};
