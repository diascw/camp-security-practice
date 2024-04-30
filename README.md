# CAMP IOASYS 2024 - CODE SECURITY

## Introdução
Durante a aula sobre Segurança, ministrada pelo José Lucas, foi destacada algumas falhas acerca de vulnerabilidades de código/aplicações, também como foi nos mostrado o melhor caminho para evitar tais problemas. Sendo assim, o professor nos forneceu códigos para que fosse realizada uma análise e correções necessárias para mitigar o problema.

## 1. Falha de Segurança: Armazenamento de Senhas em Texto Puro
### Localização do Problema:
a falha estava na definição do modelo de usuário. (`models/User.js`).

### Descrição:
a senha do usuário estava sendo armazenada em formato de string, sem criptografia.

### Problemas Futuros:
- Vulnerabilidade a ataques.
- Exposição de contas de usuário.

### Melhorias:
Modificação do modelo de usuário para armazenar senhas de forma segura usando hash.

## 2. Falha de Segurança: Exposição de Dados Sensíveis
### Localização do Problema:
Endpoint de listagem de usuários (`index.js`).

### Descrição:
a consulta ao DB retornava o campo de senha, expondo os hashes das senhas.

### Problemas Futuros:
- Exposição de senhas a ataques de força bruta ou dicionário.
- Ameaça à privacidade dos usuários.

### Melhoria:
Modificação a consulta ao DB para não incluir o campo de senha ao listar os usuários.

## 3. Falha de Segurança: Exposição de Senha no Endpoint de Detalhe do Usuário Logado
### Localização do Problema:
Endpoint de perfil no arquivo (`index.js`).

### Descrição:
a consulta ao DB retornava a senha do usuário.

### Problemas Futuros:
- Exposição direta de senhas.
- Uso malicioso por hackers.

### Melhoria:
Modificação a consulta ao banco de dados para não incluir a senha ao recuperar o perfil do usuário.

## Conclusão
É preciso abordar essas falhas de segurança para proteger a integridade e confidencialidade dos dados dos usuários. Pra isso, a implementação de técnicas seguras de armazenamento de senhas, como o uso de funções de hash seguras e a revisão dos endpoints para garantir que não exponham informações sensíveis dos usuários faz-se de grande necessidade.
