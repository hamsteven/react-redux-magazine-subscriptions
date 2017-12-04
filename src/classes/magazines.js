import Data from './data-service';

export default class Magazines {
    // constructor() {
    //     // this.currentFloor = 1; 
    // }

    // Get magazines for keywords
    getMagazinesForKeywords(keywords) {
        console.log(`Data=${Data}`);
        console.log(`Data.magazines=${Data.magazines}`);

        // Loop through magazines
        for (const prop in Data.magazines) {
            console.log(`Data.magazines.${prop}.keywords = ${Data.magazines[prop].keywords}`);

            if (keywords === Data.magazines[prop].keywords) {
                return Data.magazines[prop].magazineName;  // If keyword exists, add magazine to list returned.                
            }
        }
    }

    // Modify qualities of a magazine
    setKeywordsForMagazines(magazineName, keywords) {
        console.log(`Data=${Data}`);
        console.log(`Data.magazines=${Data.magazines}`);

        // Loop through magazines
        for (const prop in Data.magazines) {
            console.log(`Data.magazines.${prop}.magazineName = ${Data.magazines[prop].magazineName}`);
            console.log('here1: ');
            console.log(`magazineName=${magazineName}`);
            console.log(`Data.magazines[prop].magazineName=${Data.magazines[prop].magazineName}`);
            if (magazineName === Data.magazines[prop].magazineName) {
                Data.magazines[prop].keywords = keywords;
                console.log(`After changing Data.magazines.${prop}.keywords = ${Data.magazines[prop].keywords}`);
                console.log('here2');
            }
        }
    }
}