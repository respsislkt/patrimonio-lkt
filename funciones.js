function doGet(){
    return HtmlService.createTemplateFromFile('index').evaluate().setTitle('PATRIMONIO EMPRESARIAL');
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerRazon(){
    let hoja = SpreadsheetApp.openById('1yj1NK8uygrh34F0kiggkI8zAwTpJifIZv8hsiU9b-xo').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}