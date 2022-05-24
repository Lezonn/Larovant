$('#form-registration')[0].addEventListener('submit', (event) => {
    event.preventDefault();

    let username = $('#username').val()
    let email = $('#email').val()
    let password = $('#password').val()
    let confirmPassword = $('#confirmPassword').val()
    let dob = $('#dob').val()
    let nationality = $('#nationality').val()
    let checkbox = $('#checkbox')

    let error_username = $('#error-username')[0]
    let error_email = $('#error-email')[0]
    let error_password = $('#error-password')[0]
    let error_confirm = $('#error-confirm')[0]
    let error_dob = $('#error-dob')[0]
    let error_nationality = $('#error-nationality')[0]
    let error_checkbox = $('#error-checkbox')[0]

    if(!validate_email(email)) {
        error_email.innerHTML = 'Email must contain at least an @ and endswith .com'
        return
    } else {
        error_email.innerHTML = ""
    }

    if(!validate_username(username)) {
        error_username.innerHTML = "Username length must bigger or equals than 4"
        
        return
    } else {
        error_username.innerHTML = ""
    }

    if(!validatePassword(password)) {
        error_password.innerHTML = "Password must be alphanumeric only"
        return
    } else {
        error_password.innerHTML = ""
    }

    if(!validateConfirm(password, confirmPassword)) {
        error_confirm.innerHTML = "Password didn't match"
        return
    } else {
        error_confirm.innerHTML = ""
    }

    if(!validateDoB(dob)) {
        error_dob.innerHTML = "Date Of Birth must be chosen"
        return
    } else {
        error_dob.innerHTML = ""
    }

    if(!validateNationality(nationality)) {
        error_nationality.innerHTML = "Nationality must be chosen"
        return
    } else {
        error_nationality.innerHTML = ""
    }
    
    if(!validateCheckbox(checkbox)) {
        error_checkbox.innerHTML = "You must agree with the terms & conditions"
        return
    } else {
        error_checkbox.innerHTML = ""
    }

    event.currentTarget.submit()
});

validate_email = (email) => {
    return email.indexOf('@') != -1 && email.endsWith('.com') == true
}

validate_username = (username) => {
    return username.length < 4 ? false : true;
}

isNum = (character) => {
    return character >= 48 && character <= 57
}

isAlpha = (character) => {
    let a = 'a'.charCodeAt(0)
    let z = 'z'.charCodeAt(0)

    let A = 'A'.charCodeAt(0)
    let Z = 'Z'.charCodeAt(0)

    return character >= a && character <= z || character >= A && character <= Z
}

validatePassword = (password) => {
    let length = password.length;

    let alpha = 0;
    let numeric = 0;

    for(let i = 0; i < length; i++) {
        let charCode = password.charCodeAt(i)
        if(isNum(charCode))
            numeric++
        if(isAlpha(charCode))
            alpha++
    }
    return alpha + numeric == length && numeric != 0 && alpha != 0;
}

validateConfirm = (password, confirmPassword) => {
    return password == confirmPassword ? true : false;
}

validateDoB = (dob) => {
    return dob == "" ? false : true;
}

validateNationality = (nationality) => {
    return nationality ? true : false;
}

validateCheckbox = (checkbox) => {
    return checkbox.prop('checked') == true ? true : false;
}