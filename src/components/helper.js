import {
    faFacebook,
    faGoogle,
    faLinkedin,
    faEdit,
    faSpinner,
    faPlusCircle
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  
  
  const Icons = () => {
    return library.add(faFacebook, faGoogle, faLinkedin, faEdit, faSpinner, faPlusCircle);
  };
  
  
  export default Icons;
  