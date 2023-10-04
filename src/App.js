 import { useAuthState } from "react-firebase-hooks/auth";
 import {auth} from '../src/firebase'
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
   const style = {
       appContainer : `max-w-[728px] mx-auto text-center`,
       sectionContainer: ` flex flex-col mt-10 bg-gray-100 h-[90vh] shadow-xl relative `
   }


function App() {
    const user = useAuthState(auth)
  return (
      <div className={style.appContainer}>
         <section className={style.sectionContainer}>
              <Navbar />
              {
                user ?   <Chat /> : null
              }
             
         </section>
     </div>
  );
}

export default App;
