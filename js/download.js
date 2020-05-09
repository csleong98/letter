var download = document.querySelector("#download");
var imgConverted = document.getElementById("imgConverted");

download.addEventListener("click", function () {
    html2canvas(document.getElementById("postcard")).then(canvas => {
        const a = document.createElement('a');

        document.body.appendChild(a);
        a.href = canvas.toDataURL("image/png");
        a.download = "postcard";
        a.click();
        document.body.removeChild(a);

        // const img = document.createElement('img');
        // document.body.appendChild(img);
        // img.src = canvas.toDataURL("image/png");
        // img.setAttribute('method', 'post')
        // img.setAttribute('name', 'image');
        // img.setAttribute('style', 'display: block');
    });
})

var sendEmail = document.getElementById('send-letter');
const sgMail = require('node_modules/@sendgrid/mail');

sendEmail.addEventListener("click", function() {
    // Email.send({
    //     SecureToken: "12a2b8ae-9ddb-4187-8b0b-d5b6faecb1c3",
    //     To : 'macintoshleong@gmail.com',
    //     From : "cheeseng@gmail.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   console.log('successful')
    // );
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'macintoshleong@gmail.com',
      from: 'test@example.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    //ES6
    sgMail
      .send(msg)
      .then(() => {}, error => {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }
      });

})