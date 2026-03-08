const permissionRules = [
    { role: "admin", action: "READ", allowed: true },
    { role: "admin", action: "WRITE", allowed: true },
    { role: "student", action: "READ", allowed: true },
    { role: "student", action: "WRITE", allowed: false },
    { role: "guest", action: "READ", allowed: false },
    { role: "guest", action: "WRITE", allowed: false },
];

const allowedRules = permissionRules.filter(rule => rule.allowed === true);
const allowedPairs = allowedRules.map(rule => `${rule.role}:${rule.action}`);
const summary = allowedRules.reduce((accumulator, currentRule) => {
    
    if (!accumulator[currentRule.role]) {
        accumulator[currentRule.role] = 0;
    }
    
    accumulator[currentRule.role]++;
    return accumulator;
}, {}); 


console.log("allowedRules:", allowedRules);
console.log("allowedPairs:", allowedPairs);
console.log("summary:", summary);
