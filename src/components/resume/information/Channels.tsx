import { ResumeContent } from "components";
import { ConnectionData, StyledContent } from "./Connection";

function Channels(props: { channelList: ConnectionData[] }) {
  return (
    <ResumeContent title="Channels">
      {props.channelList.map((channel) => (
        <StyledContent key={channel.id}>
          <channel.icon />
          <span>{channel.connect}</span>
          {channel.address}
        </StyledContent>
      ))}
    </ResumeContent>
  );
}

export default Channels;
