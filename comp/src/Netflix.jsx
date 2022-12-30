import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';


const Netflix = () => {
 return(
    <Card
    key = {Sdata[1].id}
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sName={Sdata[1].sName}
    link={Sdata[1].link}
    watch={Sdata[1].watch}
/>
);
 }

export default Netflix;