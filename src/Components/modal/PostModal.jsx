import './PostModal.css';
import me from '../../images/me.jpg'
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
  // Lorem,
  ModalFooter
}
  from '@chakra-ui/react'
export function PostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} id='post-modal'>Post</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} id='modal-profile-input-field'>

            <div id='modal-post-icon'>
              <span><MdPhotoSizeSelectActual /></span>
              <span><BsEmojiSmileFill /></span>
            </div>

            <span><img src={me} alt="img" id='modal-profile' /></span>
            <textarea name="" id="modal-post-input-text" cols="30" rows="10" placeholder='whats happening'></textarea>
          </ModalBody>

          <ModalFooter>
            <Button id='modal-post-button' mr={3}>
              Post
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}