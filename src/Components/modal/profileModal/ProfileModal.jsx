import React ,{useState} from 'react'
import './ProfileModal.css';
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
    import { useUser } from '../../../Context/user-context';
export default function ProfileModal({userProfile}) {
    const [bio,setBio]=useState(userProfile?.bio);
    const [website,setWebsite]=useState(userProfile?.website);
    const [avatar,setAvatar]=useState(userProfile?.avatarUrl)
    const [firstName,setFirstName]=useState(userProfile?.firstName)
    const [lastName,setLastName]=useState(userProfile?.lastName)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    console.log('userprofile',userProfile)

    const {EditProfile} =useUser();

    const updatedhandler = () => {
        EditProfile({ ...userProfile, avatarUrl: avatar, bio: bio, website:website,firstName:firstName,lastName:lastName })
       
    }
    const mediahandler = (e) => {
        const objectURL = URL.createObjectURL(e.target.files[0])
        setAvatar(objectURL)
};
    return (
        <div>
            <Button onClick={onOpen} id='profile-modal'>Edit Profile</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Edit Profile</ModalHeader>
                    <ModalCloseButton />
                    <span id='profile-modal-picture-container'><img src={userProfile?.avatarUrl} alt="profile" id='profile-modal-picture' /></span>
                    <ModalBody pb={6} id='profile-form' >
                        <input type='file' onChange={mediahandler} />
                         <label htmlFor="name">First Name</label> 
                        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/> 
                         <label htmlFor="name">Last Name</label> 
                        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/> 
                        <label htmlFor="bio" >Bio</label>
                        <input type="text" value={bio} onChange={(e)=>setBio(e.target.value)}/>
                        <label htmlFor="website" >Website</label>
                        <input type="text" value={website} onChange={(e)=>setWebsite(e.target.value)}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={updatedhandler}>
                            Update
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    )
}
