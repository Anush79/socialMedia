import { useState } from "react";
import { useAuth } from "../";
import Modal from "../utils/Modal";
import '../styles/whatsNewSection.css'

import TweetForm from "./NewTweetHandler";
import BasicMenu from './FiltersMenu'
export default function WhatsNew() {
  const [modalOpen, setModalOpen] = useState(false);
  const { currentUser } = useAuth();

  return (
    <div className="whatsNewSection header">
      <img
            src={
              currentUser?.profileAvatar?.length < 1
                ? `https://ui-avatars.com/api/?name=${currentUser.firstName}+${currentUser.lastName}`
                : currentUser?.profileAvatar
            }
            alt={`${currentUser?.username} profile picture`}
            
            width={"50px"}
          />

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
      <span><BasicMenu/></span>

      {modalOpen && (
        <Modal status={modalOpen} setCloseModal={setModalOpen}>
          <TweetForm setModalOpen={setModalOpen} status={modalOpen} />
        </Modal>
      )}

      
    </div>
  );
}
