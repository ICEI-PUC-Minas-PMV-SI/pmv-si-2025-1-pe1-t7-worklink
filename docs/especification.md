# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

Persona 1

Nome: Ana Souza.

Idade: 30 anos.

Profissão: Analista de Marketing.

Localização: São Paulo, SP.

Situação: Mora sozinha em um apartamento.

Necessidade: Precisa contratar um eletricista de confiança para consertar seu chuveiro queimado.

Desafios: Sente receio ao contratar profissionais autônomos devido à segurança. Precisa resolver o problema rapidamente, pois depende do chuveiro para manter sua higiene antes do trabalho.

Objetivo: Encontrar um eletricista confiável e qualificado para reparar o chuveiro o quanto antes, garantindo segurança e eficiência no serviço.

Persona 2

Nome: Carlos Mendes.

Idade: 35 anos.

Profissão: Encanador autônomo.

Localização: Belo Horizonte, MG.

Situação: Recentemente desempregado, mas possui curso técnico em encanamento.

Ação: Buscou o SEBRAE e abriu um CNPJ para atuar como profissional autônomo.

Desafios: Encontrar clientes que precisem de seus serviços. Construir uma reputação no mercado e ganhar credibilidade. Conseguir uma renda estável para sustentar sua família.

Objetivo: Conectar-se com clientes que precisam de serviços de encanamento, garantindo trabalho contínuo e estabilidade financeira.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                           |
|--------------------|------------------------------------|--------------------------------------------------|
|Cliente             | Cadastrar minha conta              | Que seja possível utilizar o sistema             |
|Cliente             | Selecionar um profissional         | Que seja atendido em minha casa                  |
|Cliente             | Selecionar uma forma de pagamento  | Que tenha flexibilidade na forma de pagamento    |
|Profissional        | Cadastrar minha conta              | Que seja possível oferecer meu serviço           |
|Profissional        | Aceitar serviços                   | Que eu escolha um de acordo com meu conhecimento |
|Profissional        | Visualizar meus ganhos e pagamentos| Que eu gerencie minha renda                      |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas           |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| O sistema deve permitir o cadastro de ambos prestadores de serviços e usuários normais. | ALTA |  
|RF-002| O sistema deve permitir formas de pagamento tais como Crédito, Débito e PIX. | ALTA |
|RF-003| O sistema deve possibilitar a organização da agenda de serviços e a disponibilidade do prestador responsável. | ALTA |
|RF-004| O sistema deve permitir a indexação de diferentes tipos de serviços a serem ofertados ao usuário.   | MÉDIA | 
|RF-005| O sistema deve permitir a comunicação entre o prestador de serviço e o cliente de forma segura. | MÉDIA |
|RF-006| O sistema deve permitir que os usuários deixem avaliações sobre os serviços e prestadores responsáveis pelos mesmos. | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A interface do sistema deve ser responsiva | ALTA | 
|RNF-002| Os dados dos usuários devem ser criptografados. | ALTA |
|RNF-003| Os dados relacionados à identificação física devem ser adequadamente validados (CPF, CNPJ...) | ALTA |
|RNF-004| A interface do sistema deve ser acessível e compreensiva para fácil navegação | ALTA |
|RNF-005| O sistema deve realizar requisições de forma rápida e eficiente | MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
