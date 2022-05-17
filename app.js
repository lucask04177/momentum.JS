const player = {
    name:"Lucas",
    points: 10,
    fat: true,
}

console.log(player);
console.log(player.name);

player.fat=false;
console.log(player.fat);
player.lastname = "kang";
console.log(player);
player.points = player.points + 15;
console.log(player.points);