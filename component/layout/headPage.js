import React from "react";
import Head from "next/head";

function HeadPage({children,title}){
    return(
        <>
         <Head>
            <title>{title || "Gems-23"}</title>
         </Head>
         {children}
        </>
    )
}

export default HeadPage;