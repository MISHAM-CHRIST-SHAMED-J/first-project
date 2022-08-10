import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";



function Bcard(props){
    return(
       
     
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.cData.plan}</h5>
            <h6 className="card-price text-center">{props.cData.price}<span className="period">/month</span></h6>
            <hr></hr>
            <ul className="fa-ul">
               
                    {
                        props.cData.feat.map((list)=>{
                            return( <li className={!list.isEnable ? 'text-muted':''}>
                                <span className="fa-li">
                                    {
                                        list.isEnable ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />
                                    }
                                </span>
                                <span>
                                    {
                                        list.isBold ? <strong>{list.title}</strong> : list.title
                                    }
                                </span>
                                
                                </li>
                            );
                        })
                    }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
     


    );
}

export default Bcard;