import "./App.css";
import Contact from "./Contact";
import ContactList from "./ContactList";
// import {CenterOnScreen} from "./CenterOnScreen";
// import FizzBuzzSpiral from "./FizzBuzzSpiral";
// import FractalTree from "./components/Fractal/FractalTree";
import ReactDOM from 'react-dom';
import Feed from "./components/Feed/Feed";


const contactData = [
  {
    Initials: "SM",
    Name: "Samyeak Maharjan",
    Email: "mail@samyeak.com.np",
    PhotoUrl: 'https://frontarm.com/courses/react-fundamentals/bill-gates.jpg'
  },
  {
    Initials: "RS",
    Name: "Rushmina Shrestha",
    Email: "mail@rushmina.com.np",
  }
];

const contacts = contactData.map((contact, i) => <Contact contact={contact} key={i}></Contact>);

const AddContact = ({updateEvent}) => <button onClick={updateEvent}>Add</button>;
function updateEvent(){
  let updatedContacts = contactData.concat(
    {
      Initials: "AS",
      Name: "Anoj Shrestha",
      Email: "mail@anoj.com.np",
    });
    ReactDOM.render(<ContactList>
      {updatedContacts}
      <AddContact updateEvent={updateEvent}></AddContact>
    </ContactList>,document.getElementById('root'));
}

const App = () => (
  <>
    <Feed></Feed>
      {/* <ContactList>
        {contacts}
        <AddContact updateEvent={updateEvent}></AddContact>
      </ContactList> */}
      
      {/* <FizzBuzzSpiral count={15}></FizzBuzzSpiral> */}
      {/* <FractalTree maxDepth={8} /> */}
    {/* <CenterOnScreen>
        <span>INSERT COIN</span>
    </CenterOnScreen> */}
      {/* {FizzBuzzSpiral} */}
  </>
);

export default App;
  