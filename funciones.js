function doGet(){
    return HtmlService.createTemplateFromFile('index').evaluate().setTitle('PATRIMONIO EMPRESARIAL');
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}