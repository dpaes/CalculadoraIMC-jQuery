function calcular(){
    let altura = $("#altura").val();
    let peso = $("#peso").val();

    altura = parseInt(altura)/100;
    peso = parseInt(peso);

    let IMC = peso/(altura*altura);
    let categoria;

    if(IMC < 18.5){
        categoria = "Você está abaixo do peso";
    } else if(IMC < 24.9){
        categoria = "Você está no peso ideal";
    } else if(IMC < 30){
        categoria = "Você está com sobrepeso";
    } else if(IMC < 34.9){
        categoria = "Você está com obesidade grau 1";
    } else if(IMC < 40){
        categoria = "Você está com obesidade grau 2";
    } else {
        categoria = "Você está com obesidade grau 3";
    }

    $("#imc").text(IMC.toFixed(2));
    $("#categoria").text(categoria);
    $(".row").attr("hidden",false);    
}