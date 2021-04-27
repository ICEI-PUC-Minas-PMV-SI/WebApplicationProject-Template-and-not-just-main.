# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

`Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além
das restrições do projeto.`

`Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto`

O Residencial Hector Bonilla existe há cerca de 20 anos. O residencial possui duas torres com 50 apartamentos, um dormitório para o zelador, áreas comuns como playground, piscina, salão de festa, área
para churrasco, área para assar pizza, quadra poliesportiva e portaria 24hrs.

Como todo condomínio, existem problemas e seu senhorio gostaria de oferecer um melhor serviço para seus moradores. O senhorio possui diversos empreendimentos, mas antes de pensar em expansão, ele
gostaria de experimentar algo novo no residencial Hector Bonilla e em caso de sucesso, fará a expansão para os demais.


![Esboço Requisitos](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2021-1-e1-proj-web-t3-sistema-web-de-gestao-de-condominios/blob/main/docs/img/rascunho-requisitos.svg)

## Personas
`Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um
intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.`

`Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:`

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)

`Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.`

### Seu Barriga
<p style="text-align: center">
    <img src="img/personas/seu-barriga.png" alt="Seu barriga" style="width: 100px; height: 100px">
</p>

Senhor Barrinha (mais conhecido como Seu Barriga) tem 53 anos de idade, solteiro, pai de um filho, é um empresário de sucesso e senhorio de vários condomínios localizados no Estado de Minas Gerais,
Brasil. Por uma questão de tempo, economia financeira, eficiência e qualidade do serviço prestado aos condôminos e principalmente objetivando focar seus esforços no que realmente lhe traz maiores
benefícios nos negócios, Seu Barriga decidiu iniciar o processo de digitalização de seus negócios através de soluções ágeis, no qual lhe trará maior flexibilidade com a implementação destas
ferramentas, criando maiores possibilidades de delegar mais responsabilidades gestionais para seus funcionários, lhes dando maior autonomia, além de conseguir acompanhar de perto todas as transações
que ocorrem em seus empreendimentos, a qualquer momento e a um toque/clique de distância em seus dispositivos (smartphones, computadores, tablets, entre outros...).

### Chaves
<p style="text-align: center">
    <img src="img/personas/chaves.png" alt="Chaves" style="width: 100px; height: 100px">
</p>

Chaves Chespirito é um jovem de 25 anos de idade, de família muito humilde, ama estar com seus amigos para jogar conversa fora e comer seu lanche favorito, sanduíche de presunto. Chaves recentemente
concluiu sua graduação em Administração na Universidade Federal de Minas Gerais (UFMG). Chaves, reside no residencial Hector Bonilla, onde foi escolhido, pelo Seu Barriga, para ser o síndico oficial
após passar por um período de 6 meses de experiência. Após esta experiência e bons feedbacks por parte do senhorio e dos moradores, Chaves viu que sua maior aptidão era com a gestão, o que fez com que
cursasse Administração.

Chaves conheceu diversas formas de melhorar a gestão das empresas na faculdade e em seu período de estágio, pensando na otimização do seu tempo e, principalmente, na excelência do gerenciamento do
condomínio, o síndico Chaves em uma, das diversas reuniões que tem com o senhorio, propôs que Seu Barriga contratasse uma empresa para desenvolver uma solução web que integrasse as necessidades dele,
dos moradores e dos funcionários, uma vez que após ter a solução finalizada, seria mais econômico do que uma empresa que fizesse a gestão externa, além de poder implementar esta solução nos demais
residenciais do Seu Barriga.

### Dona Florinda
<p style="text-align: center">
    <img src="img/personas/dona-florinda.png" alt="Dona Florinda" style="width: 100px; height: 100px">
</p>

Dona Florinda, de 45 anos, é viúva e possui um filho de 8 anos, seu tesouro que é carinhosamente chamado de Kiko, ela reside no condomínio Hector Bonilla há 10 anos. Dona Florinda é uma mulher muito
exigente, principalmente com a vizinhança, no qual, segundo ela, não gosta de "misturar com as gentalhas". Apesar das suas particularidades, ela gosta muito da estrutura e dos espaços oferecidos no
residencial Hector Bonilla, porém por ser uma pessoa perfeccionista e sistemática, acredita que o serviço prestado poderia ser melhorado e também gostaria de ter alguma maneira mais eficiente de
se informar sobre tudo o que acontece no condomínio, seja a respeito dos gastos, das reuniões e sobre eventos realizados (nem que seja para fofocar 😅).

### Godinez
<p style="text-align: center">
<img src="img/personas/godinez.png" alt="Godinez" style="width: 100px; height: 100px">
</p>

