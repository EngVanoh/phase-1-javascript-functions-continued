function saturdayFun (venture ="roller-skate") {
    return `This Saturday, I want to ${venture}!`;
}

function mondayWork(deed = "go to the office" ) {
    return `This Monday, I will ${deed}.`;
}

function wrapAdjective(term= "*") {
    return function (adjs= "special") {
        return `You are ${term}${adjs}${term}!`
    }
}


