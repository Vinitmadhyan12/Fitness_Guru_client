export function validation(values) {
    let error = {}

    // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if (values.username === "") {
        error.username = "name should not be empty"
    } else {
        error.username = ""
    }


    if (values.oldpassword === "") {
        error.oldpassword = "oldpassword should not be empty"
    } else if (!password_pattern.test(values.oldpassword)) {
        error.oldpassword = "above 8 letters with one capital letter"
    } else {
        error.oldpassword = ""
    }


    if (values.newpassword === "") {
        error.newpassword = "newpassword should not be empty"
    } else if (!password_pattern.test(values.newpassword)) {
        error.newpassword = "above 8 letters with one capital letter"
    } else {
        error.newpassword = ""
    }
    return error;
}