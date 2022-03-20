const fetchContent = function () {
  // make a request object
  let xhrRequest = new XMLHttpRequest();

  // initialize the request
  // it takes three arguments the third one is true for asynchronous its optional
  xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  xhrRequest.send();

  // for response
  xhrRequest.onload = function () {
    //console.log(xhrRequest.response);

    // parsing the response to json then everything easy peesy
    const response = JSON.parse(xhrRequest.response);
    console.log(response);
    document.querySelector(".image img").src = response.message;
  };
};

document.querySelector("#fetchBtn").addEventListener("click", fetchContent);

// making the http request using jquery AJAX

$("#seeList").on("click", printList);

function printList() {
  $.ajax({
    url: "https://dog.ceo/api/breeds/list/all",
    type: "get",
    success: function (data) {
      const allbreeds = data.message;
      //console.log(allbreeds)

      for (const obj in allbreeds) {
        let dogBreed = obj;

        for (const val of allbreeds[obj]) {
          if (allbreeds[obj].length == 1) {
            const li = $("<li></li>");
            dogBreed = `${obj}  ${val}`;
            li.text(dogBreed);
            $(li).appendTo(".list ul");
          } else {
            const ul = $("<ul></ul>");
            ul.text(obj);
            const li = $("<li></li>");
            li.text();
          }
        }
      }
    },
  });
}

$.get("https://dog.ceo/api/breed/hound/images/random", function (data) {
  $(".image2 img").attr("src", data.message);
});
