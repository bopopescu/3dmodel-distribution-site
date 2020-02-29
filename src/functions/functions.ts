import firebase from '../firebase';
import {TileDate} from "../types/types";

export const getData = async (func: (tileArray: TileDate[]) => void,
                         searchWord: string | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection("tileData");
    const searchedData = tileDataRef.where("keyword", "array-contains", searchWord);
    const temporaryData: object[] = [];
    
    // const snapShot = await searchedData.get();
    
    // for(const doc of snapShot.docs){
    //   temporaryData.push(doc.data());
    // }
    
    
    // snapShot.docs.map(doc => {
    //   temporaryData.push(doc.data());
    // })
    
    func( (temporaryData as TileDate[]) );
    
    console.log("こんにちは");
  }