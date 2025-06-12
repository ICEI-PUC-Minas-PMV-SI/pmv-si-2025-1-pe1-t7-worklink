export class User
{
    // name -> nome
    // email -> e-mail
    // password -> senha
    // doc -> documento (CPF/CNPJ)
    constructor(name, email, password, doc)
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.doc = doc;
    }
}

export class WorkerUser extends User
{
    // implementar serviços
}