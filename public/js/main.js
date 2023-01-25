
let atk1 = document.getElementById('atk1');
let atk2 = document.getElementById('atk2');
let atk3 = document.getElementById('atk3');
let atk4 = document.getElementById('atk4');


function playMusic() {
    let music = document.getElementById('background-music');
    music.play();
}


let btgo2 = document.getElementById('btgo2')
btgo2.addEventListener('click',()=>{
    dtotal.setAttribute('class','revenir')
    playMusic()

})
let arca = document.getElementById('arca');
let btgo = document.getElementById('btgo')
let dtotal = document.getElementById('dtotal')
btgo.addEventListener('click',()=>{
    arca.setAttribute('src', './public/img/arcanin.png');
    dtotal.setAttribute('class','revenir');
    playMusic();
})



let clickAtk = new Audio();
clickAtk.src = "./public/img/DoubleKickSingle.wav";

let action = document.getElementById('action')

atk1.addEventListener('click', () => {
    clickAtk.play();
    action.innerHTML = 'Arcanin lance Boute feu : Léviator perd 40 HP !'
    let hpEnnemy = document.getElementById("hpEnnemy").textContent;
    hpEnnemy -= 20;
    
    document.getElementById("hpEnnemy").textContent = hpEnnemy;
    let barreEnnemy = document.getElementById("hpBar").value;
    barreEnnemy -= 30;
    document.getElementById("hpBar").value = barreEnnemy;
    if (hpEnnemy <= 0) {
        alert('Léviator est mort !')
    } else {
        setTimeout(() =>{
            leviatorAttack(40)
        }, 2000);
    }
})


atk2.addEventListener('click', () => {
    clickAtk.play();
    action.innerHTML = 'Arcanin lance Crocs Feu : Léviator perd 20 HP !'
    hpEnnemy = document.getElementById("hpEnnemy").textContent;
    hpEnnemy -= 30;
    document.getElementById("hpEnnemy").textContent = hpEnnemy;
    barreEnnemy = document.getElementById("hpBar").value;
    barreEnnemy -= 30;
    document.getElementById("hpBar").value = barreEnnemy;
    if (hpEnnemy <= 0) {
        alert('Léviator est mort !')

    } else {
        setTimeout(() =>{
            leviatorAttack2(20)
        }, 2000);
    }
})
atk3.addEventListener('click', () => {
    clickAtk.play();

    action.innerHTML = 'Arcanin lance Rouee Feu !'
    hpEnnemy = document.getElementById("hpEnnemy").textContent;
    hpEnnemy -= 20;
    document.getElementById("hpEnnemy").textContent = hpEnnemy;
    barreEnnemy = document.getElementById("hpBar").value;
    barreEnnemy -= 30;
    document.getElementById("hpBar").value = barreEnnemy;
    if (hpEnnemy <= 0) {
        alert('Léviator est mort !')

    } else {
        setTimeout(() =>{
            leviatorAttack3(50)
        }, 2000);
    }
})

atk4.addEventListener('click', () => {
    clickAtk.play();
    action.innerHTML = 'Arcanin lance Hurlement !'
    hpEnnemy = document.getElementById("hpEnnemy").textContent;
    hpEnnemy -= 20;
    document.getElementById("hpEnnemy").textContent = hpEnnemy;
    barreEnnemy = document.getElementById("hpBar").value;
    barreEnnemy -= 30;
    document.getElementById("hpBar").value = barreEnnemy;
    if (hpEnnemy <= 0) {
        alert('Léviator est mort !')

    } else {
        setTimeout(() =>{
            leviatorAttack4(12)
        }, 2000);
    }
})


let clickSound = new Audio();
clickSound.src = "./public/img/atklevi.mp3";

function leviatorAttack(damage) {
    clickSound.play();
    action.innerHTML = 'Léviator lance Siphon : Arcanin perd 40 HP !'
    let hpAlly = document.getElementById('pvAlly').textContent;
    hpAlly -= damage;
    document.getElementById('pvAlly').textContent = hpAlly;
    let barreAlly = document.getElementById("hpBarAlly").value;

    barreAlly -= damage;
    document.getElementById("hpBarAlly").value = barreAlly;
    if (hpAlly <= 0) {
        alert("Game Over ! Léviator est mort");
    }
}
function leviatorAttack2(damage) {
    clickSound.play();
    action.innerHTML = 'Léviator lance Hydrocanon : Arcanin perd 20 HP !'
    let hpAlly = document.getElementById('pvAlly').textContent;
    hpAlly -= damage;
    document.getElementById('pvAlly').textContent = hpAlly;
    let barreAlly = document.getElementById("hpBarAlly").value;

    barreAlly -= damage;
    document.getElementById("hpBarAlly").value = barreAlly;
    if (hpAlly <= 0) {
        alert("Game Over ! Léviator est mort");
    }
}
function leviatorAttack3(damage) {
    clickSound.play();
    action.innerHTML = 'Léviator lance Surf : Arcanin perd 50 HP !'
    let hpAlly = document.getElementById('pvAlly').textContent;
    hpAlly -= damage;
    document.getElementById('pvAlly').textContent = hpAlly;
    let barreAlly = document.getElementById("hpBarAlly").value;

    barreAlly -= damage;
    document.getElementById("hpBarAlly").value = barreAlly;
    if (hpAlly <= 0) {
        alert("Game Over ! Léviator est mort");
    }
}
function leviatorAttack4(damage) {
    clickSound.play();
    action.innerHTML = 'Léviator lance Cascade : Arcanin perd 12 HP !'
    let hpAlly = document.getElementById('pvAlly').textContent;
    hpAlly -= damage;
    document.getElementById('pvAlly').textContent = hpAlly;
    let barreAlly = document.getElementById("hpBarAlly").value;

    barreAlly -= damage;
    document.getElementById("hpBarAlly").value = barreAlly;
    if (hpAlly <= 0) {
        alert("Game Over ! Léviator est mort");
    }
}

