
// NOT


// crea bottone 
const PlayButton = document.getElementById('play_btn');

// quando l'utente clicca il bottone allora

PlayButton.addEventListener('click', function() {

    // contenitore della griglia
    const Grid = document.getElementById('grid_container');
    console.log('Grid', Grid, typeof Grid);

    for(let i = 1; i <=100; i++) {

        const NewCell = document.createElement('div');
        NewCell.classList.add("grid_container_cells");
        console.log('Nuova Cella', NewCell, typeof NewCell);
        NewCell.innerHTML =  i;
        const NewCellNum = parseInt(NewCell.innerHTML);

        // aggiungo le nuova celle al contenitore della griglia
        Grid.append(NewCell);
        
        NewCell.addEventListener('click', function() {
            NewCell.classList.add("cells_clicked");
            console.log(NewCell.innerHTML);


            if(Bombs.includes(NewCellNum)) {
                NewCell.classList.add("bombs_cell")
            }
        })
    }

    const Bombs = [];

    // genero numeri casuali per le bombe
    function GenerateRandomNum (min , max) {
        return Math.floor((Math.random() * 100) + 1);
    }

    // le bombe devono essere 16
    for( let i = 0; i <=16; i++) {
        const RandomNum = GenerateRandomNum(1, 100);
        console.log(RandomNum);
        
        // per non mettere la bomba nella stessa casella
        if(!Bombs.includes(RandomNum)) {
            Bombs.push(RandomNum);
        }
    }
})
 


