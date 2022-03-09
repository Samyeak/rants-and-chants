const Contact = ({contact}) => (
    <div className="Contact">
      <div className="Contact-avatar">{contact.Initials}
      {contact.PhotoUrl && <img src={contact.PhotoUrl} alt={contact.Initials}></img>}
      </div>
      <span className="Contact-name">{contact.Name}</span>
      <a href={"mailto:" + contact.Email}>{contact.Email}</a>
    </div>
  );

  export default Contact;
