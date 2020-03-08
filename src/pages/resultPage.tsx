import React, {FC} from "react";

import ResultImageList from "../components/resultPage/resultImageList"
import ResultHeader from "../components/resultPage/resultHeader"

const ResultPage: FC = () => {
  return(
    <div>
      <ResultHeader />
      <ResultImageList />
    </div>
  )
}

export default ResultPage;