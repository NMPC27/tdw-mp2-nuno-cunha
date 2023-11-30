FIFA cards

https://futdb.app/api/doc

TODO:

    CI:
        - [X] Lint
        - [X] Prettier
        - [x] prop-types

    Pages:
        - [X] listagem jogadores (com filtragem)
        - [X] detalhe jogador
        - [X] info
        - [X] home
        - [X] search

    [X] suport for hibrid mode (resquest or use redux state on player info)

    [X] add players img to table

    CD -> no suport bc api have very little requests

---

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
