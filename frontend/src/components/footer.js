import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright: HMQS
        
       
       
      </div>
    </MDBFooter>
  );
}