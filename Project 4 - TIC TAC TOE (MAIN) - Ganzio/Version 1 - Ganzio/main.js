let turno = 0;
let gameState = true;

function cambiaStatoMossa(event) { // event == click in questo caso, ma perchè??? perchè nell'html è specificato onclick
    console.log(event.target);
    let quadrato = event.target; // l'utente interagisce con il div(nodo) da cui origina un'evento

    let paragrafo = quadrato.children[0];
    if (paragrafo == undefined) return; // mossa non valida ??? non dovrebbe essere !par==undef?
    // if ( paragrafo == "X" || paragrafo == "O") return; 
    let segno;
    if(!gameState) return; // Fine match
    if (turno % 2 == 0) {
        segno = "X";
    }
    else {
        segno = "O"
    }
    if(paragrafo.innerText) return;
    paragrafo.innerText = segno;
    turno++;
    checkVittoria(); // check che si ripete ad ogni mossa
}

function checkVittoria() {
    let campo = document.querySelector("body");
    let righe = campo.children;
    // TODO: spararmi un sacco di console.log
    let quadrati_col1 = righe[0].children;
    let quadrati_col2 = righe[1].children;
    let quadrati_col3 = righe[2].children;

    let par_c1_1 = quadrati_col1[0].children[0].innerText;
    let par_c1_2 = quadrati_col1[1].children[0].innerText;
    let par_c1_3 = quadrati_col1[2].children[0].innerText;

    let par_c2_1 = quadrati_col2[0].children[0].innerText;
    let par_c2_2 = quadrati_col2[1].children[0].innerText;
    let par_c2_3 = quadrati_col2[2].children[0].innerText;

    let par_c3_1 = quadrati_col3[0].children[0].innerText;
    let par_c3_2 = quadrati_col3[1].children[0].innerText;
    let par_c3_3 = quadrati_col3[2].children[0].innerText;

    // console.log(par_c1_1, "X", par_c1_1 == "X");
    // console.log((par_c1_1 == "X" && par_c1_2 == "X" && par_c1_3 == "X" ))
    if (par_c1_1 == "X" && par_c1_2 == "X" && par_c1_3 == "X"  ||
        par_c2_1 == "X" && par_c2_2 == "X" && par_c2_3 == "X"  ||
        par_c3_1 == "X" && par_c3_2 == "X" && par_c3_3 == "X" ) {
        // VINCE
        console.log("VINCE X");
        gameState = false;

    }
    else if (par_c1_1 == "X" && par_c2_1 == "X" && par_c3_1 == "X"  ||
        par_c1_2 == "X" && par_c2_2 == "X" && par_c3_2 == "X"  ||
        par_c1_3 == "X" && par_c2_3 == "X" && par_c3_3 == "X" ) {
        // riga
        console.log("VINCE X");
        gameState = false;
    }
    else if (par_c1_1 == "X" && par_c2_2 == "X" && par_c3_3 == "X"  ||
        par_c1_3 == "X" && par_c2_2 == "X" && par_c3_1 == "X" ) {
        // diagonali
        console.log("VINCE X");
        gameState = false;
    }

    if (par_c1_1 == "O" && par_c1_2 == "O" && par_c1_3 == "O"  ||
        par_c2_1 == "O" && par_c2_2 == "O" && par_c2_3 == "O"  ||
        par_c3_1 == "O" && par_c3_2 == "O" && par_c3_3 == "O" ) {
        // VINCE
        console.log("VINCE O");
        gameState = false;

    }
    else if (par_c1_1 == "O" && par_c2_1 == "O" && par_c3_1 == "O"  ||
        par_c1_2 == "O" && par_c2_2 == "O" && par_c3_2 == "O"  ||
        par_c1_3 == "O" && par_c2_3 == "O" && par_c3_3 == "O" ) {
        // VINCE
        console.log("VINCE O");
        gameState = false;
    }
    else if (par_c1_1 == "O" && par_c2_2 == "O" && par_c3_3 == "O"  ||
        par_c1_3 == "O" && par_c2_2 == "O" && par_c3_1 == "O" ) {
        // diagonali
        console.log("VINCE O");
        gameState = false;
    }

}

// TODO: aggiungere tasto rematch