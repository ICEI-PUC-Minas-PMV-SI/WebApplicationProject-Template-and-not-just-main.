
# Projeto de Interface

Durante o desenvolvimento do projeto, a interface será **baseada nos wireframes**, entretanto diversas 
mudanças poderão ocorrer devido à evolução de tecnologias ou viabilidade de execução do protótipo. 
Da mesma maneira o **user flow** poderá sofrer alterações que, neste caso, serão atualizadas conforme 
necessário.

## User Flow

A imagem a seguir ilustra o fluxo do usuário da nossa solução. Na tela 1.0 o usuário precisará efetuar 
o login na aplicação e após será redirecionado para a página inicial (tela 2.0), Dashboard.

### 2.0. Dashboard

Como padrão, todas as telas terão o cabeçalho contendo ao lado esquerdo a lofo e o nome da página, 
além de redirecionar para a página inicial ao clicar na logo. Ao lado direito temos o menu com as 
principais ações do sistema sendo respectivamente:

> - Acesso ao módulo financeiro;
> - Acesso ao módulo de serviços;
> - Alterar o tema padrão para o modo claro;
> - Agendar/reservar área comum;
> - Agendar um compromisso/assembléia;
> - Central de notificações;
> - Acesso á gestão do usuário atual;
> - Acesso ao módulo de gestão do sistema,

O dashboard será moldado de acordo com o tipo de usuário, ou seja, nem todas as opções do menu estarão 
disponíveis a todos os usuários, bem como os cards no painel de comunicação. 

que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

### 3.0. Configurações

Neste módulo, apenas pessoas autorizadas terão acesso, entretanto, a opção no menu de ações ao lado 
esquerdo o usuário comum irá acessar seu perfil ao invés de acessar a lista de usuários, ao passo que os
administradores terão acesso irrestrito. 

Neste módulo será possível gerenciar os usuários, criar tipos de permissões para perfis de usuários, 
gerenciar residenciais, condomínios, apartamentos, áreas comuns e por ser uma parte crítica da aplicação,
a opção financeira será definida de forma restrita. 

### 4.0. Financeiro

No módulo financeiro os usuários com suas respectivas permissões terão acesso à inclusão de despesas e 
receitas provenientes ao condomínio, residencial, consolidar transações, seja de um ou mais condomínios, 
gerar relatórios e também emitir boletos referentes ao apartamento.

### 5.0. Serviços

Por fim, no módulo de serviços, destinado principalmente para os gestores e funcionários, uma vez que 
ambos poderão incluir solicitação de materiais, incluir pedidos de manutenção, aprovar as solicitações e
incluir o cadastro de mercadorias recebidas pela portaria.

![Exemplo de UserFlow](img/interfaces/user-flow/user-flow.png)

## Wireframes

### 1.0. Login
![Exemplo de Wireframe](img/interfaces/wireframes/login/login.png)

### 2.0. Dashboard
![Exemplo de Wireframe](img/interfaces/wireframes/dashboard/01-dashboard.png)
#### 2.1. Dashboard: notificações
![Exemplo de Wireframe](img/interfaces/wireframes/dashboard/02-dashboard-notification.png)
#### 2.2. Dashboard: agendamento de áreas comuns
![Exemplo de Wireframe](img/interfaces/wireframes/dashboard/03-dashboard-common-area.png)
#### 2.3. Dashboard: agendamento de novo compromisso
![Exemplo de Wireframe](img/interfaces/wireframes/dashboard/04-dashboard-novo-compromisso.png)

### 3.0 Configurações
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/01-configuracoes.png)
#### 3.1. Configurações: gestão de usuários
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/02-configuracoes-usuarios.png)
#### 3.2. Configurações: gestão de usuários (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/03-configuracoes-usuarios-crud.png)

#### 3.3. Configurações: gestão de permissões
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/04-configuracoes-permissoes.png)
#### 3.4. Configurações: gestão de permissões (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/05-configuracoes-permissoes-crud.png)

