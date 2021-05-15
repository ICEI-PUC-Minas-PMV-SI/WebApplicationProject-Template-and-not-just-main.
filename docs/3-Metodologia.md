
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

Coloque informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo poderá fazer 
uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status 
de desenvolvimento da solução.
 
> **Links Úteis**:
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de diagramação

O editor de código foi escolhido porque ele possui uma integração com o
sistema de versão. As ferramentas de comunicação utilizadas possuem
integração semelhante e por isso foram selecionadas. Por fim, para criar
diagramas utilizamos essa ferramenta por melhor captar as
necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
