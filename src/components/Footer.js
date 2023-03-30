import React from 'react';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import "../styles/footer.css";




function Footer(){
    return (
        <div className="footer">
            <div>
                <GitHub/>
                <LinkedIn/>
            </div>
            <p> &copy; 2023 Clyford Hypolite</p>
            </div>
    );
}
export default Footer;