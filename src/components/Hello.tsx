import * as React from "react";

export interface HelloProps { 
    compiler: string; 
    framework: string; 
}

export const Hello = (props: HelloProps) => {
    return (<h1>Hello from ts biubiu dasdas  {props.compiler} and {props.framework}!</h1>);
};