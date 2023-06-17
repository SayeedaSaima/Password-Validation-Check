const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

//an array of password requirments with corresponding
//regular expressions and index of the requirement list item
const requirements = [
	{regex: /.{8,}/, index:0 },
	{regex: /[0-9]/, index:1 },
	{regex: /[a-z]/, index:2 },
	{regex: /[^A-Za-z0-9]/, index:3 },
	{regex: /[A-Z]/, index:4 },
]


passwordInput.addEventListener("keyup", (e) =>{
    requirements.forEach(item => {
    	//check if the password matches the reuirement regex
    	const isValid = item.regex.test(e.target.value);
    	const requirementItem = requirementList[item.index];

        //updating class & icon of requirement item if requirement matched or not
    	if(isValid) {
    		requirementItem.firstElementChild.className = "fa fa-check";
    		requirementItem.classList.add("valid");
    	} else {
    		requirementItem.firstElementChild.className = "fa fa-circle";
    		requirementItem.classList.remove("valid");
    	}

    });
});

eyeIcon.addEventListener("click", () => {
	//toggle the password input type between password & text
	passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    //update the eye icon class based on the password input type
	eyeIcon.className = `fa fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;

});