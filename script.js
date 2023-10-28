function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
    signInfo: ['moon', 'meteor', 'black hole', 'star'],
    fortuneOutput: ['good luck', 'terrible luck', 'bad luck', 'great luck'],
    advice: ['not read this', 'eat better', 'play outside more', 'trust your family'],
}

let personalWisdom = []


for (let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

    switch(prop) {
        case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'fortuneOutput':
            personalWisdom.push(`You are having "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'advice':
            personalWisdom.push(`You should "${collectiveWisdom[prop][optionIdx]}".`)
            break
        default:
            personalWisdom.push(`There is not enough info.`)
    }
}

function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom);