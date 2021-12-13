const outputElement = document.getElementById("output_csv") as HTMLDivElement;

// get remote csv data
function getCsvData(dataPath: string) {
    const request = new XMLHttpRequest();
    request.addEventListener("load", (event: any) => {
        const response = event.target.responseText;
        convertArray(response);
    });
    request.open("GET", dataPath, true);
    request.send();
}

// convert a single string into array
function convertArray(data: string) {
    const dataArray = [];
    // separate a single string with line breaks
    const dataString = data.split("n");
    for (let i = 0; i < dataString.length; i++) {
        // seperate each array with comma
        dataArray[i] = dataString[i].split(",");
    }
    console.log(dataArray);
}

getCsvData("./example.csv");
