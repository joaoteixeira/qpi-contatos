import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { isValidateObjectRequest } from './helpers/validate';

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

router.post('/contato', function (req, res) {
    let ok = true;
    let mensagem = "Contato salvo com sucesso!";  

    const inputs = [
        {
            name: "nome",
            message: "A propriedade [nome] não deve estar em indefinida e/ou vazia!"
        },
        {
            name: "email",
            message: "A propriedade [email] não deve estar em indefinida e/ou vazia!"
        }
    ];

    const checkValidate = isValidateObjectRequest(req, inputs);

    if (Array.isArray(checkValidate)) {
        ok = false;

        mensagem = checkValidate.join(', ');
    }

    if (ok) {
        
        contatos.push({ 
            id: uuidv4(), 
            nome: req.body.nome,
            email: req.body.email
        });
    }

    res.send({
        success: ok,
        message: mensagem
    })
});

router.get('/contato', function(req, res) {
    res.send(contatos);
});

export default router;
