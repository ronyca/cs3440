var mydog = new Dog("Ruby", "Border Collie", 2017, 8, 18);
document.getElementById("dogForm").addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var breed = document.getElementById("breed").value;
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var trick = document.getElementById("tricks").value;

    mydog = new Dog(name, breed, year, month, day);
    document.getElementById("mydogName").textContent = mydog.name;
    document.getElementById("mydogBreed").textContent = mydog.breed;
    document.getElementById("mydogBirthday").textContent = mydog.birthdate;
    document.getElementById("mydogTrick").textContent = mydog[trick]();
});
document.getElementById("tricks").addEventListener('change', function(e) {
    document.getElementById("mydogTrick").textContent = mydog[e.target.value]();
});