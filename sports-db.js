




const loadFormerTeams = () => {

    //load data
    fetch('https://www.thesportsdb.com/api/v1/json/2/lookupformerteams.php?id=34147178')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => DisplayFormerTeams(data.formerteams))
        // Handle Error
        .catch(error => console.log(error));

}

loadFormerTeams()
const DisplayFormerTeams = info => {
    // console.log(info)
    const teams = document.getElementById('teams');
    teams.textContent = '';
    if (teams.length == 0) {
        alert('Sorry, result not found.')
    }
    //  info.forEach(information => {   // Here, forEach loop is commentout for display only one players Id.
    // console.log(info)
    const div = document.createElement('div');

    div.innerHTML = `
   <h3>Please, search using this player Id</h3>
            <h5>Player Id = ${info[0].idPlayer}</h5 > 
    
            `

    teams.appendChild(div)
    //  });

}

//        ============================================== 
//                 Search Team Part
// =======================================

const playerSearchById = () => {
    const search = document.getElementById('searchPlayersId');
    const value = search.value
    search.value = ''
    if (value == '') {
        alert('Please write something to display.')
    }

    else {
        const url = `https://www.thesportsdb.com/api/v1/json/2/lookupformerteams.php?id=${value}` ///  Call Dynamic API, Load Dinamic Data Search.
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => displayFormerPlayerTeam(data.formerteams))
    }


}

//     ===============================================
//                 Display Search Result
//             =======================================================

const displayFormerPlayerTeam = data => {
    const card = document.getElementById('card')
    // console.log(data)
    data.forEach(info => {   // Used forEach Loop.
        // console.log(info)
        const div = document.createElement('div')
        div.classList.add('col')

        // Dynamic Html(Bootstrap Card) Created 
        div.innerHTML = `

            <div onclick="displayDetail(${info.idPlayer})" class="card text-center ">
                <img src="${info.strTeamBadge}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${info.strFormerTeam}</h5>
                        <h5 class="">${info.idFormerTeam}</h5>
                    </div>
            </div>`
        card.appendChild(div)
    })
}

// ================= Calling using Arrow Function=================

const displayDetail = data => {
    // console.log(data)

    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupformerteams.php?id=${data}`  ///  Call Dynamic API, Load Dinamically Data Search.
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displaySinglePlayersInfo(data.formerteams))
}

//  ==========================================================
//                 Display Single Team clientInformation
//           ===============================================================

const displaySinglePlayersInfo = data => {
    console.log(data)
    const detailInfo = document.getElementById('detail-info');
    const div = document.createElement('div');
    div.classList.add('col')

    // Dynamic Html(Bootstrap Card) Created 
    div.innerHTML = `

            <div class="card mx-auto w-25 mb-5" style="width: 18rem;">
                <img src="${data[0].strTeamBadge}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[0].strFormerTeam}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>

            `
    detailInfo.appendChild(div)
}











