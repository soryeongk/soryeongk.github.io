import React from "react";

const useModal = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const openModal = () => {
    return setModalVisible(true);
  };

  const closeModal = () => {
    return setModalVisible(false);
  };

  return { modalVisible, openModal, closeModal };
};

export default useModal;
