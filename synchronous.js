function login(username, password) {
    if (username === "bhoomikagupta" && password === "2405") {
        console.log(`Welcome back, ${username}!`);
        return true;
    } else {
        console.log("Invalid username or password.");
        return false;
    }
}

function getData() {
    console.log("Getting your data...");
    // Simulate a delay (non-blocking) instead of freezing with a big loop
    return ["Mail", "Notifications", "Profile Info"];
}

function displayData(data) {
    console.log("Here is your data:", data);
}

function logout(username) {
    console.log(`Goodbye, ${username}. You have been logged out.`);
}

// Run the program
if (login("bhoomikagupta", "2405")) {
    let data = getData();
    displayData(data);
    logout("bhoomikagupta");
}


//Asynchronous

function login(username, password) {
    if (username === "bhoomikagupta" && password === "2405") {
        console.log(`Welcome back, ${username}!`);
        return true;
    } else {
        console.log("Invalid username or password.");
        return false;
    }
}

function getData() {
    console.log("Getting your data...");
    for (let i = 0; i < 1e8; i++) {} // simulate some delay
    return ["Mail", "Notifications", "Profile Info"];
}

function displayData(data) {
    console.log("Here is your data:", data);
}

function logout(username) {
    console.log(`Goodbye, ${username}. You have been logged out.`);
}

// Run program
if (login("bhoomikagupta", "2405")) {
    let data = getData();
    displayData(data);
    logout("bhoomikagupta");
}
