var searchbar = document.getElementById("searchbar");

var searchbarM = document.getElementById("searchbarM");

var contentContainer = document.querySelector(".content-container");
var contentContainerHtml = contentContainer.innerHTML;

var currentStateLength = history.length;

function onlyPlayOneIn(container) {
  container.addEventListener(
    "play",
    function (event) {
      audio_elements = container.getElementsByTagName("audio");
      for (i = 0; i < audio_elements.length; i++) {
        audio_element = audio_elements[i];
        if (audio_element !== event.target) {
          audio_element.pause();
        }
      }
    },
    true
  );
}

onlyPlayOneIn(contentContainer);

contentContainer.addEventListener("click", () => {
  if (document.getElementById("menu-icon").classList.contains("open")) {
    toggleMobileMenu(document.getElementById("menu-icon"));
  }
});

if (location.hash.includes("q=")) {
  searchbar.value = location.hash.slice(3);
}

if (window.location.hash == "") {
  toggleMobileMenu(document.getElementById("sidebar"));
}

Array.from(document.querySelectorAll("audio")).forEach((element) => {
  element.setAttribute("oncontextmenu", "return false;");
});

window.addEventListener("popstate", function (event) {
  // This function will be called when the user navigates back in history
  // console.log('User navigated back in history');
  event.preventDefault;
  contentContainer.innerHTML = contentContainerHtml;
  searchbar.value = "";
  searchbarM.value = "";
  // console.log(contentContainerHtml);
  if (location.hash == "") {
    searchbarM.value = "";
    searchbar.value = "";
  }
});

function goTo(item) {
  contentContainer.innerHTML = contentContainerHtml;
  document.getElementById(item).scrollIntoView();
  window.location.hash = item;
  toggleMobileMenu(document.getElementById("sidebar"));
}

var r = "";

function register() {
  r = window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdOjRveBPyuYeAdD_xUUSfCMn5__BT8JZ_IWFuc15mDIxQFqw/viewform",
    "",
    `width=${window.screen.width * 0.7},height=${window.screen.height * 0.7}`
  );

  r.document
    .querySelectorAll(".l4V7wb")
    .addEventListener("click", closeRegisterWindow);

  // r.document.write(`
  // <html>
  // <head>
  //   <style>
  //     .done-btn {
  //       background: #1B065E;
  //       color: white;
  //       border-radius: 50px;
  //       padding: 11px;
  //       transition: 0.5s;
  //       border: none;
  //       cursor: pointer;
  //       font-size: 15pt;
  //     }

  //     .done-btn:hover {
  //       background: #4a20d5;
  //     }
  //   </style>
  //   <title>Register Now - Kavithaalaya</title>
  // </head>
  // <body>
  // <center>
  //   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOjRveBPyuYeAdD_xUUSfCMn5__BT8JZ_IWFuc15mDIxQFqw/viewform?embedded=true" width="640" height="770" frameborder="0" marginheight="0" marginwidth="0">
  //     Loading…
  //   </iframe>
  //   <br>
  //   <button onclick="closeForm();" class="done-btn">Done</button>
  // </center>
  // <script>
  //   function closeForm() {
  //     window.close();
  //   }
  // </script>
  // </body>
  // </html>
  // `);
}

// var currentStateLength = history.length;

// setInterval(function() {
//   if (history.length < currentStateLength) {
//     console.log('User navigated back in history');
//     currentStateLength = history.length;
//   }
// }, 1000); // Check every second for changes in history length

// window.addEventListener('popstate', function() {
//   if (history.length < currentStateLength) {
//     // The back button was pressed
//     // You can add your logic here to handle the back button press
//     console.log('Back button pressed');
//     alert("back button pressed");
//   }
//   currentStateLength = history.length;
// });

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  if (
    menu == document.getElementById("sidebar") &&
    document.getElementById("sidebar").classList.contains("open")
  ) {
    document.querySelector(
      ".sidebar-selector-text"
    ).innerHTML = `Catalog <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="28px" fill="#4a20d5"><path d="m280-400 200-200.67L680-400H280Z"/></svg>`;
  } else {
    document.querySelector(
      ".sidebar-selector-text"
    ).innerHTML = `Catalog <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="28px" fill="#4a20d5"><path d="M480-360 280-559.33h400L480-360Z"/></svg>`;
  }
}

function printPDF(fileName) {
  const isMobile = navigator.userAgentData.mobile;

  if (isMobile) {
    window.open(fileName);
  } else {
    window.open(fileName).print();
  }
}

function goBack() {
  contentContainer.innerHTML = contentContainerHtml;
  searchbar.value = ``;
  searchbarM.value = ``;
}

// Searchbar functionality

const keywords = [
  "bhagyada lakshmi ragam shree ragam shri ragam talam adi talam",
  "devi bhajan amba parameshwari talam eka talam",
  "devi neeye thunai ragam keeravani ragam talam adi talam papanasam shivan",
  "durga lakshmi talam eka talam ekam talam",
  "gajanana talam adi talam",
  "gajavadana ragam shri ranjani ragam paapanaasam shivan talam adi talam",
  "hanuman bhajan jai jai hanuman talam eka talam",
  "jaya janardhana ragam madhyamavati ragam talam adi talam",
  "mahalakshmi jagan mata ragam poorvikalyani ragam talam adi talam",
  "mayil meedhu vilayadum talam adi talam ragam vasanthi ragam sathur karpagam",
  "saibhajan mythilipate talam eka talam",
  "narayana naarayana ragam sudda dhanyaasi ragam talam adi talam",
  "nandalala talam eka talam ekam talam",
  "neeraja talam adi talam",
  "note one shyamale talam adi talam",
  "radhe radhe bhajan talam eka talam",
  "ramachandraya janaka ragam kurinji ragam talam adi talam badraachala raamadaas",
  "rama rama ragam nilambari ragam neelambari ragam talam adi talam",
  "ramanukku mannan mudi",
  "sami mayura giri saami mayura giri murugan tamil talam adi talam ragam khamas ragam kavi kunjara bharati",
  "saraswathi namosthuthe saraswathi namostute ragam saraswathi ragam talam roopaka talam",
  "unai marandhariyen ragam kalyana vasantham ragam talam adi talam devi b.a. chidambaram ba chidambaram",
  "vel vel vel vel talam eka talam ekam talam",
  "vittal bhajan vittala vittala hari vittala talam eka talam ekam talam",
];

