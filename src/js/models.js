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

export class WorkerUser extends User {
    constructor(name, email, password, doc, descricao, tipoServico, estrelas, caminhoImg) {
        super(name, email, password, doc); 
        this.descricao = descricao;
        this.tipoServico = tipoServico; 
        this.estrelas = estrelas;
        this.caminho_img = caminhoImg;
    }
}
