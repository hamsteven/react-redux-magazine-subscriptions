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
            }
        ]
    }
}

export default (new DataService());