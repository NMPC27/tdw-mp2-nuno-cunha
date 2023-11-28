FIFA cards

https://futdb.app/api/doc
e por tree js para a carta rodar na pagina de detalhes
https://www.youtube.com/watch?v=34B04LBS34M

TODO:

    CI:
        - [X] Lint
        - [X] Prettier
        - [ ] Jest
        - [x] prop-types

    Pages:
        - [X] listagem jogadores (com filtragem)
        - [X] detalhe jogador
        - [ ] info
        - [ ] home
        - [X] search

    add proptypes validation

???
-> o f5 da pagina info da break por causa do estado global
deveria continuar a usar???

    {
      "id": 17788,
        /api/players/{id}/image -> img

      "firstName": "Edson",
      "lastName": "Pelé",


      "height": 173,
      "weight": 70,
      "gender": "male",
      "birthDate": "1940-10-23",
      "age": 83,

      "league": 2118,
        /api/leagues/{id} -> name
        /api/leagues/{id}/image -> img
      "nation": 54,
        /api/nations/{id} -> name
        /api/nations/{id}/image -> img
      "club": 112658,
        /api/clubs/{id} -> name
        /api/clubs/{id}/image -> img


      "position": "CAM",


      "skillMoves": 5, // STARS
      "weakFoot": 4, // STARS
      "foot": "right",


      "color": "gold",

      "rating": 95,

      "pace": 93,
      "shooting": 94,
      "passing": 91,
      "dribbling": 94,
      "defending": 58,
      "physicality": 74,
    }
