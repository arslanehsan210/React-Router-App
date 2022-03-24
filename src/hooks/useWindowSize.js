import {useState, useEffect} from 'react'

const useWindowSize = ()=>{
    
    const [windowSize,setWindowSize] = useState({
        width : undefined,
        height : undefined
    });

    useEffect(()=>{
          
        //  runs it only once at load time
             const handelResize = ()=>{
                 setWindowSize({
                     width : window.innerWidth,
                     height: window.innerHeight
                 });
             }


             handelResize(); 
 
            //  contine the resize functionality

             window.addEventListener('resize', handelResize)


         const cleanUp = ()=>{

            console.log('run when dep change');
            window.removeEventListener('resize',handelResize)
         }

         return cleanUp

    },[])

    return windowSize;
}


export default useWindowSize;