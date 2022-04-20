



function CalcularHoraTrab (salario){
    let valorHorasTrab = salario/8;
    return valorHorasTrab;
}

function CalcularHorasExtras (salario){
    let valorHorasExtra = salario/4;
    return valorHorasExtra;
}

function CalcularSalBruto(horasTrab,valorHoraTrab){
    let salBruto = horasTrab * valorHoraTrab;
    return salBruto;
}

function HoraExtraReceber(qtdHorasExtras,valorHorasExtra){
    let valorHorasExtrasRec = qtdHorasExtras * valorHorasExtra;
    return valorHorasExtrasRec;
}

function SalarioReceber(salBruto,valorHorasExtrasRec){
    let sal_receber = salBruto + valorHorasExtrasRec; 
    return sal_receber;
}
function inicializar(){
    let qtdHorasTrab = 200;
    let valorSalarioMin = 1212;
    let qtdHorasExtras = 30;
    console.log(CalcularHoraTrab(valorSalarioMin));
    console.log(CalcularHorasExtras(valorSalarioMin));
    console.log(CalcularSalBruto(qtdHorasTrab,CalcularHoraTrab(valorSalarioMin)));
    console.log(HoraExtraReceber(qtdHorasExtras,CalcularHorasExtras(valorSalarioMin)));
    console.log(SalarioReceber(CalcularSalBruto(qtdHorasTrab,CalcularHoraTrab(valorSalarioMinHoraExtraReceber(qtdHorasExtras,CalcularHoraExtra(valorSalarioMin))))));
}
inicializar();
