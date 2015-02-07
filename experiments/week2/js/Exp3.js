
/* Validating for First Name */
function firstName() {
    var firstName = document.getElementById("firstName").value;
    if (firstName == null || firstName == "") {
        alert("First name is blank. Please fill your First Name.");
    }
}

/* Validating for Second Name */
function lastName() {
    var lastName = document.getElementById("lastName").value;
    if (lastName == null || lastName == "") {
        alert("Last name is blank. Please fill your Last Name.");
    }
}

/* Validating for Email Id */
function emailId() {
    var emailId = document.getElementById("emailId").value;
    var atposition = emailId.indexOf("@");
    var dotposition = emailId.lastIndexOf(".");

    if (emailId == null || emailId == "" || atposition < 1 || dotposition < 1 || atposition > dotposition || dotposition - atposition < 2 || dotposition + 2 >= emailId.length) {
        alert("Invalide Email Id. Please fill your correct Email Id. (Ex: letters@domain.com)");
    }
}

/* Validating for Phone Number */
function phoneNumber() {
    var check_flag = false;
    var counter = 0;
    var phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber == null || phoneNumber == "") {
        alert("Invalide Phone Number. Please fill your correct Phone Number. (Ex: 8572348869)");
    }

    for (var i = 0; i < phoneNumber.length; i++) {
        if (phoneNumber[i] >= 0 && phoneNumber[i] <= 9) {
            check_flag = false;
            counter = counter + 1;
        } else {
            check_flag = true;
            counter = 0;
        }
    }

    if (check_flag || counter != 10) {
        alert("Phone Number Invalid" + counter);
    }

}

/* Validating for Gender */
function gender() {
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;

    if (!(male || female)) {
        alert("Choose Gender");
    }
}


function check() {
    firstName();
    lastName();
    emailId();
    phoneNumber();
    gender();
}