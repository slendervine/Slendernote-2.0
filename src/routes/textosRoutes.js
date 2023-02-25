import express from "express";
import TextoController from "../controllers/textosController.js";

const router = express.Router();

router
    .get('/textos',      TextoController.listarTextos)
    .get('/textos/:id',  TextoController.listarTextoPorId)

    .post('/textos',        TextoController.inserirTexto)
    .put('/textos/:id',     TextoController.atualizarTexto)
    .delete('/textos/:id',  TextoController.excluirTexto)


export default router;