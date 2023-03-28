function isValidateRequest(req: any, inputs: string[]) {
    if (inputs.length == 0)
        return false;

    for (let i = 0; i < inputs.length; i++) {

        if (req.body[inputs[i]] == undefined || req.body[inputs[i]] == "")
            return false;
    }

    return true;
}

function isValidateObjectRequest(req: any, inputs: any[]) {
    let _message = [];

    for (let i = 0; i < inputs.length; i++) {
        if (req.body[inputs[i].name] == undefined || req.body[inputs[i].name] == "") {
            _message.push(inputs[i].message);
        }
    }

    return _message.length == 0 ? true : _message;
}

export { isValidateRequest, isValidateObjectRequest };