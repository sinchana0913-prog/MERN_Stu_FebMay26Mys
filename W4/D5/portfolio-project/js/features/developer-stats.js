function developerStats(){
    const educationContainer = document.getElementById("education-container");

    if(!educationContainer){
        console.log("education  not found");
        return;
    }

    educationContainer.innerHTML = ""; 
    educationData.forEach(function(education){
        //to create outer card
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        //create icon
        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex item-center justify-center";

        //create icon text 
        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = education.shortLabel;
        //put icon text inside icon box
        iconBox.appendChild(iconText);

        //create skill name
        const educationLabel = document.createElement("h3");
        educationLabel.className = "text-xl font-bold mb-2";
        educationLabel.textContent = education.label;

        //create skill desc
        const educationCollege = document.createElement("h3");
        educationCollege.className = "text-sm";
        educationCollege.textContent = education.college;

        const educationStudy = document.createElement("h3");
        educationStudy.className = "text-sm";
        educationStudy.textContent = education.study;

        const educationCGPA = document.createElement("h3");
        educationCGPA.className = "text-sm";
        educationCGPA.textContent = education.cgpa;
        //append all child elements to card
        card.appendChild(iconBox);
        card.appendChild(educationLabel);
        card.appendChild(educationCollege);
        card.appendChild(educationStudy);
        card.appendChild(educationCGPA);
        //append card to skills container
        educationContainer.appendChild(card);
    });
    console.log("developer Stats Successfully");
}