(function () {
  let container = null;
  let iframe = null;
  let menu = null;
  let hidden = false;

  const playlists = {
    Outros: "https://www.youtube.com/embed/videoseries?list=PLXl0fj1Yod7LUey9UB2HbB30gKldfB0_V",
    Funk: "https://www.youtube.com/embed/videoseries?list=PLXwxykahbbHk",
    Dj_arana: "https://www.youtube.com/embed/videoseries?list=PLUmuqqFEM_HY",
    Pagode: "https://www.youtube.com/embed/videoseries?list=PL_Q15fKxrBb5pckIW2RHwZbgf-FwRiCWr",
    Eletronica: "https://www.youtube.com/embed/videoseries?list=PLhgO2i9SR2sPJ-ihUiutO4XXLU9Jr6-nZ",
    Poética: "https://www.youtube.com/embed/videoseries?list=PLdEPZGR5pEYE",
    
  };

  document.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.code === "KeyC") {
      if (!container) {
        container = document.createElement("div");
        container.style.position = "fixed";
        container.style.bottom = "20px";
        container.style.right = "20px";
        container.style.width = "30px";
        container.style.height = "30px";
        container.style.borderRadius = "50%";
        container.style.background = "transparent";
        container.style.zIndex = "9999";
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";

        const button = document.createElement("button");
        button.innerHTML = "▶️";
        button.style.fontSize = "16px";
        button.style.background = "transparent";
        button.style.border = "none";
        button.style.cursor = "pointer";

        button.onclick = function () {
          if (!menu) {
            menu = document.createElement("select");
            menu.style.position = "fixed";
            menu.style.bottom = "70px";
            menu.style.right = "20px";
            menu.style.zIndex = "10000";

            for (const name in playlists) {
              const option = document.createElement("option");
              option.value = playlists[name];
              option.textContent = name;
              menu.appendChild(option);
            }

            menu.onchange = function () {
              if (!iframe) {
                iframe = document.createElement("iframe");
                iframe.style.position = "fixed";
                iframe.style.bottom = "120px";
                iframe.style.right = "20px";
                iframe.style.width = "400px";
                iframe.style.height = "300px";
                iframe.style.zIndex = "9999";
                iframe.style.border = "2px solid #000";
                document.body.appendChild(iframe);
              }

              iframe.src = menu.value;
            };

            document.body.appendChild(menu);
          }
        };

        container.appendChild(button);
        document.body.appendChild(container);
      }
    }

    if (event.shiftKey && event.code === "KeyV") {
      if (!hidden) {
        if (iframe) iframe.style.display = "none";
        if (menu) menu.style.display = "none";
        if (container) container.style.display = "none";
        hidden = true;
      } else {
        if (iframe) iframe.style.display = "block";
        if (menu) menu.style.display = "block";
        if (container) container.style.display = "flex";
        hidden = false;
      }
    }
  });
})();
