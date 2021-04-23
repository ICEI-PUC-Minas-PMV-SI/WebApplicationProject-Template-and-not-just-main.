# Introdução
`Texto descritivo com a visão geral do projeto abordado. Inclui o contexto, o problema, os objetivos, a justificativa e o público-alvo do projeto.`

Com a crescente demanda imobiliária, principalmente no seguimento de [condomínios](https://sindicolegal.com/cresce-o-numero-de-sindicos-profissionais-no-brasil/), 
também aumenta a necessidade de um <b>gerenciamento mais eficiente</b> em diversos quesitos, tais como, 
nas despesas (emissão de boletos, transparência dos gastos com os condôminos), no planejamento financeiro, 
agendamentos de reuniões ou assembleias, reserva de espaços comuns, agendamento de manutenções, comunicados e notificações formais.

## Problema

`Nesse momento você deve apresentar o problema que a sua aplicação deve  resolver. No entanto, não é a hora de comentar sobre a aplicação.`

`Descreva também o contexto em que essa aplicação será usada, se  houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de fato existir, pois ainda não é a hora de apresentar requisitos detalhados ou projetos.`

`Nesse momento, o grupo pode optar por fazer uso  de ferramentas como Design Thinking, que permite um olhar de ponta a ponta para o problema.`

> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

Para os condomínios, as principais formas de gerenciamento são <b>o controle manual</b> pelo síndico/sub-síndico ou a <b>contratação de uma empresa especializada</b>, onde o custo 
dependendo da administradora, pode onerar de forma significativa. Entretanto, seria <b>somente o custo</b> a verdadeira motivação para a terceirização de um serviço considerado altamente burocrático? 
Ou talvez, a complexidade para gerenciar diversos condomínios ou apartamentos de forma manual (planilhas em Excel, livros-caixa, entre outros)? Todavia, poderia ser também por haver aplicações 
legadas que não atendam as necessidades atuais de mercado?

No site [Síndico Legal](https://sindicolegal.com/cresce-o-numero-de-sindicos-profissionais-no-brasil/) (2019), 
especialista na área, descreve que "pode até parecer simples, mas na prática, a execução de todas essas tarefas é algo bem complicado; diversos são os contratempos 
enfrentados no dia-a-dia da gestão condominial, e ainda, existem os conflitos entre os moradores. Somados a isso, a falta de conhecimento, o tempo e empenho necessário, 
fizeram com que muitos moradores desistissem de assumir a função. Dentro desta realidade, os condomínios se viram obrigados a contratar um síndico profissional e, então, 
uma nova oportunidade de trabalho surgiu.".

Além da complexidade de gestão, existem também imprevistos como a pandemia do Covid-19, o que pode agravar, ainda mais, o gerenciamento por parte dos síndicos e até mesmo das empresas 
que não estão preparadas para o mundo digital. Na [Folha de São Paulo](https://www1.folha.uol.com.br/mpme/2020/10/crescem-as-empresas-que-oferecem-solucoes-digitais-para-condominios.shtml) (2020), 
diversos especialistas corroboram com a problemática apresentada, onde o Brasil possui uma grande defasagem no setor, no que diz respeito, a digitalização dos processos. No mesmo artigo o cofundador 
da Lar.App (Rafael Lauand) cita que "<b>o mercado condominial brasileiro está atrasado de 20 a 30 anos no aspecto tecnológico</b>. Quando a pandemia iniciou, poucas administradoras estavam preparadas 
para atender remotamente e de forma ágil".

## Objetivos

`Aqui você deve descrever os objetivos do trabalho indicando que o objetivo geral é desenvolver um software para solucionar o problema apresentado acima.`

`Apresente também alguns (pelo menos 2) objetivos específicos dependendo de onde você vai querer concentrar a sua prática investigativa, ou como você vai aprofundar no seu trabalho.`
 
O objetivo inicial será desenvolver uma aplicação web estática, responsiva e com alto nível de aplicação de [UX/UI](https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/) 
para a Gestão de Condomínios facilitando o acesso dos usuários (administradores/desenvolvedores, síndicos e condôminos) por meio de qualquer dispositivo conectado ao nosso servidor, consumindo os 
dados cadastrados através de uma [API](https://en.wikipedia.org/wiki/API) (Application Programming Interface: RESTful), uma vez que irá possibilitar maior flexibilidade na expansão do projeto para 
outras plataformas front-end (Android, iOS, Windows, MacOS, etc...).

> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

`Descreva a importância ou a motivação para trabalhar com esta aplicação que você escolheu. Indique as razões pelas quais você escolheu seus objetivos específicos ou as razões para aprofundar em 
certos aspectos do software.`

`O grupo de trabalho pode fazer uso de questionários, entrevistas e dados estatísticos, que podem ser apresentados, com o objetivo de esclarecer detalhes do problema que será abordado pelo grupo.`

> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

A justificativa para o desenvolvimento deste projeto, está correlacionado com os tópicos anteriores **Introdução** e **Problema** que retratam, 
da demanda crescente por aquisição de imóveis na categoria condominial, que consequentemente aumenta a necessidade de fornecimento de ferramentas que possam facilitar a gestão diária dos condomínios,
seja para atender o controle financeiro de determinado condomínio, aumentar a transparência dos gastos (disponibilizado para todos os respectivos proprietários), acesso centralizado aos comunicados, 
reuniões/assembleias, agendamento de áreas comuns, porém seria muito complicado executar estas tarefas de forma manual uma vez que a simplicidade na utilização da ferramenta incentiva o condomínio a
reduzir custos com a terceirização da gestão.


## Público-Alvo

`Descreva quem serão as pessoas que usarão a sua aplicação indicando os diferentes perfis. O objetivo aqui não é definir quem serão os clientes ou quais serão os papéis dos usuários na aplicação. 
A ideia é, dentro do possível, conhecer um pouco mais sobre o perfil dos usuários: conhecimentos prévios, relação com a tecnologia, relações hierárquicas, etc.`

`Adicione informações sobre o público-alvo por meio de uma descrição textual, diagramas de personas e mapa de stakeholders.`

> **Links Úteis**:
> - [Público-alvo](https://blog.hotmart.com/pt-br/publico-alvo/)
> - [Como definir o público alvo](https://exame.com/pme/5-dicas-essenciais-para-definir-o-publico-alvo-do-seu-negocio/)
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)

O público alvo de nosso sistema são em sua forma primária os síndicos/subsíndicos e proprietários dos apartamentos. Em segundo plano, nosso sistema possui como foco a utilização do sistema por 
funcionários do condomínio (porteiros, responsáveis pela limpeza, zelador, entre outros). 

Apesar desse não ser o foco principal, administradoras de condomínios poderiam utilizar nosso sistema sem menores complicações, uma vez as funcionalidades seriam as mesmas para a gestão de 
múltiplos condomínios por parte de um mesmo síndico.
