
let email = document.getElementById('email');
email.onmouseenter = function() {
    email.innerHTML = "isaakim91@gmail.com";
    email.style.backgroundColor = '#f7f2ee';
    email.style.color = '#4d4c4a';
    email.style.border = 'solid 1px #4d4c4a';
}

email.onmouseleave = () => {
    email.innerHTML = 'email'
    email.style.backgroundColor = '#4d4c4a';
    email.style.color = '#f7f3ee';
    email.style.border = '';
}
// linkedIn button
let linkedin = document.getElementById('linkedin');
linkedin.onmouseenter = function() {
    linkedin.innerHTML = "linkedin link:";
    linkedin.style.backgroundColor = '#f7f2ee';
    linkedin.style.color = '#4d4c4a';
    linkedin.style.border = 'solid 1px #4d4c4a';
}
linkedin.onmouseleave = () => {
    linkedin.innerHTML = 'linkedin'
    linkedin.style.backgroundColor = '#4d4c4a';
    linkedin.style.color = '#f7f3ee';
    linkedin.style.border = '';
}

//gitHub button
let github = document.getElementById('github');
github.onmouseenter = function() {
    github.innerHTML = "github link:";
    github.style.backgroundColor = '#f7f2ee';
    github.style.color = '#4d4c4a';
    github.style.border = 'solid 1px #4d4c4a';
}
github.onmouseleave = () => {
    github.innerHTML = 'github'
    github.style.backgroundColor = '#4d4c4a';
    github.style.color = '#f7f3ee';
    github.style.border = '';
}


//instagram button
let instagram = document.getElementById('instagram');
instagram.onmouseenter = function() {
    instagram.innerHTML = "instagram link:";
    instagram.style.backgroundColor = '#f7f2ee';
    instagram.style.color = '#4d4c4a';
    instagram.style.border = 'solid 1px #4d4c4a';
}

instagram.onmouseleave = () => {
    instagram.innerHTML = 'instagram'
    instagram.style.backgroundColor = '#4d4c4a';
    instagram.style.color = '#f7f3ee';
    instagram.style.border = '';
}