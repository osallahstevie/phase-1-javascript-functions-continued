function saturdayFun(satadayActivity = "roller-skate"){
    return `This Saturday, I want to ${satadayActivity}!`
}

const mondayWork = function(office = 'go to the office'){
    return `This Monday, I will ${office}.`;
    
}

function wrapAdjective(result = '*'){

    return function(george = 'special'){

        return `You are ${result}${george}${result}!`

    }
}
const promptFun = wrapAdjective("!!!");
