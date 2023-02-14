
# Pokedex Web

Pokedex desenvolvida com uso de API-REST


## Referência

 - [Pokedex-API](https://pokeapi.co/)
 - [Pokedex Code Boost](https://codeboost.com.br/projetos/pokeapi/)


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/v2/
```

#### Retorna todos os tipos de pokemons

```http
  GET /api/v2/type/
```

#### Retorna todos os tipos de pokemons

```http
  GET /api/v2/type/${id}/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. O ID do tipo que você quer |

#### Retorna array de pokemons

```http
  GET /api/v2/pokemon/
```

#### Retorna um pokemon

```http
  GET /api/v2/pokemon/${id}/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do pokemon que você quer |




## Autores

- [@Lucas Oliveira](https://github.com/Lucas-Jav)


## Deploy

Para rodar o scss rode:

```powershell
  npx run scss
```


## Documentação

[API](https://pokeapi.co/docs/v2)


## FAQ

#### Alguns gifs não aparecem?!

A API não possui todos os gifs ou imagens de alguns pokemons.

#### Não tem todas as informações dos pokemons?!

Esta aplicação foi desenvolvida sem o uso do REACT, com isso para que fique um funcionamneto mais rapido, não foi colocado tanto script, para que tenha um carregamento rapido.


## Funcionalidades

- Modal ao clicar em algum pokemon
- Search pokemon
- Botão do anterior e proximo pokemon


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de lucasrazebra@gmail.com


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Lucas-Jav/Pokedex-API.git
```

Entre no diretório do projeto

```bash
  cd Pokedex
```

Instale as dependências

```bash
  npm install
```



