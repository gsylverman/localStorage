//My personal approach


const btn = document.getElementsByClassName("button u-full-width button-primary")[0];
const tweet = document.getElementById("tweet");
const tweetLIST = document.getElementById("tweet-list");
const localS = localStorage.getItem("tweets");
const remove = document.getElementById("remove");
let tweets;
if (localS === null) {
    tweets = [];
} else {
    tweets = JSON.parse(localS);
}


btn.addEventListener("click", function () {
    tweets.push(tweet.value);
    localStorage.setItem("tweets", JSON.stringify(tweets));
    tweet.value = "";
    render(creareTweets(tweets))
});


function creareTweets(p) {
    let lista = "";
    for (let i = 0; i < p.length; i++) {
        lista += "<p>" + p[i] + "<span class='remove'>X<span></p>";

    }
    return lista;
}

function render(p) {
    tweetLIST.innerHTML = p;

}
render(creareTweets(tweets));


tweetLIST.addEventListener("click", function (e) {
    if (e.target.className === "remove") {
        e.stopPropagation();
        let index = e.target.parentElement.innerText.length - 1;
        let index1 = tweets[index - 1];

        let indx = tweets.indexOf(index1);
        tweets.splice(indx, 1);
        localStorage.setItem("tweets", JSON.stringify(tweets));
        render(creareTweets(tweets));
    }
})











