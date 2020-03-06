import React, {FC} from "react";

import ResultImageList from "../components/resutlPage/resutlImageList"
import ResultHeader from "../components/resutlPage/resutlHeader"


const ResultPage: FC = () => {
  
  
  return(
    <div>
      <ResultHeader />
      <ResultImageList />
    </div>
  )
}

export default ResultPage;