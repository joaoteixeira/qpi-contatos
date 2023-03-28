import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { isValidateObjectRequest } from '../helpers/validate';

const router = Router();

let contatos = Array();

router.get('/', function (req, res) {
    res.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
    });
});

router.get('/sobre', function (req, res) {
    res.send({
        name: 'João Teixeira',
        email: 'joao.teixeira@ifro.edu.br',
        github: 'github.com/joaoteixeira'
    });
});

export default router;
