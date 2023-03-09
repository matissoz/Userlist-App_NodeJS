import { useQuery } from 'react-query';

import { getAllUsers } from './utils/apiService'
import style from './styles/App.module.scss'
import List from './components/List/List';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {

  const getQuery = useQuery({
    queryKey: ['usersData'],
    queryFn: getAllUsers,
    keepPreviousData: true,
  });

  
  return (
    <div className={style.app}>
      <Header/>
      <main className={style.main}>   
        <List getQuery={getQuery}/>
      </main>
      <Footer/>
    </div>
  )
}


export default App
