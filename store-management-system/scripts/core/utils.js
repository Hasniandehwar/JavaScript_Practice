// # date, ID, validation helpers
import { dataBase_ls } from "../core/storage.js";
// Signup/login validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}
function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

function Signupvalidate(user) {
    if (!validateEmail(user.email)) {
        return { success: false, message: "Invalid email format" };

    }else if (!validatePassword(user.password)) {
        return { success: false, message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character" };
    } else {
        const users = dataBase_ls.getData("users");
        if (users.some(u => u.email === user.email)) {
            return { success: false, message: "Email already exists" };
        }else{
            const newUser = {
                id: generateUniqueId(),
                email: user.email,
                password: user.password
            };

            users.push(newUser);
            dataBase_ls.setData("users", users);
            return { success: true, message: "Signup successful" };
        }
}}

function Loginvalidate(email, password) {
    const users = dataBase_ls.getData("users");
    const user = users.find(u => u.email === email);
    if (!user) {
        return { success: false, message: "User not found" };
    }
    dataBase_ls.getData("users").find(u => u.email === email);
    if (user.password !== password) {
        return { success: false, message: "Incorrect password" };
    }else{
        return { success: true, message: "Login successful" };
    }
}

/// export utils

export {Signupvalidate, Loginvalidate,};