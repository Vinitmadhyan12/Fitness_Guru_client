export function validation(values) {
    let error = {}

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if (values.username === "") {
        error.username = "name should not be empty"
    } else {
        error.username = ""
    }



    if (values.password === "") {
        error.password = "password should not be empty"
    } else if (!password_pattern.test(values.password)) {
        error.password = "above 8 letters"
    } else {
        error.password = ""
    }
    return error;
}