import { useMutation, useQueryClient } from 'react-query'
import { useState } from 'react'

import Modal from '../Modal/Modal'
import Button from '../Shared/Button/Button'
import Form from '../Form/Form'
import { addNewUser } from '../../utils/apiService'
import style from './Navbar.module.scss'


const Navbar = () => {

    const [openModal, setOpenModal] = useState(false)

    const queryClient = useQueryClient()
    const AddPostMutation = useMutation({
        mutationFn: addNewUser,
        onSuccess:()=>{
            queryClient.invalidateQueries("usersData")
        }
    })


    return (  
        <div>
            <Button
                onClick={() => setOpenModal(true)}
            >
                Add New
            </Button>
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <Form
                    buttonLabel='Submit'
                    mutation={AddPostMutation}
                    setOpenModal={setOpenModal}
                />
            </Modal>
        </div>
    );
}


export default Navbar;