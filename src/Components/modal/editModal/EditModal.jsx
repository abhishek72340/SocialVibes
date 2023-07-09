import React, { useState } from 'react';
import me from '../../../images/me.jpg'
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsEmojiSmileFill } from 'react-icons/bs';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,

}
  from '@chakra-ui/react'
import { AiOutlineEdit } from 'react-icons/ai';

import { useExplore } from '../../../Context/explore-context';
import { useAuth } from '../../../Context/auth-context';
export default function EditModal({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [content, setContent] = useState(data.content)

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const { EditPost } = useExplore();
  const {userDetails}=useAuth();

  const textareaChangeHandler = (e) => {
    setContent(e.target.value)
  }
  return (
    <>
      <Button onClick={onOpen} style={{backgroundColor:'white'}}><AiOutlineEdit /></Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} id='modal-profile-input-field'>

            <div id='modal-post-icon'>
              <span><MdPhotoSizeSelectActual /> </span>
              <span><BsEmojiSmileFill /></span>
            </div>

            <span><img src={userDetails?.avatarUrl} alt="img" id='modal-profile' /></span>
            <textarea name="" id="modal-post-input-text" cols="30" rows="10" placeholder='whats happening' value={content} onChange={textareaChangeHandler}></textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => EditPost({ content: content }, data._id)}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}