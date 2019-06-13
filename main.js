
var user = [{
"FirstName" : "Nimish",
"lastName"  : "Valiyaveettil",
"email"     : "nimish@email.com"

},
{
    "FirstName" : "Test",
    "lastName"  : "HHH",
    "email"     : "niddmish@ffgf.com"
    
    }

];

var test = {
    "FirstName" : "Nimish",
    "lastName"  : "Valiyaveettil",
    "email"     : "nimish@email.com"
 
        };


//console.log(Array.isArray(test));
//user.email = "nimis_v@jj.com";



var dslrCompanies = ["Nikon","Canon","Sony"]
//console.log(dslrCompanies.length);

for(i = 0;i < dslrCompanies.length; i++)
{
    
    //console.log(i < dslrCompanies.length);
}


//IF ELSE CONDITION


//var itemPurchased = window.prompt("Please enter the no");
/*
if(itemPurchased > 3)
{
    console.log("You are eligible");
}else if(itemPurchased == 3 ){
    console.log("Purchase one more item to get promo code")
}else{
    console.log("You are not eligible");
}

//USING LOGICAL OPERATORS
//CHECK THE STUDENT IS TOPPER OR NOT

var isTopper = false;

var marksObtained = window.prompt("Please enter the mark");

if(marksObtained == undefined || marksObtained == null || marksObtained == '')
{
    console.log("Please enter valid input"); 
}else if(marksObtained < 0 || marksObtained > 100 ){
 
    console.log("Please enter a number between 0 to 100"); 
}else {

    marksObtained  = Number(marksObtained); //To Convert something to number
    var totalMarks = 100;
    var percentageOfMarksObtained = (marksObtained /totalMarks) * 100 ;

  isTopper = (percentageOfMarksObtained > 90) ? true : false;
    console.log(isTopper);
}




var carModel = window.prompt("Enter car model");

var result;

switch (carModel)
{
    case 'Swift' : 
        result = "Maruti Suzuki"    
        break
    case 'Polo' :
        result = "Volkswagen"
        break
    default :
        result = "Please enter car model"
        break

}
console.log(result);


//LOOPS


//for/in Loops for Objects and array 

//Objects
var User = {
    name   : "Nimish",
    email  :"nimish_@gmail.com",
    mobile : 99999999
};

for (x in User)
{
    console.log(x +":"+ User[x]);
}

//Array

var customers = [
{
    'custId'   : '1',
    'custName' : "Nimish"
},
{
    'custId'   : '2',
    'custName' : "Someone"
}
];

for (x in customers)
{

    console.log(x)

}

//FUNCTIONS

function multi(x,y)
{
    return x*y;
}
var result = multi(2,5);
console.log(result);



var users = [
    {
        'email'     : 'nimish@g.com',
        'name'      : 'Nimish V A',
        'password'  : 'password'

    },
    {
        'email'     : 'test@g.com',
        'name'      : 'Test',
        'password'  : 'password1'

    },
    {
        'email'     : 'test2@g.com',
        'name'      : 'Test2',
        'password'  : 'password2'

    }
];

// Authentication Function starts
var auth = function (email,password,users)
{

    var isUserFound       = false;
    var isPasswordCorrect = false;
    for(c_user in users)
    {
        if(users[c_user]['email'] == email){      

        if(users[c_user]['password'] == password ){

            isPasswordCorrect = true;
            isUserFound = true;
            break;

        }else{ 
            isUserFound = true;
            isPasswordCorrect = false;
            break
        }
        } else {

              isUserFound = false;

        }

    }

    if(isUserFound == true && isPasswordCorrect == true){
        console.log("User logged in ");
    }else if(isUserFound == true && isPasswordCorrect == false){
        console.log("Password is wrong");
    }else{
        console.log("User not found");
    }

};
//Authentication function ends here...

var email = prompt("Enter Email");
var pass  = prompt("Enter Password");

auth(email,pass,users);



//Special Functions

//Convert String to Array using Split

var myString = "I am a Full_Stack_Developer"

var stringToArray = myString.split(" ");
console.log(stringToArray);
*/

