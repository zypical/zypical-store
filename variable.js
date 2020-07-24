
const api = "https://qa-zypical-api.herokuapp.com/api";
// const api = "http://localhost:3001/api";

const goHomeSecondLevel = () => {
    window.location.replace("../index.html");
}

const checkSize = (files) => {
    let correct = true;
    Object.keys(files).forEach(function(el,index) {
        let file = files[el];
        console.log("File checked: ",file.name);
        if (file.size > 1500000) // 2 mb for bytes.
        {
            alert(`File too large for image ${file.name}. Please upload equal or less than 1.5MB`)
            console.log("Image size: ", file.size);
            correct =  false;
        }
        else {

        }
    });

    return correct;
        
}