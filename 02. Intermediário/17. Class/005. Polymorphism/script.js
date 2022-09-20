/*
    Polymorphism
*/

class League {

    constructor (team, position) {
        this.team = team
        this.position = position
    }

    whoLeague() {
        if (this.position < 1 || this.position > 20) {
            alert ('Error')
        } else if (this.position > 17) {
            this.league = 'Series B'
        } else if (this.position > 11) {
            this.league = 'Brazil Cup'
        } else if (this.position > 6) {
            this.league = 'Sul-American League'
        } else {
            this.league = 'Libertadores Cup'
        }
    }

    printLeague() {
        this.whoLeague()
        console.log (`The team ${this.team} finish in the ${this.position}º position and will play the ${this.league}`)
        console.log('------------------');
    }

}


class TeamBRA extends League {
    constructor (team, position) {
        super (team, position)
        this.country = 'Brazil'
    }

    printCountry() {
        console.log (`You lived in the ${this.country}`)
        super.printLeague()
    }
}


class TeamARG extends League {
    constructor (team, position) {
        super (team, position)
        this.country = 'Argentina'
    }

    printCountry() {
        console.log(`You lived in the ${this.country}`);
        super.printLeague()
    }
}


const league1 = new TeamBRA('Vasco da Gama', 1)
const team1 = new TeamBRA('Botafogo', 7)
const team2 = new TeamARG ('Racing', 4)

league1.printCountry()
team1.printCountry()
team2.printCountry()