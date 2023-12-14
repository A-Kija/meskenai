console.log('Welcome to milk shop!');

class PirkiniuKrepselis {
    constructor() {
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        if (this.turinys.has('sureliai')) {
            this.turinys.set('sureliai', this.turinys.get('sureliai') + kiekis);
        } else {
            this.turinys.set('sureliai', kiekis);
        }
    }

    idetiPieno(kiekis) {
        if (this.turinys.has('pienas')) {
            this.turinys.set('pienas', this.turinys.get('pienas') + kiekis);
        } else {
            this.turinys.set('pienas', kiekis);
        }
    }

    idetiDuonos(kiekis) {
        if (this.turinys.has('duona')) {
            this.turinys.set('duona', this.turinys.get('duona') + kiekis);
        } else {
            this.turinys.set('duona', kiekis);
        }
    }

    krepselioTurinys() {
        console.log('Krepselio turinys:');
        for (const produktas of this.turinys) {
            console.log(`${produktas[0]}: ${produktas[1]}`);
        }
    }
}

const krepselis = new PirkiniuKrepselis();

krepselis.idetiSureli(2);
krepselis.idetiPieno(1);
krepselis.idetiDuonos(1);
krepselis.idetiPieno(3);

krepselis.krepselioTurinys();
