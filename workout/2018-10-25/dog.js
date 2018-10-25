function Dog(name, breed, year, month, day) {
    this.name = new String(name);
    this.breed = new String(breed);
    this.birthdate = new Date(year, month, day);
    this.setBirthdate = function(year, month, day) {
        this.birthdate = new Date(year, month, day);
    }
    this.sit = function() {
        return this.name + " is sitting";
    }
    this.fetch = function() {
        return this.name + " is fetching";
    }
    this.shake = function() {
        return this.name + " is shaking hands";
    }
    this.down = function () {
        return this.name + " is lying down";
    }
}