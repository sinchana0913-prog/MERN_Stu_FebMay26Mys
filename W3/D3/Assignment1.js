function tagPassword(password) {
    if (typeof password !== "string") {
        return "INVALID";
    }
    const len = password.length;
    if (len < 8) {
        return "WEAK";
    }

    let hasLetter = false;
    let hasNumber = false;

    
    for (let i = 0; i < len; i++) {
        const char = password[i];

    }

    
    if (len >= 12 && hasLetter && hasNumber) {
        return "STRONG";
    }

    
    if (len >= 8 && hasLetter && hasNumber) {
        return "MEDIUM";
    }

    else{
    return "WEAK";}
}


console.log(tagPassword("abc12345"));    
console.log(tagPassword("longPass12345")); 
console.log(tagPassword("short1"));      
console.log(tagPassword(12345678)); 
