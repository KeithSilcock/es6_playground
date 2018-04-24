
class Person{
    constructor(name){
        this.name = name;
    }
    sleep(hours){
        return `<h1>ZzzzZzzzzZzzzzz for ${hours} hours.</h1>`;
    }
    drink(beverage){
        return `<h1>I am drinking: ${beverage}. Please let me be.</h1>`
    }
    speak(message){
        return `<h1>${this.name} said: ${message}</h1>`
    }
}

class SuperPerson extends Person{
    constructor(name, heroName){
        super(name);
        this.heroName = heroName;
    }
    speak(message){
        return `<h1>${this.heroName} said: ${message}</h1>`
    }
    xRay(){
        return `${this.speak('I see London, I see France...')}`
    }
}

export default SuperPerson;