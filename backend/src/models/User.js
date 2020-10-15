const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

//La propiedad trim se encarga que cuando se escriba algun string en la aplicacion
//ese string no tenga espacios innesesarios y los elimina

//Con la propiedad unique se encarga de que el username no se repita en la aplicacion
//de que sea unico, o sea que no  puede haber 2 usuarios con el emismo nombre

module.exports = model("User", userSchema);
