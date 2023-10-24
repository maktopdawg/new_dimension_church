"use client"

import React, { ReactNode } from 'react'

export default function Protected({children} : {children : ReactNode}) {
  const isLoggedIn = localStorage.getItem("user") ? true : false
  if(!isLoggedIn){
    window.location.href = "/admin/login"
  }else{
    return <div className="">{children}</div>
  }
}
