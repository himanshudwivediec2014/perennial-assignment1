class Decoding{
    constructor(){
        this.dummyArray = [];
    }
    baseToDecimal(str){
        console.log(str);
        let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        let dummyArray = [];
        
        if(str[str.length-2] === "="){
            for(let i = 0; i < (str.length-2); i++){

                this.dummyArray.push(base64.indexOf(str[i]));

            }    
        } else if(str[str.length-1] === "="){
            for(let i = 0; i < (str.length-1); i++){
            
                this.dummyArray.push(base64.indexOf(str[i]));

            } 
        } else{
            for(let i = 0; i < (str.length); i++){
            
                this.dummyArray.push(base64.indexOf(str[i]));

            } 
        }
        return this.decimalToBinary(this.dummyArray);
    }

    decimalToBinary(arr){
        this.dummyArray = [];
        let binary = '';

        for(let i = 0; i < arr.length; i++){
            this.dummyArray.push(arr[i].toString(2));
            
            for(let j = this.dummyArray[i].length; j!=6 && j<7; j++){
                this.dummyArray[i] = "0" + this.dummyArray[i];
            }

            binary += this.dummyArray[i];
        }

        return this.binarySet(binary);
    }

    binarySet(binary){
        this.dummyArray = [];
        for(let i = 0; i < binary.length; i+=8){
            let bits = '';

            for(let j = i; j<=i+7; j++){
                bits += binary.charAt(j);
            }
            
            this.dummyArray.push(bits);
        }

        if(this.dummyArray[this.dummyArray.length - 1].length % 3 != 0){
            this.dummyArray.pop(this.dummyArray[this.dummyArray.length - 1]);
        }

        return this.binaryToText(this.dummyArray);
    }

    binaryToText(arr){
        this.dummyArray = [];
        let decodedText = '';
        for(let element of arr){
            let hex = parseInt(element, 2).toString(16)
            decodedText += (String.fromCharCode(parseInt(hex, 16)));  //parseInt(element, 2).toString(16)
        }
        console.log(decodedText);
        return decodedText;
    }
}