Godinez, 41 anos, é um profissional exemplar que trabalha como zelador do prédio antes mesmo do primeiro morador. Ele conhece cada detalhe das atividades necessárias para executar as devidas
manutenções do condomínio, mas Godinez encontra algumas dificuldades de comunicação com o síndico, que devido a esto, faz com que seu trabalho fique atrasaso. Alguns problemas que ele
necessita comunicar ao síndico seria a compra de materiais para efetuar determinada manutenção, autorização formal de algumas atividades supervisionadas pelo síndico.

Em algumas conversas com o síndico Chaves, Godinez havia perguntado se teria alguma forma de resolver estas pequenas dificuldades do dia a dia e que teve uma reposta positiva de que este assunto
está sendo tratado com o Seu Barriga (senhorio).

### Dona Clotilde
<p style="text-align: center">
    <img src="img/personas/dona-clotilde.png" alt="Dona Clotilde" style="width: 100px; height: 100px">
</p>

Dona Clotilde de 60 anos, aposentada que não consegue ficar sem trabalhar, é a faxineira e o "jornal ambulante" do prédio, pois tem a necessidade de saber de tudo que acontece no condomínio e não
perde uma fofoca para colocar a conversa em dia. Apesar disso, ela trabalha no prédio três vezes por semana, mas em alguns casos, ela não pôde concluir suas atividades porque faltavam materiais de
limpeza e nisto ela sempre falava com o zelador Godinez e outras vezes com o síndico Chaves. Nestes casos Dona Clotilde não achava tão ruim, porque recebia sua diária e poderia ir para casa assistir
suas novelas mexicanas, Maria do Bairro e em seguida A Usurpadora. Por fim, era mais um gasto desnecessários para o condomínio.

### Jaiminho
<p style="text-align: center">
    <img src="img/personas/jaiminho.png" alt="Jaiminho" style="width: 100px; height: 100px">
</p>

Jaiminho, ex-carteiro, aposentado pelos Correios, tem 67 anos, é o porteiro do condomínio Hector Bonilla. Jaiminho é da cidade de Tangamandapio e agora mora em Betim para ficar perto de sua filha
Maria Juaquina e seu Genro Cirilo. Para não ficar somente em casa vendo esportes na televisão, ele arrumou um emprego no prédio onde sua filha mora, onde conta com o serviço de portaria 24 horas por dia.
Jaiminho geralmente trabalha no turno da manhã onde aproveita o menor fluxo de pessoas. A maior dificuldade dele está relacionada nas entregas das correspondências dos moradores, pois segundo ele, é
preciso "evitar a fadiga". Jaiminho tenta ligar no interfone ou nos respectivos telefones para que os moradores possam buscar as correspondências, mas nem sempre consegue falar com eles, o que faz
aumentar a fadiga de Jaiminho e deixar o serviço mais cedo e ir à casa de sua filha tomar um cafezinho.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| Id | Perfil / Persona     | Descrição                              |
|----|----------------------|----------------------------------------|
| 1  | Administrador Master | Desenvolvedor, CEO                     |
| 2  | Administrador        | Desenvolvedor, CEO                     |
| 3  | Usuário comum        | Condômino, proprietário do apartamento |
| 4  | Funcionário          |                                        |

|EU COMO... `PERSONA`   | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                                  |
|-----------------------|------------------------------------|---------------------------------------------------------|
|1                      | Alterar permissões                 | Permitir que possam administrar contas e/ou condomínios |
|1                      | Cadastrar condomínios              | Permitir que possam criar condomínios a serem gerenciados |
|1, 2                   | Alterar permissões                 | Permitir que possam administrar contas                  |
|1, 2                   | Cadastrar usuários (3), funcionários (4)                 | Permitir que possam administrar contas                  |

> CRUD: Criar (**C**reate), Ler (**R**ead), Apagar (**D**elete), Atualizar (**U**pdate);

`DRAFT: Após colocar no formato oficial`

