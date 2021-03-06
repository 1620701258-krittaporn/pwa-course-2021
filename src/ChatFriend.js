import './App.css';
import { Link } from 'react-router-dom';

function AllChatInterface() {

    return(
        <div className ="App">

          <div className="AllChat-Header">
            <div className="Search-Box">
             [Search Box] [Search Box] [Search Box]
            </div>

          </div>

          <div className="Middle-Zone">
              <div className = "FriendChat-Box">

                <div className = "Name-Box">
                    Ultimate Cat [Test]
                </div>

                <div className = "LastChat">
                   So Hungry pls back to home 
                </div>



                  <div className = "FriendPic">              
                     <img src= "cat.png" alt = "profile.png" width="100px" height="105px"/>
                    </div>
                </div>
            </div>


            <div className ="image-button">

           
             <Link to="/" className="image-between">
                 <img src= "profile.png" alt = "profile.png" width="100px" height="100px"/> 
             </Link>

             <Link to="/AllChat" className="image-between">
                 <img src= "friend list.png" alt = "profile.png" width="100px" height="100px"/> 
             </Link>

             <Link to="/" className="image-between">
                 <img src= "dice.png" alt = "profile.png" width="100px" height="100px"/> 
             </Link>

             <Link to="/" className="image-between">
                <img src= "list.png" alt = "profile.png" width="100px" height="100px"/> 
             </Link>

            </div>   
        </div>

    );
    
}

export default AllChatInterface;