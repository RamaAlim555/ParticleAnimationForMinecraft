function Convert() {
    let textArea = document.getElementById("textArea").value;
    let textArray = textArea.split('\n');

    AllFrame = textArray ;
    CombineFrame()
}

let AllFrame = [];
let facing ;
let arrayResult =[];

function CombineFrame() {
    facing = document.querySelector("#facing").value;
    let command ;
    let i;
    arrayResult =[];

    arrayResult.push(`setblock ^ ^ ^ button[facing=floor]`)

    AllFrame.forEach((value, index) => {
        i = index+1;
        command =
        `
        setblock ^ ^1 ^${i*2-1} minecraft:redstone_wire
        setblock ^1 ^1 ^${i*2-1} minecraft:redstone_wire
        setblock ^2 ^1 ^${i*2-1} minecraft:command_block
        setblock ^ ^1 ^${i*2} repeater[facing=${facing}]
        data merge block ^2 ^1 ^${i*2-1} {Command:"${value}"}
        `

        arrayResult.push(command);
        });
        
    console.log(arrayResult)
    }

    function downloadText(data, filename) {
        const text = data.join("\n"); // Menggabungkan data dengan baris baru
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.textContent = "Download Text";
    
        document.body.appendChild(a);
        a.click();
    
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
document.getElementById("downloadButton").addEventListener("click", function() {
downloadText(arrayResult, "command.mcfunction")});