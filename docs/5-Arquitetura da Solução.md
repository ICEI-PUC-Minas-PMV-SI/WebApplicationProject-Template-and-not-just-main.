# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

A arquitetura para a solução Gestão de condomínios será baseada na infraestrutura web, levando em 
consideração o maior nível de segurança que a tecnologia atual poderá prover. Desde modo, nossa 
aplicação será executada nos navegadores modernos, ou seja, com suporte nativo ao [Vanilla Ecma Script 
6](https://bit.ly/2SNSUDM) ou superior (com isto não iremos dar suporte ao Internet Explorer, uma vez 
que a desenvolvedora, Microsoft Corporation, [descontinuou](https://bit.ly/3eQMZqf) o produto, 
consequentemente não provendo atualizações de segurança).

Uma vez definida a infraestrutura principal (web), para que o sistema rode nativamente nos navegadores, 
iremos utilizar o [HTML](https://bit.ly/3hyRA22) (HyperText Marckup Language) para mostrar o conteúdo ao
usuário, [CSS](https://bit.ly/3wafl4y) (Cascading Style Sheet) para estilizar o conteúdo da página, 
entretanto, faremos uso de um pré-compilador de CSS, o [SCSS](https://bit.ly/3tVMPC2) (Sassy Cascading 
Style Sheet), que irá melhorar a performance no desenvolvimento e por fim o Vanilla Javascript (ES6+) 
para adicionar maior dinamismo às ações do usuário.

Neste primeiro momento iremos persistir os dados em arquivos no formato padrão 
[JSON](https://bit.ly/2SSfqLP). A medida que o projeto for evoluindo, algumas alterações na 
persistência poderá sofer alguma alteração para um SGBD (Sistema de Gerenciamento de Banco de Dados) 
SQL (preferencialmente) ou NoSQL. O sistema também irá utilizar o banco de dados local (navegador) para 
salvar algumas configurações do usuário.

E o principal recurso a ser utilizado será a hospedagem da aplicação, definida neste primeiro momento, na 
plataforma do [Heroku](https://bit.ly/33PBGs1), uma vez que irá nos possibilitar a utilização da 
[plataforma Cloud](https://bit.ly/33QxNDm) sem custos adicionais, permitindo uma análise de viabilidade 
de expansão de maneira simples e eficiente, ao passo que a plataforma possui os recursos necessários 
para o desenvolvimento de aplicações simples e complexas.

A solução Gestão de condomínios tem a previsão de utilização de diversas APIs, entretanto, nesta primeira 
fase do projeto, estará excluída ao passo que será preciso uma [MVP](https://bit.ly/2Rp1HMe) (Minimum 
Viable Product - Produto Viável Mínimo em português)

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura 1.

![Diagrama de Componentes](img/architecture/architecture.png)
<center>Figura 1 - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador**: Interface básica do sistema  
  - **Páginas Web**: Conjunto de arquivos HTML, CSS, JavaScript, imagens e arquivos json que 
    implementam as funcionalidades do sistema.
   - **Local Storage**: Armazenamento mantido no Navegador, onde são implementados bancos de dados 
     baseados em JSON. 
     - **Configurações**: guardar as configurações básicas do usuário, por exemplo, tema da solução.
 - **API**: ainda em estudo. API para comunicação com bancos e/ou financeiras para geração de boletos.
 - **Hospedagem**: local na Internet onde as páginas são mantidas e acessadas pelo navegador, além dos 
   arquivos JSON para persistir os dados do sistema. 
   
## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
