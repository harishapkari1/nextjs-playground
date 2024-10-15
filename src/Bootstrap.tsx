"use client";
/* eslint-disable  @typescript-eslint/no-unused-vars */
import { SitecorePageProps } from 'lib/page-props';
import { useEffect } from "react";

/**
 * The Bootstrap component is the entry point for performing any initialization logic
 * that needs to happen early in the application's lifecycle.
 */
const Bootstrap = (_props: SitecorePageProps): JSX.Element | null => {
  useEffect(()=>{
    import( "bootstrap/dist/js/bootstrap.bundle.js")
},[])
return <></>
};

export default Bootstrap;
