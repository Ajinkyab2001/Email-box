import React,{useEffect} from 'react'
import "./RenderMail.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateIsReadToTrue } from "../../../Store/Slice/fetchEmailsSlice";

const ViewEmail = () => {
    const {id,render} = useParams()
    const {singleObj} = useSelector((state)=>state.fetchedData) 
    const dispatch = useDispatch()

    console.log(singleObj.isRead)

   useEffect(()=>{
    console.log(id)
    if(!singleObj.isRead && render === 'inbox'){

        dispatch(updateIsReadToTrue(id,singleObj))
    }
   },[])
  return (
    <main>
      <section className="glass">
        <div className="games">
          <div
            className="status"
            style={{ marginTop: "-40px", marginBottom: " 10px" }}
          ></div>
          <div className="cards">
            <div >
              <h4>{render === 'inbox' ? singleObj.senderName:singleObj.receiverMail}</h4>
             {render === 'inbox' && <b>{singleObj.senderEmail}</b>}
            </div>
            <hr/>
            <p>subject:{singleObj.subject}</p>
            <hr/>
            <p>{singleObj.body}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ViewEmail