/*
let findFactorial = (x) => {
        var fact = 1;
    for(i = 1; i <= x ; i++)
    {

            fact = fact * i;
            //alert(fact);
    }

    return fact;
  };

    var result = findFactorial(0);
  console.log(result);


let calculateAge = function(day, month, year) {
    month = Number(month) - 1;
    var dateOfBirth = new Date(year,month,day);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    var m = currentDate.getMonth() - dateOfBirth.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < dateOfBirth.getDate())) {
        age = age - 1;
    }
    return age;
  
};
 

var result = calculateAge(28,02,1992);
console.log(result);



let removeVowelsAndSpaces = function(givenString){
   
    var string  = givenString;
    string = string.replace(/[aeiou ]/ig,"");
   // string = string.replace(" ","");
    return string;
 
 };


var result = removeVowelsAndSpaces("arijit kumar");
console.log(result);




let findFactorial = (x) => {
  
    var fact = 1;
    for(i = 1; i <= x; i++)
    {
        fact = fact * i;
    }
  
    return fact;

};

var result = findFactorial(4);
console.log(result);

//Check Prime number
let isPrime = function (num){
  
    for(i = 1; i <= 101 ; i++)
    {
        if(i != 1)
        {
            if(i % 2 === 1)

           { console.log(i); }
    
        }
    }
};

//var input = prompt("Enter a Number");
var result = isPrime();
console.log(result);


var str="jquery";
str = str.split(""); //convert 'jQuery' to array
str = str.reverse(); //reverse 'jQuery' order 
str = str.join(""); //then join the reverse order values together
//alert(str);


//Block scope.

//Old Script....

var x = 1;

for(var x = 0; x < 10 ; x++)
{

    console.log(x);
}
console.log('x =' +x);



//Arrow Funtion
let multiply = (x,y) => { return x * y; };

console.log(multiply(5));

var a = "sfsjdfjksdfjk";
var b = "hjsdjhfsdhjfhh";

var c = `${a}. This is test. ${b}`;

//console.log(c);


var generateEmail = (name,lastName,message) => {

    var emailMessage = `Hi ${name +" "+ lastName} 

This is the message we have for you - 
${message}  
Copyright @edwisor 2019`
    return emailMessage;
}


console.log(generateEmail("Nimish","Valiyaveettil","Welcome to edwisor"));



//FOR OF Loop

var customers = {

    'custID'        : '123',
    'name'          :'Nimish',
    'SignedUpDate'  : '2016-12-11'

};

for(x in customers)
{
    console.log(x);
}
*/

