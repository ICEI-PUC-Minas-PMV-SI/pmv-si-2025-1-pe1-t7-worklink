# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve permitir o cadastro de ambos prestadores de serviços e usuários normais. | Iago | cadastro.html |

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
