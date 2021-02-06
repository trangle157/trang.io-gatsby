import React from "react"
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resume from "../../public/assets/imgs/TrangLe_Resume.pdf";

export default function Resume() {
  return (
      <Document file={resume}/>
  )
}