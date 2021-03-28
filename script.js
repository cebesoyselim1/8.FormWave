const labels = document.querySelectorAll(".form-label");

labels.forEach((label) => {
    let labelArr = label.textContent.split("");

    let charList = labelArr.map((labelChar,index) => {
        return `<span style="transition-delay:${((50) + 50 * index)}ms;">${labelChar}</span>`;
        
    });
 
    label.innerHTML = charList.join("");
});

