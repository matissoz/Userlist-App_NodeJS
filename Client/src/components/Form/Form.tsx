import { UseMutationResult } from 'react-query'
import { useEffect, useState } from 'react'

import { User } from '../../utils/apiService'
import Button from '../Shared/Button/Button'
import Input from '../Shared/Input/Input'
import style from './Form.module.scss'


type Props = {
    buttonLabel: string
    user?: User
    mutation: UseMutationResult<any, unknown, User, unknown>
    setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>
}

export type FormData = {
    id?: string,
    name: string,
    age: string,
    email: string,
    password: string,
};
  
const initialData: FormData = {
    name: '',
    age: '',
    email: '',
    password: '',
};


const Form = ({
    buttonLabel,
    user,
    mutation,
    setOpenModal
}: Props) => {

    const[formData, setFormData] = useState<FormData>(initialData);

    useEffect(() => {    
        if(user){
            const { id, name, email, password, age } = user
            setFormData({
                id,
                name,
                age,
                email,
                password,
            })
        }
    }, [])

    const submitHandler = (() => {
        mutation.mutate(formData);
        if(setOpenModal) setOpenModal(false);
    })


    return (
        <form 
            className={style.form}
            onSubmit={(e) => {
                e.preventDefault();
                submitHandler();
            }}
        >
            <div>                
                <Input 
                    label='Name:'  
                    required={true}        
                    placeholder='e.g. Jack Smith'
                    type='text'
                    value={formData.name}
                    onChange={(value) =>
                        setFormData({
                            ...formData,
                            name: value
                        })
                    }
                />
            </div>
            <div>                
                <Input 
                    label='Age:'       
                    type='number'   
                    required={true}   
                    placeholder='e.g. 18'
                    value={formData.age}
                    onChange={(value) =>
                        setFormData({
                            ...formData,
                            age: value
                        })
                    }
                />
            </div>
            <div>                
                <Input 
                    label='Email:'           
                    placeholder='e.g. JackSmith@provider.com'
                    type='text'
                    required={true}   
                    value={formData.email}
                    onChange={(value) =>
                        setFormData({
                            ...formData,
                            email: value
                        })
                    }
                />
            </div>
            <div>                
                <Input 
                    label='Password:'          
                    placeholder='********'
                    type='password'
                    required={true}   
                    value={formData.password}
                    onChange={(value) =>
                        setFormData({
                            ...formData,
                            password: value
                        })
                    }
                />
            </div>
            <div>
                <Button>
                    {buttonLabel}
                </Button>
            </div>
        </form>
    )
}


export default Form;