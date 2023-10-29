function handleLogin(response) {
    const responsePayload = decodeJwtResponse(response.credential);
    let email = responsePayload.email;
    sessionStorage.setItem("email", email);
    window.location.href="https://nhsnatick.org/dashboard";
}

function decodeJwtResponse(credential) {
    let jwtElements = credential.split(".");
    return JSON.parse(atob(jwtElements[1]));
}
