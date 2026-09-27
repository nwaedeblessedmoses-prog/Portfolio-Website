
        const students = [
            {name: "Cody Rhodes", age: 15, score: 350},
            {name: "Nia Jax", age: 16, score: 118},
            {name: "Princess Ogbonna", age: 15, score: 301},
            {name: "Micah Jefferson", age: 17, score: 204},
            {name: "Timothy Castagne", age: 18, score: 264},
            {name: "Aaron Ramsdale", age: 16, score: 352}
        ]

        const cutoffmark = 300

        let highestScore = 0;
        let topStudent = "";

        for (let database of students) {
            if (database.score >= cutoffmark) {
                console.log(`${database.name} Passed!`)
            } else {
                console.log(`${database.name} Failed.`)
            }
        

        if (database.score > highestScore) {
            highestScore = database.score;
            topStudent = database.name;
            console.log(`Top Student: ${topStudent} with a score of ${highestScore}.`)
        }
    }