#### 3.5. Configurações: gestão de residenciais
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/06-configuracoes-residenciais.png)
#### 3.6. Configurações: gestão de residenciais (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/07-configuracoes-residenciais-crud.png)

#### 3.7. Configurações: gestão de condomínios
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/08-configuracoes-condominios.png)
#### 3.8. Configurações: gestão de condomínios (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/09-configuracoes-condominios-crud.png)

#### 3.9. Configurações: gestão de apartamentos
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/10-configuracoes-apartamentos.png)
#### 3.10. Configurações: gestão de apartamentos (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/11-configuracoes-apartamentos-crud.png)

#### 3.11. Configurações: gestão de áreas comuns
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/12-configuracoes-areas-comuns.png)
#### 3.12. Configurações: gestão de áreas comuns (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/12-configuracoes-areas-comuns-crud.png)

#### 3.13. Configurações: gestão de acesso ao módulo financeiro
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/13-configuracoes-financeiro.png)
#### 3.14. Configurações: gestão de acesso ao módulo financeiro (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/configuracoes/14-configuracoes-financeiro-crud.png)



### 4.0. Financeiro
![Exemplo de Wireframe](img/interfaces/wireframes/financeiro/01-financeiro.png)

#### 4.1. Financeiro: gestão de despesas e receitas
![Exemplo de Wireframe](img/interfaces/wireframes/financeiro/02-financeiro-receitas-despesas.png)
#### 4.2. Financeiro: gestão de despesas e receitas (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/financeiro/03-financeiro-receitas-despesas-crud.png)

#### 4.3. Financeiro: consolidação das transações entre residenciais, condomínios e apartamentos
![Exemplo de Wireframe](img/interfaces/wireframes/financeiro/04-financeiro-consolidar-transacoes.png)
#### 4.4. Financeiro: consolidação das transações entre residenciais, condomínios e apartamentos (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/financeiro/05-financeiro-consolidar-transacoes-crud.png)

#### 4.5. Financeiro: relatórios
![Exemplo de Wireframe](img/interfaces/wireframes/financeiro/06-financeiro-relatorios.png)
#### 4.6. Financeiro: relatórios (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/financeiro/07-financeiro-relatorios-crud.png)

#### 4.7. Financeiro: geração de boletos
![Exemplo de Wireframe](img/interfaces/wireframes/financeiro/08-financeiro-boletos.png)
#### 4.8. Financeiro: geração de boletos (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/financeiro/09-financeiro-boletos-crud.png)


### 5.0. Serviços
![Exemplo de Wireframe](img/interfaces/wireframes/servicos/01-servicos.png)

#### 5.1. Serviços: solicitação de materiais
![Exemplo de Wireframe](img/interfaces/wireframes/servicos/02-servicos-solicitar-materiais.png)
#### 5.2. Serviços: solicitação de materiais (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/servicos/03-servicos-solicitar-materiais-crud.png)

#### 5.3. Serviços: solicitação de manutenções
![Exemplo de Wireframe](img/interfaces/wireframes/servicos/04-servicos-solicitar-menutencao.png)
#### 5.4. Serviços: solicitação de manutenções (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/servicos/05-servicos-solicitar-menutencao-crud.png)

#### 5.5. Serviços: aprovação de solicitações
![Exemplo de Wireframe](img/interfaces/wireframes/servicos/06-servicos-aprovar-solicitacoes.png)
#### 5.6. Serviços: aprovação de solicitações (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/servicos/07-servicos-aprovar-solicitacoes-crud.png)

#### 5.7. Serviços: cadastramento de mercadorias entregues
![Exemplo de Wireframe](img/interfaces/wireframes/servicos/08-servicos-mercadorias.png)
#### 5.8. Serviços: cadastramento de mercadorias entregues (crud)
![Exemplo de Wireframe](img/interfaces/wireframes/servicos/08-servicos-mercadorias-crud.png)
