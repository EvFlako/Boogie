function isAdmin(user) {
    if (user.admin === true) {
        window.location.href = "/home/mfrascarolo/RollingCode/Boogie/pages/admin.html";
        
    } else {
        window.location.href = "/home/mfrascarolo/RollingCode/Boogie/index.html";
        
    }
};