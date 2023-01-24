type ModalBackgroundProps = {
  closeModal?: () => void;
};

const ModalBackground = ({ closeModal }: ModalBackgroundProps) => {
  return (
    <div
      onClick={closeModal}
      className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-30"
    />
  );
};

export default ModalBackground;
