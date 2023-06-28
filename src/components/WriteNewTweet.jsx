import { useState } from "react";
import { useAuth } from "../";
import Modal from "../utils/Modal";
import TweetForm from "./NewTweetHandler";
export default function WhatsNew() {
  const [modalOpen, setModalOpen] = useState(false);
  const { currentUser } = useAuth();

  return (
    <div className="whatsNewSection">
      <img src={currentUser.profileAvatar} alt="" width="50px" />

      <input
        type="text"
        name="newTweet"
        id=""
        placeholder="What's New"
        onClick={(e) => {
          e.preventDefault();
          setModalOpen(true);
        }}
      />

      {modalOpen && (
        <Modal status={modalOpen} setCloseModal={setModalOpen}>
          <TweetForm setModalOpen={setModalOpen} status={modalOpen} />
        </Modal>
      )}

      <div></div>
    </div>
  );
}
