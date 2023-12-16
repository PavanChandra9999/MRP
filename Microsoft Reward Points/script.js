
document.getElementById("tabs").addEventListener("click", function() {
    var stars = document.querySelector(".stars");
    var selectedtabs = document.getElementById("stars").value;

});
function tabs() {
    var counter = 0;
    var arr=['facebook', 'instagram', 'IIT', 'virat kohli', 'how to cook food', 'biryani', 'chicken', 'rasagulla','laddo', 'cooking',
             'holiday', 'earn money', 'india', 'remote jobs', 'jobs', 'work from home', 'qaw','qqr', 'bbc', 'cod',
             'pubg', 'bgmi', 'free fire', 'million', 'office chair', 'abc', 'def', 'ghi', 'jkl', 'momo'];

    var timer = setInterval(function() {
      if (counter < 2) {
        window.open('https://www.bing.com/search?q='+ arr[counter]);
        counter++;
      } else {
        clearInterval(timer);
      }
    }, 4000);

    setTimeout(function() {
        document.querySelector(".success-message").innerHTML = "Stars printed successfully!";
        document.querySelector(".success-message").style.display = "block";
      }, counter * 4000);
}
var button = document.getElementById("button");
button.style.backgroundColor = "blue";

button.addEventListener("click", function() {
    his.style.backgroundColor = "silver";
    this.disabled = this.disabled || true;
});


