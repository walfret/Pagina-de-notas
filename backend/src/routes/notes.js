const { Router } = require("express");
const router = Router();

const {
  getNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

router.route("/").get(getNotes).post(createNote);
/* .post((req, res) => res.send('POST - Notes Routes')) //se utiliza cuando queremos guardar un nuevo dato
   .put() //se utiliza cuando queremos actualizar un  dato
   .delete() //se utiliza cuando queremos empezar a eliminar un  dato
   .patch() //se utiliza cuando queremos actualizar un  dato, pero esta es menos utilizada
   //Por ejemplo su diferencia con put es que put actualiza un dato completamente y patch actualiza una sola propiedad
*/
/*Cuano se quiere entrar a otra ruta que requiera algun id se puede utilizar
router.route('/:id')
   .put()
   .delete()
   
De esta manera aunque se ponga un id cualquiera (n) el /:id lo va a llevar a lo que se desea */

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

module.exports = router;
