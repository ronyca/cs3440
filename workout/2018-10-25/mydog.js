function init() {
    var myDog = new Dog('Ruby', 'Border Collie', 2017, 8, 18);
    document.getElementById('name').textContent = myDog.name + ' ' + myDog.birthdate;
    document.getElementById('breed').textContent = myDog.name + ' ' + myDog.birthdate;
    document.getElementById('birthday').textContent = myDog.name; + ' ' + myDog.birthdate
    document.getElementById('tricks').textContent = myDog.name + ' ' + myDog.birthdate;
    var tricks = myDog.sit() + ', ' + myDog.fetch() + ', ' + myDog.shake() + ', ' + myDog.down();
    document.getElementsByTagName('tr')[2].getElementsByTagName('td')[1].textContent = tricks;
}
init();