/**
 * Created by session2 on 9/25/15.
 */
var slaying = confirm("Are you ready for a dragon fight?");
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
while (slaying) {
    if (youHit) {
        confirm("You hit the dragon");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
            console.log("You KILLED HIM");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        confirm("You DIED");
        var dead = true;
        slaying = false;
    }
}

if(!dead) {
    slaying = confirm("Are you ready for Wave 2??");
    youHit = Math.floor(Math.random() * 2);
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    totalDamage = 0;
    while (slaying) {
        if (youHit) {
            confirm("You hit the Ogre");
            totalDamage += damageThisRound;

            if (totalDamage >= 4) {
                confirm("You Defeated the Ogre");
                slaying = false;
            }
            else {
                youHit = Math.floor(Math.random() * 2);
            }
        } else {
            console.log("You DIED");
            slaying = false;
        }
    }
}
var sduglk = prompt("ready for wave 3??????");
switch(sduglk){
    case'yes':
        confirm("420 mlg Knights Fo' DayZZZZ");
        break;
    case'no':
        confirm("Ehhhhh... scrub");
        break;
       
    default:
        confirm("Are you ok?"); 
        break;
}