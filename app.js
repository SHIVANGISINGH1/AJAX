const fetchContent = function() {

    // make a request object
    let xhrRequest =  new XMLHttpRequest();

    // initialize the request
    // it takes three arguments the third one is true for asynchronous its optional 
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send();

    // for response
    xhrRequest.onload = function() {
        //console.log(xhrRequest.response);

        // parsing the response to json then everything easy peesy
        const response = JSON.parse(xhrRequest.response);
        console.log(response);
        document.querySelector('.image img').src = response.message;
    }
}


document.querySelector('#fetchBtn').addEventListener('click', fetchContent);