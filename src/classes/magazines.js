import Data from './data-service';

export default class Magazines {
    // constructor() {
    //     // this.currentFloor = 1; 
    // }

    getMagazinesForKeywords(keywords) {
        // Get magazines
        // const data = new Data();
        
        // Loop through magazines
        console.log(`Data=${Data}`);
        console.log(`Data.magazines=${Data.magazines}`);

        for (const prop in Data.magazines) {
            console.log(`Data.magazines.${prop}.keywords = ${Data.magazines[prop].keywords}`);

            // For each magazine
            // If keyword exists, add magazine to list returned.
            if (keywords === Data.magazines[prop].keywords) {
                return Data.magazines[prop].magazineName;
            }
        }

    }
}