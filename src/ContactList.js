const ContactList = (props) =>(
    <div className="ContactList">
        <div className="ContactList-title">Contacts</div>
        {props.children}
      </div>
  );

  export default ContactList;