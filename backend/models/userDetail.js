const mongoose = require('mongoose');

var UserDetail = mongoose.Schema({
    userId: String,
    sent: Boolean,
    sentToDir: Boolean,
    sentToSuper: Boolean,
    tick: Boolean,
    mail: Boolean,
    Remarks : String,
    submitted: Boolean,
    eligibility: Boolean,
    finallySelected: Boolean,
    sendMail: Boolean,
    advNo: String,
    transactionId: String,
    bankName: String,
    branchName: String,
    ifsc: String,
    amount: Number,
    transactionDate: Date,
    postApplied: String,
    department: String,
    // registrationId: String,
    name: String,
    motherName: String,
    fatherName: String,
    houseNoResidential: String,
    streetResidential: String,
    streetResidential1: String,
    landmarkResidential: String,
    cityResidential: String,
    districtResidential: String,
    policeResidential: String,
    postResidential: String,
    statePermanent: String,
    statePermanent: String,
    stateResidential: String,
    countryResidential: String,
    pincodeResidential: Number,
    houseNoPermanent: String,
    streetPermanent: String,
    streetPermanent1: String,
    landmarkPermanent:String,
    cityPermanent: String,
    districtPermanent: String,
    policePermanent: String,
    postPermanent: String,
    statePermanent: String,
    countryPermanent: String,
    pincodePermanent: Number,
    email: String,
    mobileNo: Number,
    gender: String,
    DOB: Date,
    age: Number,
    maritalStatus: String,
    category: String,
    pwd: Boolean,
    disability: String,
    Sl: Number,
    degree: String,
    nob: String,
    br: String,
    yoc: String,
    div: String,
    percentage: Number,
    cgpa: Number,
    Xboard: String,
    Xbranch: String,
    Xyear: Number,
    Xdivision: Number,
    Xpercentage: Number,
    Xcgpa: Number,
    XIIboard: String,
    XIIbranch: String,
    XIIyear: Number,
    XIIdivision: Number,
    XIIpercentage: Number,
    XIIcgpa: Number,
    dboard: String,
    dbranch: String,
    dyear: Number,
    ddivision: Number,
    dpercentage: Number,
    dcgpa: Number,
    gboard: String,
    gbranch: String,
    gyear: Number,
    gdivision: Number,
    gpercentage: Number,
    gcgpa: Number,
    pgboard: String,
    pgbranch: String,
    pgyear: Number,
    pgdivision: Number,
    pgpercentage: Number,
    pgcgpa: Number,
    phdboard: String,
    phdbranch: String,
    phdyear: Number,
    phddivision: Number,
    phdpercentage: Number,
    phdcgpa: Number,
    oboard: String,
    obranch: String,
    oyear: Number,
    odivision: Number,
    opercentage: Number,
    ocgpa: Number,
    tophdboard: String,
    tophdbranch: String,
    tophdyear: Number,
    tophddivision: Number,
    tophdpercentage: Number,
    tophdcgpa: Number,
    exorganization1: String,
    exdesignation1: String,
    exfrom1: Date,
    exto1: Date,
    duryear1: Number,
    durmonth1: String,
    payScale1: Number,
    reason1: String,
    exorganization2: String,
    exdesignation2: String,
    exfrom2: Date,
    exto2: Date,
    duryear2: Number,
    durmonth2: String,
    payScale2: Number,
    reason2: String,
    exorganization3: String,
    exdesignation3: String,
    exfrom3: Date,
    exto3: Date,
    duryear3: Number,
    durmonth3: String,
    payScale3: Number,
    reason3: String,
    exorganization4: String,
    exdesignation4: String,
    exfrom4: Date,
    exto4: Date,
    duryear4: Number,
    durmonth4: String,
    payScale4: Number,
    reason4: String,
    exorganization5: String,
    exdesignation5: String,
    exfrom5: Date,
    exto5: Date,
    duryear5: Number,
    durmonth5: String,
    payScale5: Number,
    reason5: String,
    exorganization6: String,
    exdesignation6: String,
    exfrom6: Date,
    exto6: Date,
    duryear6: Number,
    durmonth6: String,
    payScale6: Number,
    reason6: String,
    signature: String,
    photo: String,
    signature: String,
    casteC: String,
    ageC: String,
    XMarksheet: String,
    XCertificate: String,
    XIIMarksheet: String,
    XIICertificate: String,
    diplomaMarksheet: String,
    diplomaCertificate: String,
    gradMarksheet: String,
    gradCertificate: String,
    postGradMarksheet: String,
    postGradCertificate: String,
    phdMarksheet: String,
    phdCertificate: String
})
var UserDetail = module.exports = mongoose.model('UserDetail', UserDetail);