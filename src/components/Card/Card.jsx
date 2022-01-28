import React from "react";
 
import styles from './Card.module.scss'
const Card = ({ results }) => {
  let display;

  if (results) {
    console.log(results);

    display = results.map((x) => {
      let { id, name, image, location, status } = x;

      return (
        <div className="col-4 mb-3 position-relative" key={id}>
          {/* card */}
          <div className={styles.cards}>
            <img src={image} alt={name} className="img-fluid" />
            {/* <div className= {`${styles.content}`}  > */}
            <div className= {styles.content} >
              <div className="fs-4 fw-bold mb-5">{name}</div>
               {/* Last location */}
              
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
         
{
(()=>{

if(status==="Dead"){

return ( <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div> )

}
else if(status==="Alive")
{
return ( <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div> )
}
else{
  return ( <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div> )

}
})()


}

         
        </div>
      );
    });
  }
  //else block
  else {
    display = "No character found";
  }

  return <>{display}</>;
};

export default Card;
