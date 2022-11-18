const nodemailer = require('nodemailer');
const mani = "sdzbmsrb"
const transporter = nodemailer.createTransport(
    {
    service:"hotmail",
    auth:{
        user:"manivasagam.suresh@outlook.com",
        pass:"atshu.mani"
    }
});

const details = {
    from: "manivasagam.suresh@outlook.com",
    to:"s.kishore123.64@gmail.com,mani.mb1221@gmail.com",
    subject:"sending from node.js",
    text:"hii",
    html: `<a href=http://localhost:3000/ChangePassword/${mani}>Click Here</a>`

};
transporter.sendMail(details,(err,info)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("sent:" + info.response);

})