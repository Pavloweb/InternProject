let pass = document.getElementById('password');
let progress = document.querySelector('.form-user_checkpass');
pass.addEventListener('keyup', checkPassword);
console.dir(progress);
function checkPassword() {
    let [...progressChild] = progress.children;
    console.log(pass.value.length);
    if(pass.value.length <= 8) {
        progress.style.display = 'flex';
        progressChild.forEach(el => {
            el.style.background = '#EBEFF3';
        });
        progressChild[0].style.background = '#FF6359';
    } else if(pass.value.length >= 8 && pass.value.length <= 12) {
        progress.style.display = 'flex';
        progressChild.forEach(el => {
            el.style.background = '#EBEFF3';
        }); 
        progressChild[0].style.background = '#FFB966';
        progressChild[1].style.background = '#FFB966';
    } else if (pass.value.length > 12) {
        progress.style.display = 'flex';
        progressChild.forEach(el => {
            el.style.background = '#38ECAC';
        });
    } else if(pass.value.length == '0') {
        progress.style.display = 'none';
        alert('dfads');
    }
}
