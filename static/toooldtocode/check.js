function showResult(ageInput){
    console.log(`'${ageInput}'`)


    if(isNaN(ageInput) || ageInput==""){
        message = "Yes, even for ages that aren't numbers, you can still code!"
    }

    else if(ageInput < 0){
        message = "Yes, you can learn to code even before you are born."
    }

    else if(ageInput < 6){
        message = `If at age ${ageInput} you can read and write, you can code.`
    }
    else if(ageInput >= 100){
        message = `No, even at age ${ageInput}, you're not too old to learn to code! Enjoy!`
    }
    else{
        message = `No, at age ${ageInput}, you're not too old to learn to code! Enjoy!`
    }

    

    document.querySelector("#result").innerHTML = message
}