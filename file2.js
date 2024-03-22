let difficolta = prompt('Scegli una difficoltà tra FACILE, MEDIO e DIFFICILE')
let numeroUtente = undefined
let numeroVincente = undefined
let tentativi = undefined
let haiVinto = false
let messaggio = "inserisci un numero"

switch (difficolta) {
    case "facile":
        tentativi = 8
        numeroVincente = Math.floor(Math.random() * 10)
        break;
    case "medio":
        tentativi = 8
        numeroVincente = Math.floor(Math.random() * 40)
        break;
    case "difficile":
        tentativi = 5
        numeroVincente = Math.floor(Math.random() * 60)
        break;
        default: alert("Non hai inserito un valore corretto")
}

while (tentativi > 0 && !haiVinto) {
    
    numeroUtente = parseInt(prompt(messaggio))
    if(numeroUtente > numeroVincente) {
        alert ("inserisci un numero più basso, hai ancora " + tentativi + " possibilità")
    } else if (numeroUtente < numeroVincente) {
        alert ("inserisci un numero più alto, hai ancora " + tentativi + " possibilità")
        
    }  else if (numeroUtente === numeroVincente) {
        haiVinto = true
        break;
    }  
    tentativi --
}


if(haiVinto){
    alert("Minchia che botta di culo hai vinto !!")
} else if (tentativi === 0) {
    alert("Hai perso il numero vincente era " + numeroVincente + " !!")
}

