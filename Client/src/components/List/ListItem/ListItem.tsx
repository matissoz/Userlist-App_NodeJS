import { useMutation, useQueryClient } from 'react-query'
import { useState } from 'react'

import { deleteUser, editUser, User } from '../../../utils/apiService'
import Form from '../../Form/Form'
import Modal from '../../Modal/Modal'
import Button from '../../Shared/Button/Button'
import style from './ListItem.module.scss'


type Props = {
    user: User;
}


const ListItem = ({ 
    user,
}: Props) => {

    const { id, name, email, password, age } = user
    const [displayPassword, setDisplayPassword] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    
    const queryClient = useQueryClient()

    const EditPostMutation = useMutation({
        mutationFn: editUser,
        onSuccess:()=>{
            queryClient.invalidateQueries("usersData")
        }
    })

    const DeletePostMutation = useMutation({
        mutationFn: deleteUser,
        onSuccess:()=>{
            queryClient.invalidateQueries("usersData")
        }
    })
    
    const deleteHandler = (( userId:string ) => {
        DeletePostMutation.mutate(userId);
    })

    
    return (
        <>
            <div className={style.listItem}>
                <span className={style.listItem__info}>
                    <span className={style.listItem__infoData}>
                        <h2>Name:</h2>
                        <p>{name}</p>
                    </span>
                    <span className={style.listItem__infoData}>
                        <h2>Age: </h2>
                        <p>{age}</p>
                    </span>
                    <span className={style.listItem__infoData}>
                        <h2>Email: </h2>
                        <p>{email}</p>
                    </span>
                    <span className={style.listItem__infoData}>
                        <h2 className={style.password}> Password: </h2>  
                        <p className={style.positionRelative}>
                            <span className={style.positionAbsolute}>
                                {displayPassword ? password : "*******"}
                            </span>
                        </p>
                        <span>
                            <Button 
                                onClick={() => setDisplayPassword(!displayPassword)}
                                BtnStyle={'tertiary'}
                            >
                                View Password
                            </Button>
                        </span>                
                    </span>
                </span>
                <span className={style.listItem__buttonsWrapper}>
                    <Button
                        BtnStyle={"secondary"}
                        onClick={() => setOpenModal(true)}
                    >
                        Edit
                    </Button>
                    <Button
                        BtnStyle={"delete"}
                        onClick={() => deleteHandler(id!)}
                    >
                        Delete
                    </Button>
                </span>
            </div>
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <Form 
                    buttonLabel='Edit'
                    user={user}
                    mutation={EditPostMutation}
                    setOpenModal={setOpenModal}
                />
            </Modal>
        </>
    )
}


export default ListItem;