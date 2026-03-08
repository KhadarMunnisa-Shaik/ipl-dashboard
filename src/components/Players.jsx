import "../styles/players.css"
import teamLogos from "../utils/teamLogos"

const teams = [
{
name: "Chennai Super Kings",
short: "CSK",
players:[
"Ruturaj Gaikwad (c)","MS Dhoni","Devon Conway","Ravindra Jadeja",
"Rachin Ravindra","Shivam Dube","Rahul Tripathi","Sam Curran",
"Matheesha Pathirana","Noor Ahmad","Khaleel Ahmed","Mukesh Choudhary",
"Shreyas Gopal","Deepak Hooda","Vansh Bedi","Shaik Rasheed",
"Vijay Shankar","Anshul Kamboj","Gurjapneet Singh","Nathan Ellis",
"Jamie Overton","Ramakrishna Ghosh"
]
},

{
name:"Mumbai Indians",
short:"MI",
players:[
"Hardik Pandya (c)","Rohit Sharma","Suryakumar Yadav","Tilak Verma",
"Robin Minz","Ryan Rickelton","Shrijith Krishnan","Naman Dhir",
"Mitchell Santner","Bevon-John Jacobs","Trent Boult","Deepak Chahar",
"Karn Sharma","Allah Ghazanfar","Ashwani Kumar","Reece Topley",
"Venkata Satyanarayana Penmetsa","Jasprit Bumrah"
]
},

{
name:"Royal Challengers Bengaluru",
short:"RCB",
players:[
"Virat Kohli (c)","Phil Salt","Jitesh Sharma","Rajat Patidar",
"Liam Livingstone","Josh Hazlewood","Rasikh Dar","Suyash Sharma",
"Bhuvneshwar Kumar","Swapnil Singh","Tim David","Jacob Bethell",
"Romario Shepherd","Nuwan Thushara","Lungi Ngidi","Yash Dayal",
"Devdutt Padikkal","Manoj Bhandage","Mohit Rathee","Abhinandan Singh"
]
},

{
name:"Kolkata Knight Riders",
short:"KKR",
players:[
"Ajinkya Rahane (c)","Quinton de Kock","Rahmanullah Gurbaz","Rinku Singh",
"Sunil Narine","Andre Russell","Venkatesh Iyer","Anrich Nortje",
"Angkrish Raghuvanshi","Manish Pandey","Mayank Markande",
"Varun Chakaravarthy","Vaibhav Arora","Harshit Rana",
"Spencer Johnson","Anukul Roy","Rovman Powell","Luvnith Sisodia"
]
},

{
name:"Delhi Capitals",
short:"DC",
players:[
"Axar Patel (c)","KL Rahul","Faf du Plessis","Donovan Ferreira",
"Jake Fraser-McGurk","Mukesh Kumar","Manvanth Kumar","Ajay Mandal",
"Karun Nair","Darshan Nalkande","T Natarajan","Vipraj Nigam",
"Abhishek Porel","Sameer Rizvi","Ashutosh Sharma","Mohit Sharma",
"Mitchell Starc","Madhav Tiwari","Tristan Stubbs","Kuldeep Yadav",
"Dushmantha Chameera"
]
},

{
name:"Punjab Kings",
short:"PBKS",
players:[
"Shreyas Iyer (c)","Josh Inglis","Prabhsimran Singh","Nehal Wadhera",
"Shashank Singh","Harpreet Brar","Arshdeep Singh","Yuzvendra Chahal",
"Marcus Stoinis","Marco Jansen","Lockie Ferguson","Vyshak Vijay Kumar",
"Yash Thakur","Vishnu Vinod","Aaron Hardie","Priyansh Arya",
"Musheer Khan","Suryansh Shedge","Pyla Avinash"
]
},

{
name:"Rajasthan Royals",
short:"RR",
players:[
"Sanju Samson (c)","Yashasvi Jaiswal","Riyan Parag","Dhruv Jurel",
"Shimron Hetmyer","Shubham Dubey","Vaibhav Suryavanshi","Nitish Rana",
"Wanindu Hasaranga","Jofra Archer","Akash Madhwal",
"Kumar Kartikeya Singh","Tushar Deshpande","Yudhvir Singh",
"Fazalhaq Farooqi","Kwena Maphaka","Ashok Sharma","Sandeep Sharma"
]
},

{
name:"Sunrisers Hyderabad",
short:"SRH",
players:[
"Pat Cummins (c)","Ishan Kishan","Heinrich Klaasen","Travis Head",
"Abhishek Sharma","Nitish Kumar Reddy","Abhinav Manohar","Rahul Chahar",
"Harshal Patel","Adam Zampa","Simarjeet Singh","Zeeshan Ansari",
"Jaydev Unadkat","Atharva Taide","Eshan Malinga","Sachin Baby"
]
},

{
name:"Gujarat Titans",
short:"GT",
players:[
"Shubman Gill (c)","Jos Buttler","Sai Sudharsan","Rashid Khan",
"Mohammed Siraj","Prasidh Krishna","Kagiso Rabada","Glenn Phillips",
"Anuj Rawat","Kumar Kushagra","Mahipal Lomror","Washington Sundar",
"Gurnoor Brar","Gerald Coetzee","Manav Suthar","Rahul Tewatia",
"Arshad Khan","Nishant Sindhu","Sai Kishore","Jayant Yadav"
]
},

{
name:"Lucknow Super Giants",
short:"LSG",
players:[
"Rishabh Pant (c)","Nicholas Pooran","David Miller","Aiden Markram",
"Mitchell Marsh","Avesh Khan","Mayank Yadav","Mohsin Khan",
"Ravi Bishnoi","Abdul Samad","Aryan Juyal","Akash Deep",
"Himmat Singh","M Siddharth","Digvesh Singh","Shahbaz Ahmed",
"Akash Singh","Shamar Joseph","Prince Yadav","Yuvraj Chaudhary",
"Rajvardhan Hangargekar","Arshin Kulkarni","Matthew Breetzke"
]
}
]

function Players(){

return(

<div className="players-container">

{teams.map((team,i)=>(

<div className="team-card" key={i}>

<div className="team-header">

<img 
src={teamLogos[team.name]} 
alt={team.name}
className="team-logo"
/>

<h2>{team.name}</h2>

</div>

<ul>

{team.players.map((p,index)=>(
<li key={index}>{p}</li>
))}

</ul>

</div>

))}

</div>

)
}

export default Players