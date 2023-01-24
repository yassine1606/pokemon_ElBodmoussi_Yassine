
let atk1 = document.getElementById('atk1');
let atk2 = document.getElementById('atk2');
let atk3 = document.getElementById('atk3');
let atk4 = document.getElementById('atk4');





let action = document.getElementById('action')

atk1.addEventListener('click', () => {
    action.innerHTML = 'Arcanin lance Boute feu : Léviator perd 20 HP ! <br> <br>  Léviator lance Ouragan : Arcanin perd 40 HP !'
    let hpEnnemy = document.getElementById("hpEnnemy").textContent;
    hpEnnemy -= 20;
    document.getElementById("hpEnnemy").textContent = hpEnnemy;
    let barreEnnemy = document.getElementById("hpBar").value;
    barreEnnemy -= 30;
    document.getElementById("hpBar").value = barreEnnemy;
    if (hpEnnemy <= 0) {
        alert('Léviator est mort !')

    } else {
        leviatorAttack(40);
    }
})


atk2.addEventListener('click', () => {
    action.innerHTML = 'Arcanin lance Crocs Feu : Léviator perd 30 HP  ! <br> <br>  Léviator lance Siphon : Arcanin perd 20 HP !'
    hpEnnemy = document.getElementById("hpEnnemy").textContent;
    hpEnnemy -= 30;
    document.getElementById("hpEnnemy").textContent = hpEnnemy;
    barreEnnemy = document.getElementById("hpBar").value;
    barreEnnemy -= 30;
    document.getElementById("hpBar").value = barreEnnemy;
    if (hpEnnemy <= 0) {
        alert('Léviator est mort !')

    } else {
        leviatorAttack(20);
    }
})

atk3.addEventListener('click', () => {
    action.innerHTML = 'Arcanin lance Rouee Feu ! <br> <br>  Léviator lance Cascade !'
    hpEnnemy = document.getElementById("hpEnnemy").textContent;
    hpEnnemy -= 20;
    document.getElementById("hpEnnemy").textContent = hpEnnemy;
    barreEnnemy = document.getElementById("hpBar").value;
    barreEnnemy -= 30;
    document.getElementById("hpBar").value = barreEnnemy;
    if (hpEnnemy <= 0) {
        alert('Léviator est mort !')

    } else {
        leviatorAttack(20);
    }
})

atk4.addEventListener('click', () => {
    action.innerHTML = 'Arcanin lance Hurlement !'
})




function leviatorAttack(damage) {
    let hpAlly = document.getElementById('pvAlly');
    hpAlly -= damage;
    document.getElementById('pvAlly').value = hpAlly;
    let barreAlly = document.getElementById("hpBarAlly").value;
    barreAlly -= damage;
    document.getElementById("hpBarAlly").value = barreAlly;
    if (barreAlly <= 0) {
        alert("Game Over ! Arcanin est mort");
    }
}