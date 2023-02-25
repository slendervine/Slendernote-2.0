import textos from "../models/Texto.js";
import app from "../app.js";

class TextoController {

    static listarTextos = (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


        textos.find((err, textos) => {
            res.status(200).json(textos);
        })
    }

    static listarTextoPorId = (req, res) => {
        
        let idTexto = req.params.id 

        textos.findById(idTexto, (err, textos) => {
            if(err){
                res.status(400).send({message: `${err.message} - Texto não localizado com este ID`})
            } else {
                res.status(200).send(textos)
            }
        })
    }

    static inserirTexto = (req, res) => {

        let texto = new textos(req.body)

        texto.save((err) => {

            if(err){
                res.status(500).send({message: `${err.message} - Falha ao inserir o texto no MongoDB.`})
            } else {
                res.status(201).send(texto.toJSON())
            }

        })
    }

    static atualizarTexto = (req, res) => {

        let idTexto = req.params.id;
        
        textos.findByIdAndUpdate(idTexto, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Texto atualizado com sucesso!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })

    }

    static excluirTexto = (req, res) => {

        let idTexto = req.params.id;
        
        textos.findByIdAndDelete(idTexto, (err) => {
            if(!err){
                res.status(200).send({message: "Texto excluído com sucesso!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })

    }

}



export default TextoController;