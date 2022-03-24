import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';

import { Route, Routes} from 'react-router-dom';


import EditPost from './EditPost';
import DataProvider from './context/DataProvider';


function App() {
 

  
  // const {data,fetchError, isLoading}=useAxiousFetch('http://localhost:3002/posts')


  // useEffect(()=> {
  //   setPosts(data)
  // },[data])

  //   const fetchApi = async () => {
  //     try {
  //       const response =await api.get('/posts')
  //       setPosts(response.data)
  //     } catch (error) {
  //       if (error.response) {
  //         // The request was made and the server responded with a status code
  //         // that falls out of the range of 2xx
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log('Error', error.message);
  //       }
  //     }
  //   }
  //   fetchApi();
  // },


  return (
    <div className="App">

      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post" element={<NewPost />} />
          <Route exact path="/edit/:id" element={<EditPost />} />
          <Route exact path="/post/:id" element={<PostPage />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />

    </div>
  );
}

export default App;