import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const Amazon = ()=>{
    return(
        <Card
        key = {Sdata[5].id}
        imgsrc={Sdata[5].imgsrc}
        title={Sdata[5].title}
        sName={Sdata[5].sName}
        link={Sdata[5].link}
        watch={Sdata[5].watch}

        />
    );
}


export default Amazon;