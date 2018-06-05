module.exports.settings_dev = {

    Authentication: {
        Header_NotFound: "No Authorization header was found",
        Bearer_NotFound: "Format is Authorization: Bearer [token]",
        Bearee_Format: "Bearer",
        Invalid_Token: 'Invalid Token!',
        Type: "bcrypt" // types available jwt/bcrypt

    },
    Password: {
        MinLength: 8,
        MaxLength: 50,
        Expiry_Days: 60,
        History_Count: 6
    },
    Security: {
        JwtSecurityKey: "Power@1234",
        JwtTokenExpiryTime: 108000000000,
        SaltRounds: 10,
        bcryptSecurityKey:"Power@1234",

    },
    Mailgun: {
        API_Key: "key-6dsfdsadawer234",
        Api_Url: "https://api.mailgun.net/v2",
        Domain: "mg.techq.com"
    },
    Email: {
        From: " <no-reply@techq.com>",
        Subject_ForgotPassword: "Forgot Password",
        Subject_EmailVerification: "Email Verification",
        TemplateUrl_ForgotPassword: "emailTemplates/forgotPassword",
        Verification_UserName: "User"
    },
    Minio: {
        AccessKey : '',
        SecretKey : '',
        Port : 9000,
        EndPoint : '56.255.190.174',
        Secure : false,
        BucketName : '',
        FileLinkExpiryTime : 86400
    },
    AWS: {
        Url: "https://s3-us-west-2.amazonaws.com/",
        BucketName: "",
        AccessKey: "",
        SecretKey: "",
        BucketRegion: "us-west-2",
    },
    App: {
        DocumentProvider: 'Minio',
        CompanyCode : "SmartFoodSafe",
        APIEndPoint :"http://18.191.2.115:3000"
    }
};