# Cadastro de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**Requisitos Não Funcionais**

**Regras de Negócios**
Não deve ser possível cadastrar um carro com uma placada já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
Um carro deve ser cadastrado, por padrão, com disponibilidade.
O usuário responsável pelo cadatro deve ser um usuário administrador.

# Listagem de Carros

**Requisitos Funcionais**
Deve ser possível listar os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regras de Negócios**
O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.
O usuário responsável pelo cadatro deve ser um usuário administrador.

**Regras de Negócios**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.

# Cadastro de Imagens do Carro

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**Requisitos Não Funcionais**
Utilizar o multer para upload dos arquivos.

**Regras de Negócios**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadatro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um aluguel.

**Requisitos Não Funcionais**


**Regras de Negócios**
O aluguel deve ter duração mínima de 24 hora.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuários.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