**Administrador Master**:
>  - **Módulo de Gestão do Sistema**;
>       * CRUD de usuários (1, 2, 3, 4)
>       * CRUD de residenciais, condomínios ou apartamentos.
>       * CRUD e atribuição de responsabilidades por residencial, condomínio ou apartamento;
>       * CRUD de áreas comuns;
>  - **Módulo Financeiro**;
>       * CRUD e atribuição de responsabilidades por residencial, condomínio ou apartamento;
>       * CRUD de despesas/receitas por residencial, condomínio ou apartamento;
>       * Consolidar despesas/receitas por residencial, condomínio ou apartamento;
>       * Visualizar relatórios de despesas/receitas por residencial, condomínio ou apartamento;
>       * CRUD de multas aplicadas por residencial, condomínio ou apartamento;
>       * CRUD de despesas/receitas de locações de áreas comuns por residencial, condomínio ou apartamento;
>       * Emissão e disponibilizar (dashboard e/ou envio por e-mail) boleto (primeira e segunda via) para pagamento de condomínio por residencial, condomínio ou apartamento;
>  - **Módulo Serviços**;
>       * CRUD para incluir solicitação para compra de materiais para limpeza e manutenção;
>       * CRUD para aprovação de pedidos manutenção;
>       * CRUD para inclusão de mercadorias e correspondências dos moradores (notificação);
>  - **Módulo Dashboard**;
>       * CRUD para agendar assembleias para determinado residencial, condomínio;
>       * CRUD para agendar áreas comuns de determinado residencial, condomínio;
>       * Ler, marcar como lido notificações;
>  - **Módulo Comunicações**;
>       * CRUD para incluir notificações para determinado residencial, condomínio ou apartamento;
>       * CRUD para incluir mensagens gerais (quadro de avisos) para determinado residencial, condomínio ou apartamento;

**Administrador**:
>   - **Módulo de Gestão do Sistema**;
>       * CRUD de usuários (3, 4)
>       * CRUD de residenciais, condomínios ou apartamentos.
>       * CRUD e atribuição de responsabilidades por residencial, condomínio ou apartamento;
>       * CRUD de áreas comuns;
>       * CRUD para reserva de áreas comuns;
>  - **Módulo Financeiro**;
>       * CRUD e atribuição de responsabilidades por residencial, condomínio ou apartamento;
>       * CRUD de despesas/receitas por residencial, condomínio ou apartamento;
>       * Consolidar despesas/receitas por residencial, condomínio ou apartamento;
>       * Visualizar relatórios de despesas/receitas por residencial, condomínio ou apartamento;
>       * CRUD de multas aplicadas por residencial, condomínio ou apartamento;
>       * CRUD de despesas/receitas de locações de áreas comuns por residencial, condomínio ou apartamento;
>       * Emissão e disponibilizar (dashboard e/ou envio por e-mail) boleto (primeira e segunda via) para pagamento de condomínio por residencial, condomínio ou apartamento;
>  - **Módulo Serviços**;
>       * CRUD para incluir solicitação para compra de materiais para limpeza e manutenção;
>       * CRUD para aprovação de pedidos manutenção;
>       * CRUD para inclusão de mercadorias e correspondências dos moradores (notificação);
>  - **Módulo Dashboard**;
>       * CRUD para agendar assembleias para determinado residencial, condomínio;
>       * CRUD para agendar áreas comuns de determinado residencial, condomínio;
>       * Ler, marcar como lido notificações;
>  - **Módulo Comunicações**;
>       * CRUD para incluir notificações para determinado residencial, condomínio ou apartamento;
>       * CRUD para incluir mensagens gerais (quadro de avisos) para determinado residencial, condomínio ou apartamento;

**Usuário Comum**:
>   - **Módulo de Gestão do Sistema**;
>       * R(ler)U(atualizar) de usuários (3)
>  - **Módulo Financeiro**;
>       * CRUD de despesas/receitas do apartamento;
>       * Consolidar despesas/receitas do apartamento;
>       * Visualizar relatórios de despesas/receitas do apartamento;
>       * RU (atualizar/contestar/incluir recibo) de multas aplicadas do apartamento;
>       * R de despesas/receitas de locações de áreas comuns do apartamento;
>       * Emissão ou envio por e-mail de boleto (primeira e segunda via) para pagamento de condomínio do apartamento;
>  - **Módulo Dashboard**;
>       * R de agenda das assembleias do condomínio;
>       * CRUD para agendar áreas comuns do condomínio;
>       * Ler, marcar como lido notificações;
>  - **Módulo Comunicações**;
>       * R e marcar como lida notificações do condomínio (somente usuário atual) ou do apartamento;
>       * R e marcar como lida mensagens gerais (quadro de avisos) do condomínio ou do apartamento;

**Funcionário**:
>  - **Módulo Serviços**;
>       * CRUD para incluir solicitação para compra de materiais para limpeza e manutenção;
>       * R de aprovação de pedidos manutenção;
>       * CRUD para inclusão de mercadorias e correspondências dos moradores (notificação);
>  - **Módulo Dashboard**;
>       * Ler, marcar como lido notificações;
>  - **Módulo Comunicações**;
>       * CRUD para incluir notificações para determinado residencial, condomínio ou apartamento;

`DRAFT`


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
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
  (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
  correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
  Lembre-se que cada requisito deve corresponder à uma e somente uma
  característica alvo da sua solução. Além disso, certifique-se de que
  todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
