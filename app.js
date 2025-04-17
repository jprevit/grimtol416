console.log('howdy 🤠');

// hitpoints, name, attack power, reward

// let bobHitPoints = 4
// let bobName = 'Bob'
// let bobAttackPower = 2
// let bobReward = 5

let monster = {
    name: 'Bob',
    hitPoints: 4,
    attackPower: 2,
    reward: 5,
    picture: 'assets/Monsters/Goblin.png'
}

let monsterList = [
    {
        name: 'George',
        hitPoints: 3,
        attackPower: 5,
        reward: 10,
        picture: 'assets/Monsters/AnimatedArmor.png'
    },
    {
        name: 'Vision',
        hitPoints: 20,
        attackPower: 5,
        reward: 100,
        picture: 'assets/Monsters/Beholder.png'
    },
    {
        name: 'Dungeon Master',
        hitPoints: 15,
        attackPower: 10,
        reward: 150,
        picture: 'assets/Monsters/DarkWizard.png'
    },
    {
        name: 'Skrig',
        hitPoints: 3,
        attackPower: 1,
        reward: 2,
        picture: 'assets/Monsters/Khobold.png'
    },
    {
        name: 'Jerry',
        hitPoints: 6,
        attackPower: 6,
        reward: 6,
        picture: 'assets/Monsters/Orc.png'
    },
    {
        name: 'Grey',
        hitPoints: 5,
        attackPower: 3,
        reward: 10,
        picture: 'assets/Monsters/Shade.png'
    },
    {
        name: 'Nemesis',
        hitPoints: 10,
        attackPower: 8,
        reward: 50,
        picture: 'assets/Monsters/Skeleton.png'
    },
    {
        name: 'Blob',
        hitPoints: 1,
        attackPower: 1,
        reward: 1,
        picture: 'assets/Monsters/Slime.png'
    }
]

function squishMonster() {
    monster.hitPoints -= 1
    console.log(`Bob has ${monster.hitPoints} health remaining.`);
    drawMonster()
}

function drawMonster() {
    let monsterNameElm = document.getElementById('monster-name')
    let monsterHPElm = document.getElementById('monster-hit-points')
    let monsterGoldElm = document.getElementById('monster-reward')

    monsterNameElm.innerText = monster.name
    monsterHPElm.innerText = `${monster.hitPoints}`
    monsterGoldElm.innerText = `${monster.reward}`
}

drawMonster()