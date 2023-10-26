//Conditions Exercise
/*
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF. 0-49
1. Display the grade information in #info using the following structure based on the information you receive with prompt
2. Check if the data entered by the user is within the desired range
3. Display a sad face icon in FF information, and a smiley face in the others :)
4. The FF class information should be text-danger, and the others should be text-primary
*/

// icons from Boostrap website 
const Smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
//</svg>`;

const Sad = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>`;

let info = document.querySelector("#greeting");
let examGrade = prompt("Enter Your Grade: ");
let iconGrade = Smile

if (examGrade >= 0 && examGrade<= 100) {

    info.classList.add('text-primary');
    if (examGrade >= 90) {
        iconGrade += " AA" 
    } else if (examGrade >= 85) {
        iconGrade += " BA"
    }else if (examGrade >= 80) {
        iconGrade += " BB" 
    }else if (examGrade >= 75) {
        iconGrade += " CB" 
    }else if (examGrade >= 70) {
        iconGrade += " CC" 
    }else if (examGrade >= 65) {
        iconGrade += " DC" 
    }else if (examGrade >= 60) {
        iconGrade += " DD" 
    }else if (examGrade >= 50) {
        iconGrade += " FD" 

    }else if (examGrade < 50) {
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
        iconGrade = `${Sad} FF` 
    } 
} else {
    iconGrade = "Wrong Note Score, Please enter information in the correct range";
}
info.innerHTML = `${iconGrade} -> ${examGrade}`