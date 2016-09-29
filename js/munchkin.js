// Get Element By ID
//TODO fix function
function gtElBId(a){
  return document.getElementById(a);
}
//GetElementById Than write to page
function wrteTPg(a,b){
  return gtElBId(a).innerHTML=b;
}

gtElBId("body").className = "js"; // js is enabled!
function ccl() {
    var chp = parseFloat(gtElBId('cl').value); //get current character level
    if (chp <= 0) {
        gtElBId('clm').style.display = 'block';
        wrteTPg('clmsg', 'You\'ve gone and died.  To your buddies go all yer loots. Rise from the dead and start again.');
        gtElBId('cl').value=1; //update character level on page
        ccp(); //update combat points
    } else if (chp == 10 ) {
        gtElBId('clm').style.display = 'block';
        wrteTPg('clmsg', 'You\'ve won!');
    /*} else if (chp > 10) {
        gtElBId('clm').style.display = 'block';
        wrteTPg('clmsg', 'Wut? Not possible, mate.'); */
    }
}
function ccp() {
    ccl();
    var x = parseFloat(gtElBId('cl').value);
    var y = parseFloat(gtElBId('ib').value);
    var cp = x + y; //add character level + item bonus
    gtElBId('cp').value=cp; //adjust page value
    var ml = gtElBId('ml').value;
    if (ml > 0) {
        hmtbm();
    }
}
//Calculate points needed to beat monster & update message based on results
function hmtbm() {
    gtElBId('fm').style.display = 'block';
    var x = parseFloat(gtElBId('ml').value); //get current monster level
    var y = parseFloat(gtElBId('cp').value); //get combat points
    var points = (x - y);
    //display monster message based on points
    if (points === 0) {
        wrteTPg('status', 'tied with you');
        gtElBId('pts').style.display = 'none';
        wrteTPg('mm', ' - Roll a 5 or 6 run away.');

    } else if (points > 0) {
      wrteTPg('status', 'winning by');
        gtElBId('pts').style.display = 'inline';

    } else if (points < 0) {
        wrteTPg('status', 'loosing by');
        gtElBId('pts').style.display = 'inline';
        //wrteTPg('mm', '- Roll a 5 or 6 to run away.');
        points =- points;
    }
    wrteTPg('pts', points);  //update points to beat monster
}
//dice roller
function dr() {
    gtElBId('hi').style.display = 'none';
    gtElBId('dm').style.display = 'block';
    var rand = 1 + Math.floor(Math.random() * 6);
    gtElBId('dres').value=rand;
    if (rand >= 5) {
        wrteTPg('dmsg','You\'ve out run the monster!');
    } else {
        wrteTPg('dmsg','Bad stuff happens.  Better luck next time');
    }
}
function ng() {
    rk();
    gtElBId('clm').style.display = 'none';
    gtElBId('cl').value=1; //update character level on page
    gtElBId('ib').value=0; //update item bonus on page
    ccp(); //update combat points
    rk();
}
function rk() {
    gtElBId('fm').style.display = 'none';
    gtElBId('ml').value=0; //update points to beat monster
    wrteTPg('status','waiting for a fight!');
    gtElBId('pts').style.display = 'none';
    wrteTPg('mm','');
}
