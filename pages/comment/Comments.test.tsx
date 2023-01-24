import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import CommentPage from "./index.page";

describe("<Comments /> 컴포넌트 테스트", () => {
  const INITIAL_DATA = {
    comments: [
      {
        _id: "id1",
        content: "content",
        writer: "soryeongk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: "id2",
        content: "content",
        writer: "soryeongk2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  };
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        initialData: INITIAL_DATA,
      },
    },
  });

  const testPageComponent = (
    <QueryClientProvider client={queryClient}>
      <CommentPage />
    </QueryClientProvider>
  );

  it("방명록을 입력할 수 있는 텍스트 창이 있다.", () => {
    render(testPageComponent);

    const textboxElement = screen.getAllByRole("textbox");
    expect(textboxElement).toBeInTheDocument;
  });

  it(`방명록이 ${INITIAL_DATA.comments.length}개가 나온다.`, async () => {
    render(testPageComponent);

    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).toHaveLength(INITIAL_DATA.comments.length);
  });
});
