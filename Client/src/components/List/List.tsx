import { UseQueryResult } from 'react-query'

import { ApiResponse } from '../../utils/apiService'
import ListItem from './ListItem/ListItem'
import style from './List.module.scss'


type Props = {
    getQuery: UseQueryResult<ApiResponse, unknown>;
}


const List = ({ 
    getQuery 
}: Props) => {

    if(getQuery.isLoading) {
        return (
            <div className={style.noData}>
                <h3>Loading...</h3>
            </div>
        )
    }

    if(getQuery.isError) {
        return (
            <div className={style.noData}>
                 <h3>Loading...</h3>
            </div>
        )
    }

    const usersData = getQuery.data?.users;

    if(usersData?.length == 0) {
        return (
            <div className={style.noData}>
                <h3>No user has been added yet!</h3>
            </div>
        )
    } 
    

    return (
        <>
            <div className={style.list}>
                {usersData && usersData
                    .map(userData => 
                    <ListItem 
                        key={userData.id} 
                        user={userData} 
                    />
                )}
            </div>
        </>
    )
}


export default List;