
## Pokédex done by Camilo

The app consists of generating a Pokédex with the first 151 Pokémon for this I used 2 API. The first thing I looked for information on is: 
- https://pokeapi.co/


And the second, where I found the images of the Pokémon:
- https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id-pokemon}.png


The idea was that at the beginning the first 150 Pokémon (in my case first 1000) and the application shows you the list and allows doing a search based on name (I choose to be able to search by name and ID). Within the detail of each Pokémon must go:
-Type
- Evolution
- Attacks
- Skills
- Places where you can find


Finally, I should generate a series of submenus of my choice, I decided to add the characteristics card.

Please notice:

1. Pokémon can be search by name and id online and offline.
2. When searching offline you can find the Pokémon name that includes the string enter, the exact match on name and the exact match on id. For example: "pika", "pikachu" and "25" will all find "pikachu". When searching on online you cannot find the Pokémon name that includes the string enter (e.g: "pika") because the API does not support this.
3. When accesing offline the first 1000 Pokémon have been saved, so you can find them.
4. Last time you access online will save the Pokémon card, so when accesing offline if the id saved does not match the url id, it will show a fallback component because data has not been save for that Pokémon. If the id is the same, it will show the Pokémon details.

Working sample: https://youtu.be/u00CbCdrsRE

*To run the project:*
- npm install
- npm run dev
