import styled from "styled-components";
import { theme } from "styled-tools";
import { Channels, Contacts } from "components";
import { useEffect, useState } from "react";
import { getChannels, getContacts } from "utils";

export interface ConnectionData {
  id: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  connect: string;
  address: string;
}

function Connection() {
  const [contactList, setContactList] = useState<ConnectionData[]>([]);
  const [channelList, setChannelList] = useState<ConnectionData[]>([]);

  useEffect(() => {
    (async function () {
      const contacts = await getContacts();
      const channels = await getChannels();
      setContactList(contacts);
      setChannelList(channels);
    })();
  }, []);

  return (
    <StyledContainer>
      <Contacts contactList={contactList} />
      <Channels channelList={channelList} />
    </StyledContainer>
  );
}

export default Connection;

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  ${theme("fonts.display")}

  svg {
    margin-right: 1rem;
  }

  span {
    position: relative;
    width: 10rem;

    &::after {
      position: absolute;
      right: 0;
      content: ":";
      margin: 0 0.5rem;
    }
  }
`;
