class notes {

    constructor(note) {
        this.note = note;
    }


    get fullNotes() {
        return this.note;
    }

    displayNotes() {
        document.write(this.note);
    }

    logNotes() {
        console.log(`${this.note}`);
    }
}

let global = window || global;
global.notes = notes;