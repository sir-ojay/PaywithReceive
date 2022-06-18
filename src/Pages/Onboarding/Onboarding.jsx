import React from 'react'
import './Onboarding.css'
import meju from './images/photo.png'
import peju from './images/ON.png'
import Footer from './Footer';
import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';



const Onboarding = () => {
const navigation = useNavigation();
const pagerRef = useRef(null);

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
<View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 } initialPage={0} ref={pagerRef}}>
        <View key="1">
         
        <div className="onboard">
          <img src={meju}/>
 
        <div className='step'>
          <div className='gradient'></div>
          <p>Skip long queues, send and receive money anywhere</p>
        </div>
      </div>
        </div>
       <Footer
  backgroundColor="#ffc93c"
  rightButtonLabel="Next"
  rightButtonPress={() => {
    handlePageChange(1);
  }}
/>
        
        </View>
       <View key="2">
            <div className="nboard">
          <img src={peju}/>
           </div>
         <Footer
            backgroundColor="#07689f"
    leftButtonLabel="Back"
    leftButtonPress={() => {
      handlePageChange(0);
    }}
          />
        </View>
      </ViewPager>
    </View>
   
  )
}

export default Onboarding
