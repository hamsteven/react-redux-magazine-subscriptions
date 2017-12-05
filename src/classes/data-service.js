// Data Service Singleton
class DataService {
    constructor() {
        this.magazines = [
            {
                id: 1,
                magazineName: "Vogue",
                keywords: "fashion"
            },
            {
                id: 2,
                magazineName: "Good Housekeeping",
                keywords: "home"
            },
            {
                id: 3,
                magazineName: "Men's Health",
                keywords: "health"
            },
            {
                id: 4,
                magazineName: "Car and Driver",
                keywords: "auto"
            },
            {
                id: 5,
                magazineName: "The French Gazette",
                keywords: "news"
            }
        ]
    }
}

export default (new DataService());