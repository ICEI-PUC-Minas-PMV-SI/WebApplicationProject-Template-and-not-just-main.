
# Metodologia

A metodologia a ser aplicada no projeto será a ágil, mais especificamente, o [Scrum](https://bit.ly/3eRhE6A), 
uma vez que será demandada entregas frequentes, mantendo os processos mais simples e claros, mantendo os 
registros visíveis na gestão dos [backlogs](https://bit.ly/3wmlwmn), flexibilizando os resultados, prazos, 
possibilitando revisões constantes, além de ser viável para pequenas equipes.

O principalmente ambiente de trabalho da equipe será o [Github](https://bit.ly/3tN3YOl), onde será 
incluída a [documentação do projeto](https://bit.ly/33N1a9m), [código fonte](https://bit.ly/3fiaibC), 
[gestão das entregas](https://bit.ly/3wmlwmn) ([Sprints](https://bit.ly/33NIVRo) - Kanbans). Além do 
Github, será utilizado o [Microsoft Teams](https://bit.ly/2RUGYzV) para os encontros recorrentes e o 
grupo de WhatsApp para discussões e alinhamentos rápidos.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o 
[Github](https://bit.ly/3tN3YOl) foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branchs:

- `master`: versão estável já testada do software;
- `unstable`: versão já testada do software, porém instável;
- `testing`: versão em testes do software;
- `dev`: versão de desenvolvimento do software,

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação;
- `bug`: uma funcionalidade encontra-se com problemas;
- `enhancement`: uma funcionalidade precisa ser melhorada;
- `feature`: uma nova funcionalidade precisa ser introduzida;
- `design`: artefatos relacionados ao design (incluindo UI/UX) do projeto.

### Convenção adotada
**A configuração de versionamento será a mesma adotada pela seguinte convenção:**

|Status                                      |Estágio      |Regra                                                                          |Exemplo da versão|
|--------------------------------------------|-------------|-------------------------------------------------------------------------------|-----------------|
|Primeira release                            |Novo produto |Começa com 1.0.0                                                               |      1.0.0      |
|Bug resolvido com retrocompatibilidade      |Patch release|Incremento do terceiro dígito                                                  |      1.0.1      |
|Nova funcionalidade com retrocompatibilidade|Minor release|Incremento do dígito do meio e reiniciar o terceiro dígito para zero           |      1.1.0      |
|Mudanças que quebram a retrocompatibilidade |Major release|Incremento do primeiro dígito e reiniciar o segundo e terceiro dígito para zero|      2.0.0      |

## Gerenciamento de Projeto

### Divisão de Papéis

Com o intuito de gerar o maior nível de conhecimento possível em todas as entregas do projeto, a divisão 
das atividades não serão de exclusividade da pessoa atribuída, mas da principalmente responsabilidade, 
tendo em vista a colaboração de todos, seja na discussão, desenvolvimento e revisão.

**Tabela de descrição dos papeis:**

| Id | Ação                 | Código |
|----|----------------------|--------|
| 1  | Product Owner        | (PO)   |
| 2  | Scrum Master         | (SM)   |
| 3  | Architect            | (AR)   |
| 4  | Designer             | (DN)   |
| 5  | Developer            | (DV)   |
| 6  | Tester               | (TS)   |

<br>
A seguir temos as principais responsabilidades do projeto:

| Id | Responsabilidades    | Responsável                        |
|----|----------------------|------------------------------------|
| 1  | `1`                  | Professor Fábio Martins de Oliveira|
| 2  | `2` `3` `4` `5` `6`  | Gláucio Leonardo Sant'ana          |
| 3  | `3` `4` `5` `6`      | Danilo Paris                       |
| 4  | `3` `4` `5` `6`      | João Lucas                         |
| 5  | `3` `4` `5` `6`      | Salomão Lobato                     |

### Processo

A implementação do Scrum será feita através da utilização de ferramentas, principalmente de maneira 
online, simplificando a gestão e dando maior transparência das atividades a serem executadas.

#### Reuniões:
> - `Daily Scum`: Reuniões diárias através do Microsoft Teams.
> - `Sprint Review`: A cada entrega do sprint será feita uma apresentação para o Product Owner.
> - `Retropesctiva da Sprint`: A cada entrega do sprint o time irá lentar os pontos que precisam ser 
> melhorados e mantidos.

#### Comunicados e discussões rápidas:
> Grupo do projeto no WhatsApp.

#### Versionamento do código
> Será utilizado o Github para versionar os códigos desenvolvidos para o projeto.

#### Documentação do projeto
> Será utilizado o Github para documentar o projeto, bem como as funcionalidades.

#### Gestão das atividades:
> Através do Github na seção de Projetos, serão gerenciadas as atividades do projeto seguindo três 
> níveis de categorias na ferramenta Kanban (template Kanban automatizado):
> 1. `Sprints / Milestones`;
> 2. `Divisões: Backlogs, To do, In progress e Done`; 
> 3. `Issues: abertas e fechadas`. 
>
> Além disso, as prioridades do item dois (2) serão negociadas em conjunto com o Product Owner a cada 
> revisão das Sprints e atribuída ao time de projeto de acordo com as necessidades de andamento e 
> entregas do projeto.

### Ferramentas

As ferramentas a serem utilizadas pelo time serão de livre escolha, com base na facilidade de uso,
conhecimento do usuário, bem como o benefício / custo da utilização, tendo em vista a maior produtividade
do time. Entretanto as ferramentas recomendadas são:

| Id | Categoria                 | Ferramenta                                                                                                                      |
|----|---------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| 1  | Comunicação               | [Microsoft Teams](https://bit.ly/2RUGYzV), WhatsApp                                                                             |
| 2  | Editor de código          | [Visual Studio Code](https://bit.ly/3fk8TB5), [WebStorm](https://bit.ly/3uLtQeR)                                                |
| 3  | Compartilhamento arquivos | [OneDrive](https://bit.ly/3hqETWT), [Google Drive](https://bit.ly/33T2Qhv)                                                      |
| 4  | Procedimentos e Diagramas | [Microsoft Visio](https://bit.ly/33Jwjum), [Bizagi](https://bit.ly/2RWMx0y), [Draw.io](https://bit.ly/3oiM9FT), [MySQL Workbench](https://bit.ly/3oicbZV)                  |
| 5  | Prototipação              | [Adobe XD](https://adobe.ly/3btXCgA), [Adobe Illustrator](https://adobe.ly/3bwet2f), [Clip Studio Paint](https://bit.ly/3uSnzOC)|   
| 6  | Gerenciamento do projeto  | [Github](https://bit.ly/3tN3YOl)                                                                                                |
| 7  | Versionamento do projeto  | [Github](https://bit.ly/3tN3YOl)                                                                                                |
| 8  | Documentação do projeto   | [Github](https://bit.ly/3tN3YOl)                                                                                                |
| 9  | Design                    | Adobe Illustrator, [Adobe Photoshop](https://adobe.ly/3uWgbBK), [Adobe Premiere Pro](https://adobe.ly/3tNhJfX), [Adobe After Effects](https://adobe.ly/3uUIRuM), [Adobe Photoshop Lightroom](https://adobe.ly/3yaYX5E), [Adobe Audition](https://adobe.ly/3tQwRJA), [Microsoft PowerPoint](https://bit.ly/3bMo7hB)|

#### Motivo da escolha:
- `1` => Teams: Ferramenta oficial de comunicação da Faculdade e simples de utilizar. WhatsApp, maior 
  plataforma da comunicação Gloabl;
- `2` => Visual Studio: Simples de utilizar, altamente customizável e gratuito. WebStorm igual ao Visual 
  Studio, porém com diversas funcionalidades que aumentam a produtividade, porém não é gratuito;
- `3` => Para compartilhamento de arquivos fora do contexto do Github ou arquivos grandes;
- `4` => Visio e Bizagi: Ferramentas robustas para montar BPM (Business Process Management) / BPMN 
  (Business Process Management Notation), Draw.io, ferramenta gratuita e Web;
- `5` => Adobe XD, Adobe Illustrator: Prototipação de alto nível. Clip Studio Paint: Ferramenta 
  profissional para desenho que será útil na prototipação de baixo nível;
- `6` => Ferramenta bastante simples para gerenciamento de Kanbans a ser utilizado na metodologia Scrum;
- `7` => Maior e uma das melhores plataformas do mundo para versionamento de códigos;
- `8` => Melhor integração com o Github;
- `9` => Integração completa com entre os produtos da adobe, além de possuir ferramentas de alta 
  produtividade. PowerPoint: Ferramenta robusta e simples para criar apresentações do projeto.
