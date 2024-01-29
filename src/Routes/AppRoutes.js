import { Routes, Route, Navigate } from 'react-router';

import Home from '../components/Home/Home';
import CardWorkspace from '../components/CardWorkspace/CardWorkspace';
import CardCollections from '../components/CardCollections/CardCollections';
import Contacts from '../components/Contacts/Contacts';
import News from '../components/News/News';
import MyCollections from '../components/CardCollections/MyCollections/MyCollections';
import Sets from '../components/CardCollections/ReadySets/ReadySets';
import Testing from '../components/CardCollections/Testing/Testing';
import Learning from '../components/CardCollections/Learning/Learning';
import EditSet from '../components/CardCollections/MyCollections/EditSet/EditSet';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workspace' element={<CardWorkspace />} />
            <Route path='/collections' element={<CardCollections />}>
                <Route index element={<Navigate replace to="/collections/my-collections" />} />
                <Route path='my-collections' element={<MyCollections />} />
                <Route path='sets' element={<Sets />} />
                <Route path='testing' element={<Testing />} />
                <Route path='learning' element={<Learning />} />
                <Route path='editing' element={<EditSet />} />
            </Route>
            <Route path='/news' element={<News />} />
            <Route path='/contacts' element={<Contacts />} />
        </Routes>

    )
}

export default AppRoutes