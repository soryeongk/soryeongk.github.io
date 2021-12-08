import { ResumeContent } from "components";
import { ConnectionData, StyledContent } from "./Connection";

function Contacts(props: { contactList: ConnectionData[] }) {
  return (
    <ResumeContent title="Contacts">
      {props.contactList.map((contact) => (
        <StyledContent key={contact.id}>
          <contact.icon />
          <span>{contact.connect}</span>
          {contact.address}
        </StyledContent>
      ))}
    </ResumeContent>
  );
}

export default Contacts;
