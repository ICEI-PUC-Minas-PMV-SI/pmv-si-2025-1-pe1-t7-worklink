# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve permitir o cadastro de ambos prestadores de serviços e usuários normais. | Iago | cadastro.html |
|RF-004| O sistema deve permitir a indexação de diferentes tipos de serviços a serem ofertados ao usuário. | Igor | servicos.html |

## Descrição das estruturas:

## User
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do usuário            | 1                                              |
| Nome         | Texto             | Nome completo do usuário                         | Hudson G. Machado                                   |
| Email       | Texto             | Endereço de e-mail do usuário                       | hgmachado@gmail.com                            |
| Senha  | Texto  | Senha do usuário | senhamuitoforte                                              |
| Documento | Texto | Documento de identidade do usuário (CPF ou CNPJ) | 123.123.123-12 |

## UserWorker (herda do User)
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do usuário            | 1                                              |
| Nome         | Texto             | Nome completo do usuário                         | Hudson G. Machado                                   |
| Email       | Texto             | Endereço de e-mail do usuário                       | hgmachado@gmail.com                            |
| Senha  | Texto  | Senha do usuário | senhamuitoforte                                              |
| Documento | Texto | Documento de identidade do usuário (CPF ou CNPJ) | 123.123.123-12 |
| Descrição | Texto | Descrição do serviço fornecido | "Carretos e mudanças com equipe qualificada." |
| Tipo Serviço | Texto | O tipo de serviço fornecido | Frete |
| Estrelas | Numero (Inteiro) | Quantidade de estrelas que o profissional possui atráves das avaliaçãos de clientes | 3 |
| Imagem | URL | Caminho da imagem de perfil. | ../assets/frete/profissional.jpg |