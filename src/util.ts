import { CV } from "./types";

export function formatDate(date: Date) {
    if (date === undefined) {
        return "N/A";
    }
    console.log(date);
    return new Date(date).toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

export function saveFile(cv: CV) {
    // file setting
    const text = JSON.stringify(cv);
    const name = "sample.json";
    const type = "text/plain";

    // create file
    const a = document.createElement("a");
    const file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
}

export function loadFile(onLoad: (cv: CV) => void) {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = async (e) => {
        const file = (<HTMLInputElement>e.currentTarget)!.files![0];
        console.log(file);
        const reader = new FileReader();

        reader.onload = function () {
            console.log(reader.result);
            const obj = JSON.parse(reader.result as string);
            console.log(obj);
            onLoad(obj);
        };

        reader.readAsText(file);
    };

    input.click();
}