const stuff = [
  "bhagyada lakshmi",
  "devi bhajan",
  "devi neeye thunai",
  "durga lakshmi",
  "gajanana",
  "gajavadana",
  "hanuman bhajan",
  "jaya janardhana",
  "mahalakshmi jagan mata",
  "mayil meedhu vilayadum",
  "mythili",
  "naarayana",
  "nandalala",
  "neeraja",
  "note one shyamale",
  "radhe",
  "ramachandraya",
  "rama rama",
  "ramanukku mannan mudi",
  "sami mayura",
  "saraswathi namosthuthe",
  "unai marandhariyen",
  "vel vel",
  "vittal bhajan",
];

var newStuff = Array.from(contentContainer.querySelectorAll("*[id]"));
var contentContainerHtml = contentContainer.innerHTML;

function search(event, fromForm) {
  searchbarM.value = searchbar.value;

  if (fromForm == true) {
    event.preventDefault();
  }

  document.getElementById("up").scrollIntoView();

  searchbarValue = document.getElementById("searchbar").value;
  searchbar.blur();
  window.location.hash = "#search";

  if (searchbarValue == "") {
    contentContainer.innerHTML = contentContainerHtml;
    return;
  }

  const result = keywords.filter((word) => {
    return word.includes(searchbarValue.toLowerCase()) == true;
  });

  // const result = stuff.filter((word) => {
  //   return word.includes(searchbarValue.toLowerCase()) == true;
  // });

  console.log(result);

  let text = "";
  contentContainer.innerHTML = contentContainerHtml;

  for (let i = 0; i < result.length; i++) {
    console.log(i);
    var resultI = result[i];
    var indexOfResultIinKeywords = keywords.indexOf(resultI.toLowerCase());
    var idOfResultI = stuff[indexOfResultIinKeywords];
    var elementOfResultI = document.getElementById(idOfResultI);
    var codeOfResultI = elementOfResultI.innerHTML;
    console.log(idOfResultI);
    console.log(stuff[keywords.indexOf(result[i].toLowerCase())]);
    text += codeOfResultI;
    // text += document.getElementById(stuff[keywords.indexOf(result[i].toLowerCase())]).innerHTML;
    // text += document.getElementById(result[i].toLowerCase()).innerHTML;
  }

  if (text == "") {
    text = `<center>There are no results for "${searchbarValue}"</center>`;
  }

  contentContainer.innerHTML =
    `<center title="Go back" id='search-results-banner' onclick='goBack()'><svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4a20d5"><path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z"/></svg>Search Results</center>` +
    text;
  console.log(text);
  const searchResultsBanner = document.getElementById(
    "search-results-banner"
  ).style;
  searchResultsBanner.width = "100px";
  searchResultsBanner.textAlign = "center";
  searchResultsBanner.width = "100%";
  searchResultsBanner.padding = "10px";
  searchResultsBanner.marginBottom = "5px";
}

// mobile search

function searchM(event, fromForm) {
  searchbar.value = searchbarM.value;

  if (fromForm == true) {
    event.preventDefault();
  }

  document.getElementById("up").scrollIntoView();

  if (document.getElementById("sidebar").classList.contains("open")) {
    toggleMobileMenu(document.getElementById("sidebar"));
  }

  searchbarValue = document.getElementById("searchbarM").value;
  searchbarM.blur();
  window.location.hash = "#search";

  if (searchbarValue == "") {
    contentContainer.innerHTML = contentContainerHtml;
    return;
  }

  const result = keywords.filter((word) => {
    return word.includes(searchbarValue.toLowerCase()) == true;
  });

  // const result = stuff.filter((word) => {
  //   return word.includes(searchbarValue.toLowerCase()) == true;
  // });

  console.log(result);

  let text = "";
  contentContainer.innerHTML = contentContainerHtml;

  for (let i = 0; i < result.length; i++) {
    var resultI = result[i];
    var indexOfResultIinKeywords = keywords.indexOf(resultI.toLowerCase());
    var idOfResultI = stuff[indexOfResultIinKeywords];
    var elementOfResultI = document.getElementById(idOfResultI);
    var codeOfResultI = elementOfResultI.innerHTML;
    console.log(idOfResultI);
    console.log(stuff[keywords.indexOf(result[i].toLowerCase())]);
    text += codeOfResultI;
    // text += document.getElementById(stuff[keywords.indexOf(result[i].toLowerCase())]).innerHTML;
    // text += document.getElementById(result[i].toLowerCase()).innerHTML;
  }

  if (text == "") {
    text = `<center>There are no results for "${searchbarValue}"</center>`;
  }

  contentContainer.innerHTML =
    `<center title="Go back" id='search-results-banner' onclick='goBack()'><svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4a20d5"><path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z"/></svg>Search Results</center>` +
    text;
  console.log(text);
  const searchResultsBanner = document.getElementById(
    "search-results-banner"
  ).style;
  searchResultsBanner.width = "100px";
  searchResultsBanner.textAlign = "center";
  searchResultsBanner.width = "100%";
  searchResultsBanner.padding = "10px";
  searchResultsBanner.marginBottom = "5px";
}
