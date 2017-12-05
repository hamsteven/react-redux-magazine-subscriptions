import Data from './data-service';

export default class Magazines {
    // Get magazines for keywords
    getMagazinesForKeywords(keywords) {
        console.log(`getMagazinesForKeywords: keywords=${keywords}`);
        
        const qualities = keywords.split(" ");
        let magazines = [];
        console.log(`qualities=${qualities}`);
        // Loop through magazines
        for (let prop in Data.magazines) {
            console.log(`Data.magazines.${prop}.keywords = ${Data.magazines[prop].keywords}`);

            for (let quality of qualities) {
                console.log(`quality=${quality}`);
                if (quality === Data.magazines[prop].keywords) {
                    console.log('here2');
                    magazines.push(Data.magazines[prop].magazineName);  // If keyword exists, add magazine to list returned.                
                }
            }
        }

        return magazines;
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