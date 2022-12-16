export default class RegistrationPage {
    url = 'https://dtyunegov.github.io/registration_form/'
    selectors = {
        login: "//input[@name = 'login']",
        email: "//input[@name = 'email']",
        password: "//input[@name = 'password']",
        confirmPassword: "//input[@name = 'confirmPassword']",
        signUpButton: "//button[text() = 'Sign up']",
        error: "//following::p"
    }
}