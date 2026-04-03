//How cookie is used to track session ID
//simulated browser server-side session store
const sessionStore = {
    "abc123":{
        userId: 101,
        username: "sinchana",
        role:"admin"
    }
};
//simulated browser cookie value
const browserCookieSessionId = "abc123";
const sessionData = sessionStore[browserCookieSessionId];
console.log("Server-side session data:",sessionData);