import Image from "next/image";

import useModal from "../hooks/useModal";

import CloseIcon from "./icons/CloseIcon";
import ModalBackground from "./modal/ModalBackground";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-10 flex items-end justify-between border-b border-b-blue-dark p-3 bg-gray-100 text-center">
      <strong className="text-2xl">령로그</strong>
      <AccountId />
    </header>
  );
}

const AccountId = () => {
  const { modalVisible, openModal, closeModal } = useModal();

  return (
    <>
      <span
        className="text-gray-500 underline decoration-wavy decoration-blue underline-offset-4 cursor-pointer"
        onClick={openModal}
      >
        @soryeongk
      </span>
      {modalVisible && <LinkToAccountPageModal closeModal={closeModal} />}
    </>
  );
};

type LinkToAccountPageModalProps = {
  closeModal: () => void;
};

const LinkToAccountPageModal = ({
  closeModal,
}: LinkToAccountPageModalProps) => {
  return (
    <>
      <ModalBackground closeModal={closeModal} />
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-x-4 bg-white rounded-3xl overflow-hidden w-[275px] h-[275px]">
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={closeModal}
        >
          <CloseIcon />
        </div>
        <a href="https://github.com/soryeongk" target="_blank" rel="noreferrer">
          <div className="flex flex-col items-center gap-y-1">
            <div className="relative w-9 h-9">
              <Image
                src="/images/github-mark.png"
                alt="깃헙 아이콘"
                fill={true}
              />
            </div>
            <span>github</span>
          </div>
        </a>
        <a
          href="https://www.instagram.com/soryeongk"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-col items-center gap-y-1">
            <div className="relative w-9 h-9">
              <Image
                src="/images/instagram.png"
                alt="깃헙 아이콘"
                fill={true}
              />
            </div>
            <span>instagram</span>
          </div>
        </a>
      </div>
    </>
  );
};
