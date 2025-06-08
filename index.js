  AOS.init();

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        
    }

     emailjs
     
     .send("service_dqszwvj","template_1jgzvvr",parms)
     
     .then(() => {
                alert("Your Message has been sent Successfully")
            })
            .catch((error) => {
                console.log("error sending email:", error)
                alert("failed to send mail")
            })
     
     
     
     
    
}