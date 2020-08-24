let userNotes = sessionStorage.getItem('userNotes');
document.getElementById('submit').addEventListener('click', function() {
    console.log('hello')
    console.log(`${userNotes}`)

})
