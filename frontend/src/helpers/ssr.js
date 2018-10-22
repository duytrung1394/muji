import React from "react";

export const isServer = () => {
    return (typeof window === 'undefined');
}

// <If cond={isServer()}>
//   "condがtrueの時だけrenderしたいComponent"
// </If>
// という感じに使えます
export const If = (props) => {
    if( props.cond ){
        return props.children;
    }else{
        return null;
    }
}

export const BrowserOnly = (props) => (
    <If cond={ isServer() === false }>
        { props.children }
    </If>
)