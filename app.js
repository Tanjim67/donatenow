const sub = document.querySelector('.sub')

sub.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('.sub').classList.add('sub2');
})

const subscribe = document.querySelector('#subscribe')
const nameInput = document.querySelector('#formname')
const emailInput = document.querySelector('#formemail')

subscribe.addEventListener('submit', onSubmit)

function onSubmit() {
    e.preventDefault();
    alert('as')
    console.log(nameInput.value);

}