/*

Complete the functions below that finds the largest prime factor of a number. 
The function that takes the number as input and return the largest prime factor as output. 




function primeFactorsTo(max)
{
    var store  = [], i, j, flag = 0 ,primes = [];
    for (i = 1; i <= max; i++) 
    {
      if(i % 2 === 0)
      {
        flag++;
      }
      
    }
    

    return flag;
}
 
 let getLargestPrimeFactor = function (n) {
    
    var getPrimeNumbers = primeFactorsTo(n);
    //var last_prime_index = getPrimeNumbers.length;
    return getPrimeNumbers;
    

    
 
 };


 
let result = getLargestPrimeFactor(4099);
 console.log(result);
 
 //module.exports = { getLargestPrimeFactor: getLargestPrimeFactor };
// */
 let cityData = {
    "Andaman and Nicobar Islands": [
      "Port Blair*"
    ],
    "Andhra Pradesh": [
      "Adoni",
      "Amalapuram",
      "Anakapalle",
      "Anantapur",
      "Bapatla",
      "Bheemunipatnam",
      "Bhimavaram",
      "Bobbili",
      "Chilakaluripet",
      "Chirala",
      "Chittoor",
      "Dharmavaram",
      "Eluru",
      "Gooty",
      "Gudivada",
      "Gudur",
      "Guntakal",
      "Guntur",
      "Hindupur",
      "Jaggaiahpet",
      "Jammalamadugu",
      "Kadapa",
      "Kadiri",
      "Kakinada",
      "Kandukur",
      "Kavali",
      "Kovvur",
      "Kurnool",
      "Macherla",
      "Machilipatnam",
      "Madanapalle",
      "Mandapeta",
      "Markapur",
      "Nagari",
      "Naidupet",
      "Nandyal",
      "Narasapuram",
      "Narasaraopet",
      "Narsipatnam",
      "Nellore",
      "Nidadavole",
      "Nuzvid",
      "Ongole",
      "Palacole",
      "Palasa Kasibugga",
      "Parvathipuram",
      "Pedana",
      "Peddapuram",
      "Pithapuram",
      "Ponnur",
      "Proddatur",
      "Punganur",
      "Puttur",
      "Rajahmundry",
      "Rajam",
      "Rajampet",
      "Ramachandrapuram",
      "Rayachoti",
      "Rayadurg",
      "Renigunta",
      "Repalle",
      "Salur",
      "Samalkot",
      "Sattenapalle",
      "Srikakulam",
      "Srikalahasti",
      "Srisailam Project (Right Flank Colony) Township",
      "Sullurpeta",
      "Tadepalligudem",
      "Tadpatri",
      "Tanuku",
      "Tenali",
      "Tirupati",
      "Tiruvuru",
      "Tuni",
      "Uravakonda",
      "Venkatagiri",
      "Vijayawada",
      "Vinukonda",
      "Visakhapatnam",
      "Vizianagaram",
      "Yemmiganur",
      "Yerraguntla"
    ],
    "Arunachal Pradesh": [
      "Naharlagun",
      "Pasighat"
    ],
    "Assam": [
      "Barpeta",
      "Bongaigaon City",
      "Dhubri",
      "Dibrugarh",
      "Diphu",
      "Goalpara",
      "Guwahati",
      "Jorhat",
      "Karimganj",
      "Lanka",
      "Lumding",
      "Mangaldoi",
      "Mankachar",
      "Margherita",
      "Mariani",
      "Marigaon",
      "Nagaon",
      "Nalbari",
      "North Lakhimpur",
      "Rangia",
      "Sibsagar",
      "Silapathar",
      "Silchar",
      "Tezpur",
      "Tinsukia"
    ],
    "Bihar": [
      "Araria",
      "Arrah",
      "Arwal",
      "Asarganj",
      "Aurangabad",
      "Bagaha",
      "Barh",
      "Begusarai",
      "Bettiah",
      "Bhabua",
      "Bhagalpur",
      "Buxar",
      "Chhapra",
      "Darbhanga",
      "Dehri-on-Sone",
      "Dumraon",
      "Forbesganj",
      "Gaya",
      "Gopalganj",
      "Hajipur",
      "Jamalpur",
      "Jamui",
      "Jehanabad",
      "Katihar",
      "Kishanganj",
      "Lakhisarai",
      "Lalganj",
      "Madhepura",
      "Madhubani",
      "Maharajganj",
      "Mahnar Bazar",
      "Makhdumpur",
      "Maner",
      "Manihari",
      "Marhaura",
      "Masaurhi",
      "Mirganj",
      "Mokameh",
      "Motihari",
      "Motipur",
      "Munger",
      "Murliganj",
      "Muzaffarpur",
      "Narkatiaganj",
      "Naugachhia",
      "Nawada",
      "Nokha",
      "Patna*",
      "Piro",
      "Purnia",
      "Rafiganj",
      "Rajgir",
      "Ramnagar",
      "Raxaul Bazar",
      "Revelganj",
      "Rosera",
      "Saharsa",
      "Samastipur",
      "Sasaram",
      "Sheikhpura",
      "Sheohar",
      "Sherghati",
      "Silao",
      "Sitamarhi",
      "Siwan",
      "Sonepur",
      "Sugauli",
      "Sultanganj",
      "Supaul",
      "Warisaliganj"
    ],
    "Chandigarh": [
      "Chandigarh*"
    ],
    "Chhattisgarh": [
      "Ambikapur",
      "Bhatapara",
      "Bhilai Nagar",
      "Bilaspur",
      "Chirmiri",
      "Dalli-Rajhara",
      "Dhamtari",
      "Durg",
      "Jagdalpur",
      "Korba",
      "Mahasamund",
      "Manendragarh",
      "Mungeli",
      "Naila Janjgir",
      "Raigarh",
      "Raipur*",
      "Rajnandgaon",
      "Sakti",
      "Tilda Newra"
    ],
    "Dadra and Nagar Haveli": [
      "Silvassa*"
    ],
    "Delhi": [
      "Delhi",
      "New Delhi*"
    ],
    "Goa": [
      "Mapusa",
      "Margao",
      "Marmagao",
      "Panaji*"
    ],
    "Gujarat": [
      "Adalaj",
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Anjar",
      "Ankleshwar",
      "Bharuch",
      "Bhavnagar",
      "Bhuj",
      "Chhapra",
      "Deesa",
      "Dhoraji",
      "Godhra",
      "Jamnagar",
      "Kadi",
      "Kapadvanj",
      "Keshod",
      "Khambhat",
      "Lathi",
      "Limbdi",
      "Lunawada",
      "Mahesana",
      "Mahuva",
      "Manavadar",
      "Mandvi",
      "Mangrol",
      "Mansa",
      "Mahemdabad",
      "Modasa",
      "Morvi",
      "Nadiad",
      "Navsari",
      "Padra",
      "Palanpur",
      "Palitana",
      "Pardi",
      "Patan",
      "Petlad",
      "Porbandar",
      "Radhanpur",
      "Rajkot",
      "Rajpipla",
      "Rajula",
      "Ranavav",
      "Rapar",
      "Salaya",
      "Sanand",
      "Savarkundla",
      "Sidhpur",
      "Sihor",
      "Songadh",
      "Surat",
      "Talaja",
      "Thangadh",
      "Tharad",
      "Umbergaon",
      "Umreth",
      "Una",
      "Unjha",
      "Upleta",
      "Vadnagar",
      "Vadodara",
      "Valsad",
      "Vapi",
      "Vapi",
      "Veraval",
      "Vijapur",
      "Viramgam",
      "Visnagar",
      "Vyara",
      "Wadhwan",
      "Wankaner"
    ],
    "Haryana": [
      "Bahadurgarh",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gohana",
      "Gurgaon",
      "Hansi",
      "Hisar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Ladwa",
      "Mahendragarh",
      "Mandi Dabwali",
      "Narnaul",
      "Narwana",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Pehowa",
      "Pinjore",
      "Rania",
      "Ratia",
      "Rewari",
      "Rohtak",
      "Safidon",
      "Samalkha",
      "Sarsod",
      "Shahbad",
      "Sirsa",
      "Sohna",
      "Sonipat",
      "Taraori",
      "Thanesar",
      "Tohana",
      "Yamunanagar"
    ],
    "Himachal Pradesh": [
      "Mandi",
      "Nahan",
      "Palampur",
      "Shimla*",
      "Solan",
      "Sundarnagar"
    ],
    "Jammu and Kashmir": [
      "Anantnag",
      "Baramula",
      "Jammu",
      "Kathua",
      "Punch",
      "Rajauri",
      "Sopore",
      "Srinagar*",
      "Udhampur"
    ],
    "Jharkhand": [
      "Adityapur",
      "Bokaro Steel City",
      "Chaibasa",
      "Chatra",
      "Chirkunda",
      "Medininagar (Daltonganj)",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "Giridih",
      "Gumia",
      "Hazaribag",
      "Jamshedpur",
      "Jhumri Tilaiya",
      "Lohardaga",
      "Madhupur",
      "Mihijam",
      "Musabani",
      "Pakaur",
      "Patratu",
      "Phusro",
      "Ramgarh",
      "Ranchi*",
      "Sahibganj",
      "Saunda",
      "Simdega",
      "Tenu dam-cum-Kathhara"
    ],
    "Karnataka": [
      "Adyar",
      "Afzalpur",
      "Arsikere",
      "Athni",
      "Bengaluru",
      "Belagavi",
      "Ballari",
      "Chikkamagaluru",
      "Davanagere",
      "Gokak",
      "Hubli-Dharwad",
      "Karwar",
      "Kolar",
      "Lakshmeshwar",
      "Lingsugur",
      "Maddur",
      "Madhugiri",
      "Madikeri",
      "Magadi",
      "Mahalingapura",
      "Malavalli",
      "Malur",
      "Mandya",
      "Mangaluru",
      "Manvi",
      "Mudalagi",
      "Mudabidri",
      "Muddebihal",
      "Mudhol",
      "Mulbagal",
      "Mundargi",
      "Nanjangud",
      "Nargund",
      "Navalgund",
      "Nelamangala",
      "Pavagada",
      "Piriyapatna",
      "Puttur",
      "Rabkavi Banhatti",
      "Raayachuru",
      "Ranebennuru",
      "Ramanagaram",
      "Ramdurg",
      "Ranibennur",
      "Robertson Pet",
      "Ron",
      "Sadalagi",
      "Sagara",
      "Sakaleshapura",
      "Sindagi",
      "Sanduru",
      "Sankeshwara",
      "Saundatti-Yellamma",
      "Savanur",
      "Sedam",
      "Shahabad",
      "Shahpur",
      "Shiggaon",
      "Shikaripur",
      "Shivamogga",
      "Surapura",
      "Shrirangapattana",
      "Sidlaghatta",
      "Sindhagi",
      "Sindhnur",
      "Sira",
      "Sirsi",
      "Siruguppa",
      "Srinivaspur",
      "Tarikere",
      "Tekkalakote",
      "Terdal",
      "Talikota",
      "Tiptur",
      "Tumkur",
      "Udupi",
      "Vijayapura",
      "Wadi",
      "Yadgir"
    ],
    "Karnatka": [
      "Mysore"
    ],
    "Kerala": [
      "Adoor",
      "Alappuzha",
      "Attingal",
      "Chalakudy",
      "Changanassery",
      "Cherthala",
      "Chittur-Thathamangalam",
      "Guruvayoor",
      "Kanhangad",
      "Kannur",
      "Kasaragod",
      "Kayamkulam",
      "Kochi",
      "Kodungallur",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Kunnamkulam",
      "Malappuram",
      "Mattannur",
      "Mavelikkara",
      "Mavoor",
      "Muvattupuzha",
      "Nedumangad",
      "Neyyattinkara",
      "Nilambur",
      "Ottappalam",
      "Palai",
      "Palakkad",
      "Panamattom",
      "Panniyannur",
      "Pappinisseri",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Perinthalmanna",
      "Perumbavoor",
      "Ponnani",
      "Punalur",
      "Puthuppally",
      "Koyilandy",
      "Shoranur",
      "Taliparamba",
      "Thiruvalla",
      "Thiruvananthapuram",
      "Thodupuzha",
      "Thrissur",
      "Tirur",
      "Vaikom",
      "Varkala",
      "Vatakara"
    ],
    "Madhya Pradesh": [
      "Alirajpur",
      "Ashok Nagar",
      "Balaghat",
      "Bhopal",
      "Ganjbasoda",
      "Gwalior",
      "Indore",
      "Itarsi",
      "Jabalpur",
      "Lahar",
      "Maharajpur",
      "Mahidpur",
      "Maihar",
      "Malaj Khand",
      "Manasa",
      "Manawar",
      "Mandideep",
      "Mandla",
      "Mandsaur",
      "Mauganj",
      "Mhow Cantonment",
      "Mhowgaon",
      "Morena",
      "Multai",
      "Mundi",
      "Murwara (Katni)",
      "Nagda",
      "Nainpur",
      "Narsinghgarh",
      "Narsinghgarh",
      "Neemuch",
      "Nepanagar",
      "Niwari",
      "Nowgong",
      "Nowrozabad (Khodargama)",
      "Pachore",
      "Pali",
      "Panagar",
      "Pandhurna",
      "Panna",
      "Pasan",
      "Pipariya",
      "Pithampur",
      "Porsa",
      "Prithvipur",
      "Raghogarh-Vijaypur",
      "Rahatgarh",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rau",
      "Rehli",
      "Rewa",
      "Sabalgarh",
      "Sagar",
      "Sanawad",
      "Sarangpur",
      "Sarni",
      "Satna",
      "Sausar",
      "Sehore",
      "Sendhwa",
      "Seoni",
      "Seoni-Malwa",
      "Shahdol",
      "Shajapur",
      "Shamgarh",
      "Sheopur",
      "Shivpuri",
      "Shujalpur",
      "Sidhi",
      "Sihora",
      "Singrauli",
      "Sironj",
      "Sohagpur",
      "Tarana",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
      "Vijaypur",
      "Wara Seoni"
    ],
    "Maharashtra": [
      "[[]]",
      "Ahmednagar",
      "Akola",
      "Akot",
      "Amalner",
      "Ambejogai",
      "Amravati",
      "Anjangaon",
      "Arvi",
      "Aurangabad",
      "Bhiwandi",
      "Dhule",
      "Kalyan-Dombivali",
      "Ichalkaranji",
      "Kalyan-Dombivali",
      "Karjat",
      "Latur",
      "Loha",
      "Lonar",
      "Lonavla",
      "Mahad",
      "Malegaon",
      "Malkapur",
      "Mangalvedhe",
      "Mangrulpir",
      "Manjlegaon",
      "Manmad",
      "Manwath",
      "Mehkar",
      "Mhaswad",
      "Mira-Bhayandar",
      "Morshi",
      "Mukhed",
      "Mul",
      "Greater Mumbai*",
      "Murtijapur",
      "Nagpur",
      "Nanded-Waghala",
      "Nandgaon",
      "Nandura",
      "Nandurbar",
      "Narkhed",
      "Nashik",
      "Navi Mumbai",
      "Nawapur",
      "Nilanga",
      "Osmanabad",
      "Ozar",
      "Pachora",
      "Paithan",
      "Palghar",
      "Pandharkaoda",
      "Pandharpur",
      "Panvel",
      "Parbhani",
      "Parli",
      "Partur",
      "Pathardi",
      "Pathri",
      "Patur",
      "Pauni",
      "Pen",
      "Phaltan",
      "Pulgaon",
      "Pune",
      "Purna",
      "Pusad",
      "Rahuri",
      "Rajura",
      "Ramtek",
      "Ratnagiri",
      "Raver",
      "Risod",
      "Sailu",
      "Sangamner",
      "Sangli",
      "Sangole",
      "Sasvad",
      "Satana",
      "Satara",
      "Savner",
      "Sawantwadi",
      "Shahade",
      "Shegaon",
      "Shendurjana",
      "Shirdi",
      "Shirpur-Warwade",
      "Shirur",
      "Shrigonda",
      "Shrirampur",
      "Sillod",
      "Sinnar",
      "Solapur",
      "Soyagaon",
      "Talegaon Dabhade",
      "Talode",
      "Tasgaon",
      "Thane",
      "Tirora",
      "Tuljapur",
      "Tumsar",
      "Uchgaon",
      "Udgir",
      "Umarga",
      "Umarkhed",
      "Umred",
      "Uran",
      "Uran Islampur",
      "Vadgaon Kasba",
      "Vaijapur",
      "Vasai-Virar",
      "Vita",
      "Wadgaon Road",
      "Wai",
      "Wani",
      "Wardha",
      "Warora",
      "Warud",
      "Washim",
      "Yavatmal",
      "Yawal",
      "Yevla"
    ],
    "Manipur": [
      "Imphal*",
      "Lilong",
      "Mayang Imphal",
      "Thoubal"
    ],
    "Meghalaya": [
      "Nongstoin",
      "Shillong*",
      "Tura"
    ],
    "Mizoram": [
      "Aizawl",
      "Lunglei",
      "Saiha"
    ],
    "Nagaland": [
      "Dimapur",
      "Kohima*",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto"
    ],
    "Odisha": [
      "Balangir",
      "Baleshwar Town",
      "Barbil",
      "Bargarh",
      "Baripada Town",
      "Bhadrak",
      "Bhawanipatna",
      "Bhubaneswar*",
      "Brahmapur",
      "Byasanagar",
      "Cuttack",
      "Dhenkanal",
      "Jatani",
      "Jharsuguda",
      "Kendrapara",
      "Kendujhar",
      "Malkangiri",
      "Nabarangapur",
      "Paradip",
      "Parlakhemundi",
      "Pattamundai",
      "Phulabani",
      "Puri",
      "Rairangpur",
      "Rajagangapur",
      "Raurkela",
      "Rayagada",
      "Sambalpur",
      "Soro",
      "Sunabeda",
      "Sundargarh",
      "Talcher",
      "Tarbha",
      "Titlagarh"
    ],
    "Puducherry": [
      "Karaikal",
      "Mahe",
      "Pondicherry*",
      "Yanam"
    ],
    "Punjab": [
      "Amritsar",
      "Barnala",
      "Batala",
      "Bathinda",
      "Dhuri",
      "Faridkot",
      "Fazilka",
      "Firozpur",
      "Firozpur Cantt.",
      "Gobindgarh",
      "Gurdaspur",
      "Hoshiarpur",
      "Jagraon",
      "Jalandhar Cantt.",
      "Jalandhar",
      "Kapurthala",
      "Khanna",
      "Kharar",
      "Kot Kapura",
      "Longowal",
      "Ludhiana",
      "Malerkotla",
      "Malout",
      "Mansa",
      "Moga",
      "Mohali",
      "Morinda, India",
      "Mukerian",
      "Muktsar",
      "Nabha",
      "Nakodar",
      "Nangal",
      "Nawanshahr",
      "Pathankot",
      "Patiala",
      "Pattran",
      "Patti",
      "Phagwara",
      "Phillaur",
      "Qadian",
      "Raikot",
      "Rajpura",
      "Rampura Phul",
      "Rupnagar",
      "Samana",
      "Sangrur",
      "Sirhind Fatehgarh Sahib",
      "Sujanpur",
      "Sunam",
      "Talwara",
      "Tarn Taran",
      "Urmar Tanda",
      "Zira",
      "Zirakpur"
    ],
    "Rajasthan": [
      "Ajmer",
      "Alwar",
      "Bikaner",
      "Bharatpur",
      "Bhilwara",
      "Jaipur*",
      "Jodhpur",
      "Lachhmangarh",
      "Ladnu",
      "Lakheri",
      "Lalsot",
      "Losal",
      "Makrana",
      "Malpura",
      "Mandalgarh",
      "Mandawa",
      "Mangrol",
      "Merta City",
      "Mount Abu",
      "Nadbai",
      "Nagar",
      "Nagaur",
      "Nasirabad",
      "Nathdwara",
      "Neem-Ka-Thana",
      "Nimbahera",
      "Nohar",
      "Nokha",
      "Pali",
      "Phalodi",
      "Phulera",
      "Pilani",
      "Pilibanga",
      "Pindwara",
      "Pipar City",
      "Prantij",
      "Pratapgarh",
      "Raisinghnagar",
      "Rajakhera",
      "Rajaldesar",
      "Rajgarh (Alwar)",
      "Rajgarh (Churu)",
      "Rajsamand",
      "Ramganj Mandi",
      "Ramngarh",
      "Ratangarh",
      "Rawatbhata",
      "Rawatsar",
      "Reengus",
      "Sadri",
      "Sadulshahar",
      "Sadulpur",
      "Sagwara",
      "Sambhar",
      "Sanchore",
      "Sangaria",
      "Sardarshahar",
      "Sawai Madhopur",
      "Shahpura",
      "Shahpura",
      "Sheoganj",
      "Sikar",
      "Sirohi",
      "Sojat",
      "Sri Madhopur",
      "Sujangarh",
      "Sumerpur",
      "Suratgarh",
      "Taranagar",
      "Todabhim",
      "Todaraisingh",
      "Tonk",
      "Udaipur",
      "Udaipurwati",
      "Vijainagar, Ajmer"
    ],
    "Tamil Nadu": [
      "Arakkonam",
      "Aruppukkottai",
      "Chennai*",
      "Coimbatore",
      "Erode",
      "Gobichettipalayam",
      "Kancheepuram",
      "Karur",
      "Lalgudi",
      "Madurai",
      "Manachanallur",
      "Nagapattinam",
      "Nagercoil",
      "Namagiripettai",
      "Namakkal",
      "Nandivaram-Guduvancheri",
      "Nanjikottai",
      "Natham",
      "Nellikuppam",
      "Neyveli (TS)",
      "O' Valley",
      "Oddanchatram",
      "P.N.Patti",
      "Pacode",
      "Padmanabhapuram",
      "Palani",
      "Palladam",
      "Pallapatti",
      "Pallikonda",
      "Panagudi",
      "Panruti",
      "Paramakudi",
      "Parangipettai",
      "Pattukkottai",
      "Perambalur",
      "Peravurani",
      "Periyakulam",
      "Periyasemur",
      "Pernampattu",
      "Pollachi",
      "Polur",
      "Ponneri",
      "Pudukkottai",
      "Pudupattinam",
      "Puliyankudi",
      "Punjaipugalur",
      "Ranipet",
      "Rajapalayam",
      "Ramanathapuram",
      "Rameshwaram",
      "Rasipuram",
      "Salem",
      "Sankarankoil",
      "Sankari",
      "Sathyamangalam",
      "Sattur",
      "Shenkottai",
      "Sholavandan",
      "Sholingur",
      "Sirkali",
      "Sivaganga",
      "Sivagiri",
      "Sivakasi",
      "Srivilliputhur",
      "Surandai",
      "Suriyampalayam",
      "Tenkasi",
      "Thammampatti",
      "Thanjavur",
      "Tharamangalam",
      "Tharangambadi",
      "Theni Allinagaram",
      "Thirumangalam",
      "Thirupuvanam",
      "Thiruthuraipoondi",
      "Thiruvallur",
      "Thiruvarur",
      "Thuraiyur",
      "Tindivanam",
      "Tiruchendur",
      "Tiruchengode",
      "Tiruchirappalli",
      "Tirukalukundram",
      "Tirukkoyilur",
      "Tirunelveli",
      "Tirupathur",
      "Tirupathur",
      "Tiruppur",
      "Tiruttani",
      "Tiruvannamalai",
      "Tiruvethipuram",
      "Tittakudi",
      "Udhagamandalam",
      "Udumalaipettai",
      "Unnamalaikadai",
      "Usilampatti",
      "Uthamapalayam",
      "Uthiramerur",
      "Vadakkuvalliyur",
      "Vadalur",
      "Vadipatti",
      "Valparai",
      "Vandavasi",
      "Vaniyambadi",
      "Vedaranyam",
      "Vellakoil",
      "Vellore",
      "Vikramasingapuram",
      "Viluppuram",
      "Virudhachalam",
      "Virudhunagar",
      "Viswanatham"
    ],
    "Telangana": [
      "Adilabad",
      "Bellampalle",
      "Bhadrachalam",
      "Bhainsa",
      "Bhongir",
      "Bodhan",
      "Farooqnagar",
      "Gadwal",
      "Hyderabad*",
      "Jagtial",
      "Jangaon",
      "Kagaznagar",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Koratla",
      "Kothagudem",
      "Kyathampalle",
      "Mahbubnagar",
      "Mancherial",
      "Mandamarri",
      "Manuguru",
      "Medak",
      "Miryalaguda",
      "Nagarkurnool",
      "Narayanpet",
      "Nirmal",
      "Nizamabad",
      "Palwancha",
      "Ramagundam",
      "Sadasivpet",
      "Sangareddy",
      "Siddipet",
      "Sircilla",
      "Suryapet",
      "Tandur",
      "Vikarabad",
      "Wanaparthy",
      "Warangal",
      "Yellandu"
    ],
    "Tripura": [
      "Agartala*",
      "Belonia",
      "Dharmanagar",
      "Kailasahar",
      "Khowai",
      "Pratapgarh",
      "Udaipur"
    ],
    "Uttar Pradesh": [
      "Achhnera",
      "Agra",
      "Aligarh",
      "Allahabad",
      "Amroha",
      "Azamgarh",
      "Bahraich",
      "Chandausi",
      "Etawah",
      "Firozabad",
      "Fatehpur Sikri",
      "Hapur",
      "Hardoi *",
      "Jhansi",
      "Kalpi",
      "Kanpur",
      "Khair",
      "Laharpur",
      "Lakhimpur",
      "Lal Gopalganj Nindaura",
      "Lalitpur",
      "Lalganj",
      "Lar",
      "Loni",
      "Lucknow*",
      "Mathura",
      "Meerut",
      "Modinagar",
      "Moradabad",
      "Nagina",
      "Najibabad",
      "Nakur",
      "Nanpara",
      "Naraura",
      "Naugawan Sadat",
      "Nautanwa",
      "Nawabganj",
      "Nehtaur",
      "Niwai",
      "Noida",
      "Noorpur",
      "Obra",
      "Orai",
      "Padrauna",
      "Palia Kalan",
      "Parasi",
      "Phulpur",
      "Pihani",
      "Pilibhit",
      "Pilkhuwa",
      "Powayan",
      "Pukhrayan",
      "Puranpur",
      "Purquazi",
      "Purwa",
      "Rae Bareli",
      "Rampur",
      "Rampur Maniharan",
      "Rampur Maniharan",
      "Rasra",
      "Rath",
      "Renukoot",
      "Reoti",
      "Robertsganj",
      "Rudauli",
      "Rudrapur",
      "Sadabad",
      "Safipur",
      "Saharanpur",
      "Sahaspur",
      "Sahaswan",
      "Sahawar",
      "Sahjanwa",
      "Saidpur",
      "Sambhal",
      "Samdhan",
      "Samthar",
      "Sandi",
      "Sandila",
      "Sardhana",
      "Seohara",
      "Shahabad, Hardoi",
      "Shahabad, Rampur",
      "Shahganj",
      "Shahjahanpur",
      "Shamli",
      "Shamsabad, Agra",
      "Shamsabad, Farrukhabad",
      "Sherkot",
      "Shikarpur, Bulandshahr",
      "Shikohabad",
      "Shishgarh",
      "Siana",
      "Sikanderpur",
      "Sikandra Rao",
      "Sikandrabad",
      "Sirsaganj",
      "Sirsi",
      "Sitapur",
      "Soron",
      "Suar",
      "Sultanpur",
      "Sumerpur",
      "Tanda",
      "Thakurdwara",
      "Thana Bhawan",
      "Tilhar",
      "Tirwaganj",
      "Tulsipur",
      "Tundla",
      "Ujhani",
      "Unnao",
      "Utraula",
      "Varanasi",
      "Vrindavan",
      "Warhapur",
      "Zaidpur",
      "Zamania"
    ],
    "Uttarakhand": [
      "Bageshwar",
      "Dehradun",
      "Haldwani-cum-Kathgodam",
      "Hardwar",
      "Kashipur",
      "Manglaur",
      "Mussoorie",
      "Nagla",
      "Nainital",
      "Pauri",
      "Pithoragarh",
      "Ramnagar",
      "Rishikesh",
      "Roorkee",
      "Rudrapur",
      "Sitarganj",
      "Srinagar",
      "Tehri"
    ],
    "West Bengal": [
      "Adra",
      "Alipurduar",
      "Arambagh",
      "Asansol",
      "Baharampur",
      "Balurghat",
      "Bankura",
      "Darjiling",
      "English Bazar",
      "Gangarampur",
      "Habra",
      "Hugli-Chinsurah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kharagpur",
      "Kolkata",
      "Mainaguri",
      "Malda",
      "Mathabhanga",
      "Medinipur",
      "Memari",
      "Monoharpur",
      "Murshidabad",
      "Nabadwip",
      "Naihati",
      "Panchla",
      "Pandua",
      "Paschim Punropara",
      "Purulia",
      "Raghunathpur",
      "Raghunathganj",
      "Raiganj",
      "Rampurhat",
      "Ranaghat",
      "Sainthia",
      "Santipur",
      "Siliguri",
      "Sonamukhi",
      "Srirampore",
      "Suri",
      "Taki",
      "Tamluk",
      "Tarakeswar"
    ]
  };


  let findCityFunction = (stateName)=>{
    let firstLetter= [],cityName = "";
    for(state in cityData)
    {   
       // console.log(cityData[state]);

        if(state == stateName)
        {
               // stateArray = cityData[state].stateName;
                var city = cityData[stateName];
                for(i = 0; i < city.length; i++)
                {
                    cityName = city[i];
                    firstLetter.push(cityName.substring(0,1));
                }

        }
    }


   return firstLetter.toString();

};

let Cities =  findCityFunction("Tamil Nadu");
//console.log(Cities);
