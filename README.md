# youtube-for-music-

Script para abrir playlists do YouTube em um player flutuante sobre qualquer página.

## Como usar como bookmarklet

1. Crie um favorito no navegador (`Ctrl+D`).
2. Edite o favorito e troque o endereço pelo código JavaScript abaixo.

      ```javascript
    javascript:(function(){  var s=document.createElement('script');  s.src='https://cdn.jsdelivr.net/gh/livrefree/youtube-for-music-@17bac682c419418590409f18679f80e9445ec57e/youtube-for-music.js';  document.body.appendChild(s);})();
    ```
3. Mantenha `javascript:` no começo do endereço. Se o navegador removê-lo ao colar, digite esse prefixo manualmente.
4. Abra qualquer página e clique no favorito.
5. Pressione `Shift+C` para mostrar o botão do player.
6. Clique no botão `▶️`, escolha uma playlist e o player será aberto.
7. Pressione `Shift+V` para esconder ou mostrar o botão, o menu e o player.

O bookmarklet precisa ser executado novamente em cada página em que você quiser usar o player.

## Playlists

Para trocar as playlists, edite o objeto `playlists` no arquivo JavaScript e substitua os endereços pelos links de incorporação do YouTube.

## Faltou alguma musica?

Dj ARANA

       https://www.youtube.com/playlist?list=PLUmuqqFEM_HY&jct=XADSq7DU-k7DViBIQZTkxA
 
    
funk
    
       https://www.youtube.com/playlist?list=PLUmuqqFEM_HY&jct=XADSq7DU-k7DViBIQZTkxA
  
poética

       https://www.youtube.com/playlist?list=PLdEPZGR5pEYE&jct=yZp5whTysbCkUVwrUwOF5w

    
