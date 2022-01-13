function getValues(){
    sizeFieldId="size"
    weightFieldId="weight"

    sizeValue = parseInt(document.getElementById(sizeFieldId).value);
    weightValue = parseInt(document.getElementById(weightFieldId).value);

    doMagic(sizeValue,weightValue);
}

function doMagic(size,weight){
    magicValue=Math.round(((size*1.43)/weight)-3.4);
    console.log(magicValue);
    outputString="";
    outputValues="";

    if(magicValue==0){
        outputString="0";
    }
    else if(magicValue>0){
        outputString+="Positiv";

        for(let i=0;i<=magicValue;i++){
            if(i===magicValue){
                outputValues+=i;
            }
            else{
                outputValues+=i+",";
            }
            
        }
        console.log(outputValues);
    }
    else{
        outputString="Negativ";

        for(let i=0;i>=magicValue;i--){
            if(i===magicValue){
                outputValues+=i;
            }
            else{
                outputValues+=i+",";
            }
        }

        console.log(outputValues);
    }
    html="<li>"+outputString+"</li>"
    html+="<li>"+outputValues+"</li>"

    document.getElementById("outputDiv").innerHTML=html;

}