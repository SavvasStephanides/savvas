document.querySelector("#username-input").addEventListener("keyup", (e) => {
    setQuery()
});

document.querySelector("#include-quote-tweets").addEventListener("change", (e) => {
    setQuery()
})

function setQuery(){
    let username = document.querySelector("#username-input").value
    username = username.replace("@", "")
    
    let includeQuoteTweets = document.querySelector("#include-quote-tweets").checked            

    document.querySelector("#q").value = "@" + username + (includeQuoteTweets ? " OR twitter.com/" + username : "") + " -from:" + username
}