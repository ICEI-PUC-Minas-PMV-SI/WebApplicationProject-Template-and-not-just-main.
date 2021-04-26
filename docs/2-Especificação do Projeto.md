# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

`Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além 
das restrições do projeto.`

`Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto`

O Residencial Hector Bonilla existe há cerca de 20 anos. O residencial possui duas torres com 50 apartamentos, um dormitório para o zelador, áreas comuns como playground, piscina, salão de festa, área para churrasco,
área para assar pizza, quadra poliesportiva e portaria 24hrs.

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
Seu Barriga é um empresário de sucesso e é senhorio de vários condomínios. Por uma questão de tempo, economia financeira, eficiência e qualidade do serviço prestado decidiu começar digitalizar os 
processos de seus negócios através de soluções ágeis que lhe trarão maior flexibilidade ao delegar responsabilidades para seus funcionários, além de conseguir acompanhar de perto todas as 
transações que ocorrem em seus empreendimentos.

### Chaves
Pensando em otimizar o seu tempo e o gerenciamento do condomínio, o síndico Chaves propôs para o senhorio Seu Barriga que contratasse uma empresa para desenvolver uma solução web para integrar as 
necessidades dele, dos moradores e dos funcionários.

### Dona Florinda
Dona Florinda reside no condomínio Hector Bonilla há 10 anos. É viúva e possui um filho de 8 anos, o Kiko. Ela gosta muito da estrutura e do espaço oferecido, porém acredita que o serviço 
prestado poderia ser melhor e gostaria de uma forma melhor de se informar sobre os gastos, sobre as reuniões e sobre eventos realizados.

### Godinez
Godinez é um profissional exemplar que trabalha como zelador do prédio antes mesmo do primeiro morador. Ele conhece cada detalhe das atividades necessárias para a manutenção do condomínio, mas ele 
encontra algumas dificuldades de comunicação com o síndico que, algumas vezes, atrasa seu trabalho, por exemplo, a compra de materiais de manutenção, autorização formal de algumas atividades 
supervisionada pelo síndico e em algumas conversas com ele, perguntou se haveria alguma forma de resolver estas pequenas dificuldades do dia a dia e que teve uma reposta positiva de que este assunto
está sendo tratado com o senhorio (Seu Barriga).

### Dona Clotilde
Dona Clotilde é a faxineira e o "jornal ambulante" do prédio, pois sabe de tudo que acontece no condomínio e não perde uma fofoca. Apesar disso ela trabalha no prédio três vezes por semana, mas em 
alguns casos, ela não pôde concluir suas atividades porque faltavam materiais de limpeza e nisto ela sempre falava com o zelador Godinez deste problema, o que gerava gastos desnecessários para o
condomínio.

### Jaiminho
Jaiminho é o porteiro do condomínio, que conta com o serviço 24 horas por dia. A maior dificuldade de Jaiminho é fazer a entrega das correspondências dos moradores, pois segundo ele, é 
preciso "evitar a fadiga". Jaiminho tenta ligar no interfone ou nos respectivos telefones para que os moradores possam buscar as correspondências, mas nem sempre consegue falar com eles o que faz
aumentar a fadiga de Jaiminho e deixar o serviço mais cedo.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

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
