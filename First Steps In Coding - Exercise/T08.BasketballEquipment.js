function basketballEquipment(input) {

    let sneakers = Number(input[0]) * 0.40;
    sneakers = Number(input[0]) - sneakers;

    let team = sneakers * 0.20;
    team = sneakers - team;

    let basketball = team / 4;
   // basketball = team - basketball;

    let accessories = basketball / 5;
    //accessories = basketball-accessories;

    let totalprice = Number(input[0]) + sneakers + team + basketball + accessories;

    console.log(totalprice);

}
basketballEquipment(["550"]);