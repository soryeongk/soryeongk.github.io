import { PropsWithChildren } from "react";

const List = ({ children }: PropsWithChildren) => {
  return <ul className="flex flex-col gap-y-[1px] bg-slate-100">{children}</ul>;
};

const ListItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="flex flex-col gap-y-1 py-3 px-2 bg-white">{children}</li>
  );
};

List.Item = ListItem;

export default List;
