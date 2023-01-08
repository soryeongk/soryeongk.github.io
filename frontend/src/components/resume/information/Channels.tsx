import { ResumeContent } from "components";
import { ConnectionData, StyledContent } from "./Connection";

function Channels(props: { channelList: ConnectionData[] }) {
  return (
    <ResumeContent title="Channels">
      {props.channelList.map((channel) => (
        <StyledContent href={`https://${channel.address}`} key={channel.id}>
          <channel.icon />
          <span>{channel.connect}</span>
          @soryeongk | {channel.address}
        </StyledContent>
      ))}
    </ResumeContent>
  );
}

export default Channels;
