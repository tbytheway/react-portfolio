import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faLinkedin
  );
};

export default Icons;
